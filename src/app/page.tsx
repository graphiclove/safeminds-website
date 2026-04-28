import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CoursePreview } from '@/components/sections/CoursePreview'
import { CustomContent } from '@/components/sections/CustomContent'
import { PassGuarantee } from '@/components/sections/PassGuarantee'
import { WhySafeminds } from '@/components/sections/WhySafeminds'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <CoursePreview />
      <CustomContent />
      <PassGuarantee />
      <WhySafeminds />
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <FAQ />
      <FinalCTA />
    </main>
  )
}
