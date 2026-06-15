'use client'

import { useLanguage } from '@/i18n/LanguageProvider'

export default function Footer() {
  const { t, dir } = useLanguage()

  return (
    <footer className="relative border-t border-white/[0.06] bg-black" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-lg font-bold text-white">
              outframe<span className="text-red-500">9-5</span>
            </span>
            <p className="text-sm text-zinc-500 mt-1">{t.footer.tagline}</p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
