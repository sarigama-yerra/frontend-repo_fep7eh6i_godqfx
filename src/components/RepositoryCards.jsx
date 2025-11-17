import { Play, FileText, Guitar, Piano, Drum, Mic, Music2 } from 'lucide-react'

export default function RepositoryCards() {
  const repos = [
    { title: 'Shape of You', creator: 'RhythmWorks', instruments: ['Guitar', 'Piano'], difficulty: 'Easy' },
    { title: 'Lag Jaa Gale', creator: 'Riya S', instruments: ['Flute', 'Vocal'], difficulty: 'Intermediate' },
    { title: 'Bohemian Rhapsody', creator: 'ToneCraft', instruments: ['Piano', 'Guitar'], difficulty: 'Advanced' },
    { title: 'Kesariya', creator: 'SitarLabs', instruments: ['Sitar', 'Flute'], difficulty: 'Intermediate' },
  ]

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Explore Repositories</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {repos.map((r) => (
            <div key={r.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/0"></div>
              <h3 className="mt-4 text-lg font-semibold text-white">{r.title}</h3>
              <p className="text-sm text-gray-400">by {r.creator}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-300">
                {r.instruments.map((ins) => (
                  <span key={ins} className="rounded-md border border-white/10 bg-white/5 px-2 py-1">{ins}</span>
                ))}
                <span className="ml-auto rounded-md border border-white/10 bg-white/5 px-2 py-1">{r.difficulty}</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <button className="flex-1 rounded-md bg-white px-3 py-2 font-medium text-black">Open</button>
                <button className="rounded-md border border-white/20 px-3 py-2 text-white">Preview</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
