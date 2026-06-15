'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const frameCheck = () => {
      const frames = document.querySelectorAll('canvas')
      if (frames.length > 0) {
        const timeout = setTimeout(() => setLoading(false), 1200)
        return () => clearTimeout(timeout)
      }
      requestAnimationFrame(frameCheck)
    }
    const timer = setTimeout(() => setLoading(false), 4000)
    const raf = requestAnimationFrame(frameCheck)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-4xl sm:text-5xl font-bold text-white">
                outframe<span className="text-red-500">9-5</span>
              </span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-zinc-500 text-sm mt-4 tracking-widest uppercase"
            >
              Loading experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
