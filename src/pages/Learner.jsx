import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Search, BookOpen, PlayCircle, MessageCircle, Guitar } from 'lucide-react'

export default function Learner() {
  const steps = [
    { icon: Search, title: 'Search any song', desc: 'Find songs by title, artist, instrument, raga, or tags.' },
    { icon: Guitar, title: 'Choose your instrument', desc: 'Switch views for guitar, piano, vocals, flute, and more.' },
    { icon: BookOpen, title: 'Access structured notes', desc: 'Follow clear, accurate notes and tabs with version history.' },
    { icon: PlayCircle, title: 'Watch tutorials', desc: 'Learn quickly with linked video walkthroughs and audio previews.' },
    { icon: MessageCircle, title: 'Request notes', desc: 'Ask creators for new songs or clarifications.' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Learners</h1>
        <p className="mt-3 text-gray-300">Everything you need to master your favorite songs.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black"><s.icon size={18} /></div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black">Start Learning</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
