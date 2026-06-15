'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function HowItWorksSection() {
  const { t, dir } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
        >
          {t.howItWorks.title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-16 sm:mb-20"
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-red-500/20 to-transparent" />

          <div className="space-y-12 sm:space-y-16">
            {t.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex items-start gap-6 sm:gap-8 group"
              >
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                  >
                    <span className="text-xs sm:text-base font-bold text-white">{step.num}</span>
                  </motion.div>
                  {index < t.howItWorks.steps.length - 1 && (
                    <div className="absolute top-8 sm:top-16 left-1/2 -translate-x-1/2 w-px h-8 sm:h-12 bg-gradient-to-b from-red-500/40 to-transparent" />
                  )}
                </div>
                <div className="pt-1 sm:pt-3">
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
