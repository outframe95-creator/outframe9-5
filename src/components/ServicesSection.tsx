'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'
import AnimatedSection from './AnimatedSection'

const serviceIcons = [
  <svg key="s0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>,
  <svg key="s1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  <svg key="s2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="s3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  <svg key="s4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16"/><path d="M4 12h16"/><path d="M4 20h16"/></svg>,
]

export default function ServicesSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.services.title}
          </h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12 sm:mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.services.items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.08] backdrop-blur-md hover:border-red-500/40 transition-all duration-500 h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/20 flex items-center justify-center text-red-400 mb-5 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-500">
                    {serviceIcons[index]}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">{item.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-red-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>{dir === 'rtl' ? 'اكتشف المزيد' : 'Learn more'}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={dir === 'rtl' ? 'rotate-180' : ''}>
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
