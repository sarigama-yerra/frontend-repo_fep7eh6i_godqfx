import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle, Shield } from 'lucide-react'

const plans = [
  { name: 'Free', price: '$0', features: ['Browse notes', 'Follow creators', 'Basic search', 'Community access'] },
  { name: 'Creator Pro', price: '$15/mo', features: ['Unlimited repositories', 'Advanced analytics', 'Premium selling', 'Priority support'] },
  { name: 'Learner Plus', price: '$8/mo', features: ['Ad-free learning', 'Offline downloads', 'Priority requests', 'Early access to packs'] },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="mt-3 text-gray-300">Simple plans for creators and learners. Upgrade anytime.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              {p.name === 'Creator Pro' && <div className="absolute -top-3 right-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">Popular</div>}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="text-green-400" size={16} /> {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-md bg-white px-4 py-2 text-sm font-semibold text-black">Choose Plan</button>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400"><Shield size={12}/> Secure payments</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
