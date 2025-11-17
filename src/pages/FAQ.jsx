import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  { q: 'How does DHUN work?', a: 'Creators upload structured repositories for songs. Learners browse, learn, and contribute improvements with version control.' },
  { q: 'How do creators earn money?', a: 'Through premium note sales, downloadable packs, tips/donations, and course modules.' },
  { q: 'What are repositories?', a: 'Organized song folders with notes, tabs, PDFs, audio, video links, and metadata, all version controlled.' },
  { q: 'How are paid notes managed?', a: 'Secure checkout with instant access to purchased files, and fair payouts to creators.' },
  { q: 'How does version control work?', a: 'Track changes, submit suggestions, and creators review and merge updates, similar to GitHub.' },
  { q: 'How can small instrument makers join?', a: 'Apply to the marketplace and list your handmade instruments and accessories.' },
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          {faqs.map((f, idx) => (
            <details key={f.q} className="group p-6" open={idx===0}>
              <summary className="cursor-pointer list-none text-lg font-medium text-white">
                <span className="inline-block transition group-open:opacity-70">{f.q}</span>
              </summary>
              <p className="mt-3 text-sm text-gray-300">{f.a}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
