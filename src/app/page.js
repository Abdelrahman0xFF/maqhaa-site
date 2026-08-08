import { OrderProvider } from '@/components/OrderProvider'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { WhatIsMaqhaa } from '@/components/WhatIsMaqhaa'
import { InteractiveDemo } from '@/components/InteractiveDemo'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import { Pricing } from '@/components/Pricing'
import { HardwareSection } from '@/components/HardwareSection'
import { FAQSection } from '@/components/FAQSection'
import { CtaSection } from '@/components/CtaSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <OrderProvider>
      <Navbar />
      <main>
        <Hero />
        <WhatIsMaqhaa />
        <InteractiveDemo />
        <FeaturesGrid />
        <Pricing />
        <HardwareSection />
        <FAQSection />
        <CtaSection />
      </main>
      <Footer />
    </OrderProvider>
  )
}
