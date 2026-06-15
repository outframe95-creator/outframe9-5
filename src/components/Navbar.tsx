'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'
import { useState, useEffect, useCallback } from 'react'

const navLinks = ['home', 'services', 'solutions', 'products', 'contact'] as const

export default function Navbar() {
  const { t, locale, setLocale, dir } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 group">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              outframe<span className="text-red-500">9-5</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link === 'home' ? 'home' : link)}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {t.nav[link]}
              </button>
            ))}
            <button
              onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/50 transition-all duration-300"
            >
              {t.language}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 text-zinc-300"
            >
              {t.language}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link === 'home' ? 'home' : link)}
                  className="block w-full text-left text-base text-zinc-300 hover:text-white py-2 transition-colors"
                >
                  {t.nav[link]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
