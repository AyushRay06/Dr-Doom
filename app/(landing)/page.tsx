
import { BentoGridThirdDemo } from "@/components/landing-features"
import { Footer } from "@/components/landing-footer"
import { LandingHero } from "@/components/landing-hero"
import { LandingNavbar } from "@/components/landing-navbar"

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <div className="m-10 md:">
        <BentoGridThirdDemo />
      </div>
      <Footer />
    </div>
  )
}
export default LandingPage
