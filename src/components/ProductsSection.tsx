'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'
import AnimatedSection from './AnimatedSection'

export default function ProductsSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="products" className="relative py-20 sm:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.products.title}
          </h2>
          <p className="text-zinc-400 text-center text-base sm:text-lg mb-2 max-w-xl mx-auto">
            {t.products.subtitle}
          </p>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12 sm:mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.products.items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.08] backdrop-blur-md hover:border-red-500/40 transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/[0.06]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const fallback = document.createElement('div')
                        fallback.className = 'absolute inset-0 flex items-center justify-center'
                        fallback.innerHTML = '<div class="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>'
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-grow">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-400">{item.price}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.25)]"
                  >
                    {dir === 'rtl' ? 'اشتري الآن' : 'Buy Now'}
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
