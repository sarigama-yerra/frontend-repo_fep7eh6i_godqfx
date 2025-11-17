import { motion } from 'framer-motion'
import { FolderGit2, Upload, Users, HandCoins, LayoutDashboard, Music3, ShieldCheck, BookOpen, Search, Star, Video, FileAudio2, FileText, Guitar, Piano, Drum, Mic, Layers } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    { icon: Upload, title: 'Upload', desc: 'Creators publish notes, tabs, sheets, PDFs, audio and video into structured song repositories.' },
    { icon: BookOpen, title: 'Learn', desc: 'Learners browse by instrument and difficulty, access accurate notes, and follow tutorials.' },
    { icon: Users, title: 'Collaborate', desc: 'Suggest edits, track versions, and merge improvements—just like code.' },
    { icon: HandCoins, title: 'Earn', desc: 'Sell premium notes, accept tips, and offer curated bundles and courses.' },
  ]

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">How DHUN Works</h2>
        <p className="mt-2 max-w-2xl text-gray-400">A simple, powerful flow to organize and grow the world’s musical knowledge.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black"><s.icon size={18} /></div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function KeyFeatures() {
  const features = [
    { icon: FolderGit2, title: 'Repositories', desc: 'Each song has a versioned repository with structured files and metadata.' },
    { icon: Layers, title: 'Version Control', desc: 'Track changes, compare diffs, and approve contributions like GitHub.' },
    { icon: Music3, title: 'Multi-Instrument', desc: 'Switch views for guitar, piano, vocals, drums, flute, and more.' },
    { icon: HandCoins, title: 'Paid Notes', desc: 'Sell premium sheets and packs—secure delivery and payouts.' },
    { icon: LayoutDashboard, title: 'Creator Dashboard', desc: 'Analytics, followers, revenue, and repository health at a glance.' },
    { icon: Search, title: 'Powerful Search', desc: 'Find by instrument, raga, difficulty, tags, and creators.' },
    { icon: ShieldCheck, title: 'Verified Creators', desc: 'Badges for quality and community trust.' },
    { icon: Video, title: 'Tutorial Links', desc: 'Attach video walkthroughs and audio previews to each part.' },
  ]

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Key Features</h2>
        <p className="mt-2 max-w-2xl text-gray-400">Built for creators and learners with a familiar, collaborative workflow.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black"><f.icon size={18} /></div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Benefits() {
  const creator = [
    'Earn from premium packs and tips',
    'Build a verified, versioned portfolio',
    'Grow an engaged audience',
  ]
  const learner = [
    'Accurate notes structured for learning',
    'Choose instrument-specific views',
    'Learn from verified creators',
  ]
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Benefits</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">For Creators</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {creator.map((item) => (<li key={item}>• {item}</li>))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">For Learners</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {learner.map((item) => (<li key={item}>• {item}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { name: 'Aarav – Guitarist', quote: 'Finally a place where notes are accurate and versioned. DHUN feels like GitHub for music.' },
    { name: 'Maya – Flute Maker', quote: 'The marketplace helped me reach learners worldwide.' },
    { name: 'Lena – Piano Teacher', quote: 'My students love the structured repositories and tutorials.' },
  ]
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">What people say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-6 text-gray-300">
              <Star className="text-yellow-400" size={18} />
              <p className="mt-3 text-sm">“{t.quote}”</p>
              <p className="mt-4 text-xs text-gray-400">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
