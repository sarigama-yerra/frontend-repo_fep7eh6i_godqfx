import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HandCoins, Package, BadgeCheck, Users, TrendingUp } from 'lucide-react'

export default function Creator() {
  const perks = [
    { icon: HandCoins, title: 'Sell Premium Notes', desc: 'Offer high-quality sheets and packs for your audience.' },
    { icon: HandCoins, title: 'Receive Tips', desc: 'Let fans support your work with one-time donations.' },
    { icon: Package, title: 'Sell Bundles & Courses', desc: 'Create curated packs and structured lessons.' },
    { icon: BadgeCheck, title: 'Verified Portfolio', desc: 'Showcase your best work and earn credibility.' },
    { icon: TrendingUp, title: 'Grow Followers', desc: 'Build an audience and increase your reach.' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Creators</h1>
        <p className="mt-3 text-gray-300">Turn your knowledge into income and impact.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black"><p.icon size={18} /></div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black">Become a Creator</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
