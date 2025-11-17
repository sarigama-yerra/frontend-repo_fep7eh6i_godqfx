import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import RepositoryCards from '../components/RepositoryCards'
import { HowItWorks, KeyFeatures, Benefits, Testimonials } from '../components/Sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <KeyFeatures />
        <Benefits />
        <RepositoryCards />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
