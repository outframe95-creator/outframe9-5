import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ResultsSection from '@/components/ResultsSection'
import ProductsSection from '@/components/ProductsSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import ContactSection from '@/components/ContactSection'
import PrivacySection from '@/components/PrivacySection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <ResultsSection />
      <ProductsSection />
      <IntegrationsSection />
      <ContactSection />
      <PrivacySection />
    </main>
  )
}
