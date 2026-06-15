'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'
import AnimatedSection from './AnimatedSection'

export default function ContactSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.contact.title}
          </h2>
          <p className="text-zinc-400 text-center text-base sm:text-lg mb-2 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12 sm:mb-16" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.08] backdrop-blur-md">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05),transparent_60%)]" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <a
                href="mailto:outframe95@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.015] border border-white/[0.08] backdrop-blur-md hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/25 flex items-center justify-center text-red-400 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-zinc-500">{dir === 'rtl' ? 'البريد الإلكتروني' : 'Email'}</div>
                  <div className="text-white font-medium group-hover:text-red-400 transition-colors">{t.contact.email}</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600 group-hover:text-red-400 transition-colors">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/outframe9_5?igsh=ZXhtdXkxZmE2Ynll"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.015] border border-white/[0.08] backdrop-blur-md hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/25 flex items-center justify-center text-red-400 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-zinc-500">Instagram</div>
                  <div className="text-white font-medium group-hover:text-red-400 transition-colors">{t.contact.instagram}</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600 group-hover:text-red-400 transition-colors">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.06] backdrop-blur-md opacity-50 cursor-not-allowed">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/30 border border-white/[0.06] flex items-center justify-center text-zinc-600 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-zinc-500">WhatsApp</div>
                  <div className="text-zinc-500 font-medium">{t.contact.whatsapp_placeholder}</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:outframe95@gmail.com"
                className="flex-1 px-6 py-3.5 rounded-xl bg-red-600 text-white text-sm font-semibold text-center hover:bg-red-500 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              >
                {t.contact.cta_contact}
              </a>
              <a
                href="mailto:outframe95@gmail.com?subject=Project%20Inquiry"
                className="flex-1 px-6 py-3.5 rounded-xl border border-white/10 text-white/80 text-sm font-medium text-center hover:border-red-500/30 hover:text-white transition-all duration-500 backdrop-blur-sm"
              >
                {t.contact.cta_project}
              </a>
              <a
                href="mailto:outframe95@gmail.com?subject=AI%20Audit%20Request"
                className="flex-1 px-6 py-3.5 rounded-xl bg-white/5 text-zinc-300 text-sm font-medium text-center hover:bg-white/10 hover:text-white transition-all duration-500 border border-white/5"
              >
                {t.contact.cta_audit}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
