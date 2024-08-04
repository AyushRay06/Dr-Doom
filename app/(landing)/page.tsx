import { BentoGridThirdDemo } from "@/components/landing-features"
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
    </div>
  )
}
export default LandingPage
