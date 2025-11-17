import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-3 text-gray-300">We’d love to hear from you—whether you’re a creator, learner, or partner.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-white/30" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-white/30" placeholder="you@domain.com" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-white/30" placeholder="How can we help?" />
            </div>
            <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black">Send</button>
          </form>

          <div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Reach us</h3>
              <p className="mt-2 text-sm text-gray-300">Email: hello@dhun.app</p>
              <p className="mt-1 text-sm text-gray-300">Partnerships: partners@dhun.app</p>
              <div className="mt-4 text-sm text-gray-400">Follow us on social for updates.</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
