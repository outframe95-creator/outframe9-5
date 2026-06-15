'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import ar from './ar.json'
import en from './en.json'

export type Locale = 'ar' | 'en'
export type TranslationDict = typeof ar

const dictionaries: Record<Locale, TranslationDict> = { ar, en }

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationDict
  dir: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'ar',
  setLocale: () => {},
  t: ar,
  dir: 'rtl',
})

export function LanguageProvider({ children, initialLocale = 'ar' }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('outframe-lang', newLocale)
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale], dir: locale === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
