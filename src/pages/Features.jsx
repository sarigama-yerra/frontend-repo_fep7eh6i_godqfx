import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FolderGit2, Upload, Layers, Users2, Search, BadgeCheck, HandCoins, Video, Music2, Package } from 'lucide-react'

const items = [
  { icon: FolderGit2, title: 'Song Repositories', desc: 'Each song gets its own structured repo with organized files and metadata.' },
  { icon: Upload, title: 'Rich Uploads', desc: 'Add notes, tabs, PDFs, audio, video, and tutorial links in one place.' },
  { icon: Layers, title: 'Version History', desc: 'Track changes, compare diffs, and roll back if needed.' },
  { icon: Users2, title: 'Suggest & Approve', desc: 'Community suggests edits, creators review and merge.' },
  { icon: Search, title: 'Deep Search', desc: 'Find by instrument, difficulty, raga, tags, and creator.' },
  { icon: BadgeCheck, title: 'Creator Profiles', desc: 'Build portfolios with badges, followers, and reputation.' },
  { icon: HandCoins, title: 'Tips & Donations', desc: 'Support your favorite creators with one-time tips.' },
  { icon: Package, title: 'Paid Packs', desc: 'Sell premium notes, bundles, and course modules.' },
  { icon: Music2, title: 'Marketplace', desc: 'Discover handmade instruments and accessories from makers.' },
]

export default function Features() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Features</h1>
        <p className="mt-3 text-gray-300">Everything you need to create, collaborate, learn, and earn—built into a single platform.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black"><f.icon size={18} /></div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
