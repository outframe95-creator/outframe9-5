'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'

function CountUp({ value, isInView }: { value: string; isInView: boolean }) {
  const [display, setDisplay] = useState('0')
  const numStr = value.replace(/[^0-9.]/g, '')
  const prefix = value.replace(/[0-9.]/g, '')
  const num = parseFloat(numStr)

  useEffect(() => {
    if (!isInView || !num) { setDisplay(value); return }
    let start = 0
    const end = num
    const duration = 2000
    const startTime = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = eased * end
      setDisplay(prefix + Math.round(start).toString())
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, num, prefix, value])

  return <>{display}</>
}

export default function ResultsSection() {
  const { t, dir } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.04),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
        >
          {t.results.title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {t.results.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-center hover:border-red-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
                  <CountUp value={stat.value} isInView={isInView} />
                </div>
                <div className="text-sm sm:text-base text-zinc-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
