'use client'

import React from 'react'
import { useLanguage } from '@/i18n/LanguageProvider'
import AnimatedSection from './AnimatedSection'

const integrationIcons: Record<string, React.JSX.Element> = {
  n8n: <svg key="n8n" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16"/><path d="M4 12h16"/><path d="M4 20h16"/></svg>,
  API: <svg key="api" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>,
  CRM: <svg key="crm" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  WhatsApp: <svg key="wa" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  Email: <svg key="email" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
}

export default function IntegrationsSection() {
  const { t, dir } = useLanguage()

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.integrations.title}
          </h2>
          <p className="text-zinc-400 text-center text-base sm:text-lg mb-2 max-w-xl mx-auto">
            {t.integrations.subtitle}
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12 sm:mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.integrations.items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md hover:border-red-500/30 hover:bg-white/[0.04] transition-all duration-500 text-center h-full flex flex-col items-center justify-center gap-3">
                <div className="text-zinc-500 group-hover:text-red-400 transition-colors duration-500">
                  {integrationIcons[item.name] || (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  )}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-zinc-500 mt-1">{item.desc}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
