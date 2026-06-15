import { LanguageProvider } from '@/i18n/LanguageProvider'
import ClientLayout from './ClientLayout'
import type { Locale } from '@/i18n/LanguageProvider'

const supportedLocales = ['ar', 'en'] as const

export async function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = (supportedLocales as readonly string[]).includes(lang) ? lang as Locale : 'ar'

  return (
    <LanguageProvider initialLocale={locale}>
      <ClientLayout>{children}</ClientLayout>
    </LanguageProvider>
  )
}
