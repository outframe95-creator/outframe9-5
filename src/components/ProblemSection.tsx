'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'
import AnimatedSection from './AnimatedSection'

const icons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4v16h16"/><path d="m20 10-8 8-4-4-6 6"/></svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"/><path d="M18 2 2 18M12 12 20 4"/></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>,
]

export default function ProblemSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="solutions" className="relative py-20 sm:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.problems.title}
          </h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12 sm:mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.problems.items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-500 h-full"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-transparent to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-500">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
