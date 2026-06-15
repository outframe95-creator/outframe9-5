'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function HeroSection() {
  const { t, dir } = useLanguage()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08),transparent_70%)] z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-sm mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs sm:text-sm text-red-300 tracking-widest uppercase font-medium">
              AI Automation Agency
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-red-600 text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-500 hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] w-full sm:w-auto"
          >
            <span className="relative z-10">{t.hero.cta_primary}</span>
          </button>
          <button
            onClick={() => scrollTo('products')}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white/80 text-sm sm:text-base font-medium hover:border-red-500/30 hover:text-white transition-all duration-500 backdrop-blur-sm w-full sm:w-auto"
          >
            {t.hero.cta_secondary}
          </button>
          <a
            href="mailto:outframe95@gmail.com"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 text-zinc-300 text-sm sm:text-base font-medium hover:bg-white/10 hover:text-white transition-all duration-500 backdrop-blur-sm border border-white/5 w-full sm:w-auto text-center"
          >
            {t.hero.cta_contact}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-zinc-500">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-zinc-500 flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1 h-2 rounded-full bg-zinc-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
