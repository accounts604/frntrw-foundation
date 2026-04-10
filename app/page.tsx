import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CensusStrip from '@/components/CensusStrip'
import WhyWeExist from '@/components/WhyWeExist'
import Team from '@/components/Team'
import Pillars from '@/components/Pillars'
import Lanes from '@/components/Lanes'
import Impact from '@/components/Impact'
import GroupPhoto from '@/components/GroupPhoto'
import Outdoor from '@/components/Outdoor'
import SponsorsCarousel from '@/components/SponsorsCarousel'
import PartnerSection from '@/components/PartnerSection'
import Register from '@/components/Register'
import Governance from '@/components/Governance'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CensusStrip />
        <WhyWeExist />
        <Lanes />
        <Pillars />
        <Team />
        <Impact />
        <GroupPhoto />
        <Outdoor />
        <SponsorsCarousel />
        <PartnerSection />
        <Register />
        <Governance />
      </main>
      <Footer />
    </>
  )
}
