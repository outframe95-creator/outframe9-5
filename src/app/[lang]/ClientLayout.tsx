'use client'

import { useLanguage } from '@/i18n/LanguageProvider'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ResultsSection from '@/components/ResultsSection'
import ProductsSection from '@/components/ProductsSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import ContactSection from '@/components/ContactSection'
import PrivacySection from '@/components/PrivacySection'
import Footer from '@/components/Footer'
import ScrollFrameRenderer from '@/components/ScrollFrameRenderer'
import PageLoader from '@/components/PageLoader'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { dir } = useLanguage()

  return (
    <div dir={dir} className="relative">
      <PageLoader />
      <ScrollFrameRenderer totalFrames={180} />
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  )
}
