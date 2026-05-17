import { Hero } from '@/components/sections/Hero'
import { TrustBadges } from '@/components/sections/TrustBadges'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { SocialProof } from '@/components/sections/SocialProof'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { IndustrySection } from '@/components/sections/IndustrySection'
import { DemoSection } from '@/components/sections/DemoSection'
import { CoursePreview } from '@/components/sections/CoursePreview'
import { CustomContent } from '@/components/sections/CustomContent'
import { PassGuarantee } from '@/components/sections/PassGuarantee'
import { WhySafeminds } from '@/components/sections/WhySafeminds'
import { RoleSections } from '@/components/sections/RoleSections'
import { EmployeeFeedback } from '@/components/sections/EmployeeFeedback'
import { Testimonials } from '@/components/sections/Testimonials'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { Pricing } from '@/components/sections/Pricing'
import { CompetitorComparison } from '@/components/sections/CompetitorComparison'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ClientLogos />
      <SocialProof />
      <HowItWorks />
      <IndustrySection />
      <DemoSection />
      <CoursePreview />
      <CustomContent />
      <PassGuarantee />
      <WhySafeminds />
      <RoleSections />
      <EmployeeFeedback />
      <Testimonials />
      <ComparisonTable />
      <div id="pricing">
        <Pricing />
      </div>
      <CompetitorComparison />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
