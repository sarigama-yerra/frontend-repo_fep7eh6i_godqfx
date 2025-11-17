import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">About DHUN</h1>
        <p className="mt-4 text-lg text-gray-300">Organizing the world’s musical knowledge.</p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-2 text-gray-300">Organizing the world’s musical knowledge.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-2 text-gray-300">A global, structured, version-controlled music repository.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="mt-2 text-gray-300">DHUN was created by musicians who saw the need for a central, collaborative hub to make music learning reliable and accessible.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Why it matters</h2>
            <p className="mt-2 text-gray-300">We’re preserving musical knowledge, empowering artists to earn fairly, and building a thriving global community around learning and collaboration.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
