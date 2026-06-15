'use client'

import { useLanguage } from '@/i18n/LanguageProvider'
import AnimatedSection from './AnimatedSection'

export default function PrivacySection() {
  const { t, dir } = useLanguage()

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.privacy.title}
          </h2>
          <p className="text-zinc-400 text-center text-base sm:text-lg mb-2 max-w-xl mx-auto">
            {t.privacy.subtitle}
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12 sm:mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.privacy.items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/[0.08] backdrop-blur-md hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 h-full">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
