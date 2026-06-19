import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/marketing/hero"
import { Features } from "@/components/marketing/features"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { PricingPreview } from "@/components/marketing/pricing-preview"
import { FAQ } from "@/components/marketing/faq"
import { CTA } from "@/components/marketing/cta"

export default function Home() {
  return (
    <div className="dark flex min-h-screen flex-1 flex-col overflow-x-hidden bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <HowItWorks />
        <PricingPreview />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
