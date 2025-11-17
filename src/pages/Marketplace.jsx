import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Filter, Store } from 'lucide-react'

export default function Marketplace() {
  const items = [
    { title: 'Handmade Bamboo Flute', price: '$49', seller: 'Maya Crafts' },
    { title: 'Customized Electric Guitar', price: '$399', seller: 'ToneSmiths' },
    { title: 'Tabla Set (Indian Classical)', price: '$199', seller: 'Heritage Sounds' },
    { title: 'Sitar – Student Model', price: '$299', seller: 'SitarLabs' },
    { title: 'Guitar Capo – Rosewood', price: '$19', seller: 'Artisan Woodworks' },
    { title: 'Flute Cleaning Kit', price: '$15', seller: 'Maya Crafts' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-4xl font-bold">Marketplace</h1>
            <p className="mt-3 text-gray-300">Discover handmade instruments and accessories from independent makers.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white"><Filter size={16}/> Filters</button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/0"></div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="text-sm text-gray-400">by {it.seller}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-white">{it.price}</span>
                <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black">Explore</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black"><Store size={16}/> Explore Marketplace</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
