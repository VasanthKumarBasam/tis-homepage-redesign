import { MotionConfig } from 'motion/react'
import { CustomCursor } from '@/components/animation/CustomCursor'
import { ScrollProgress } from '@/components/animation/ScrollProgress'
import { Footer } from '@/components/layout/Footer'
import { MobileCtaBar } from '@/components/layout/MobileCtaBar'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { CampusFacts } from '@/components/sections/CampusFacts'
import { Enquiry } from '@/components/sections/Enquiry'
import { Hero } from '@/components/sections/Hero'
import { ParentReviews } from '@/components/sections/ParentReviews'
import { Partners } from '@/components/sections/Partners'
import { Recognition } from '@/components/sections/Recognition'
import { Sports } from '@/components/sections/Sports'
import { StudentVoices } from '@/components/sections/StudentVoices'
import { Visitors } from '@/components/sections/Visitors'

export default function App() {
  return (
    // reducedMotion="user": transform animations are skipped when the OS asks for reduced motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-marigold px-5 py-3 font-semibold text-navy focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <CampusFacts />
        <Sports />
        <StudentVoices />
        <Recognition />
        <Visitors />
        <ParentReviews />
        <Partners />
        <Enquiry />
      </main>
      <Footer />
      <MobileCtaBar />
    </MotionConfig>
  )
}
