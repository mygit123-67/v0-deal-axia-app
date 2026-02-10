import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { TrustMarquee } from "@/components/landing/trust-marquee"
import { WorkspacesSection } from "@/components/landing/workspaces-section"
import { DocumentsSection } from "@/components/landing/documents-section"
import { DataroomSection } from "@/components/landing/dataroom-section"
import { PipelineSection } from "@/components/landing/pipeline-section"
import { UsageSection } from "@/components/landing/usage-section"
import { RolesSection } from "@/components/landing/roles-section"
import { BillingSection } from "@/components/landing/billing-section"
import { ValuationSection } from "@/components/landing/valuation-section"
import { ExportSection } from "@/components/landing/export-section"
import { StorageSection } from "@/components/landing/storage-section"
import { PlatformFeatures } from "@/components/landing/platform-features"
import { WhyDealaxia } from "@/components/landing/why-dealaxia"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { Pricing } from "@/components/landing/pricing"
import { Clients } from "@/components/landing/clients"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <WorkspacesSection />
        <DocumentsSection />
        <DataroomSection />
        <PipelineSection />
        <UsageSection />
        <RolesSection />
        <BillingSection />
        <ValuationSection />
        <ExportSection />
        <StorageSection />
        <PlatformFeatures />
        <WhyDealaxia />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Clients />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
