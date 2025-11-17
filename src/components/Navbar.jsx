import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Music, Store, User, BookOpenCheck, Info, Stars, DollarSign, HelpCircle, Mail } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/features', label: 'Features' },
  { to: '/creator', label: 'Creators' },
  { to: '/learner', label: 'Learners' },
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black">
              <Music size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">DHUN</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/creator" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:border-white/40">
              <User size={16} /> Become a Creator
            </Link>
            <Link to="/marketplace" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/90">
              <Store size={16} /> Marketplace
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `block rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`} onClick={() => setOpen(false)} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2">
              <Link to="/creator" onClick={() => setOpen(false)} className="flex-1 rounded-md border border-white/20 px-3 py-2 text-center text-sm font-medium text-white">
                Become a Creator
              </Link>
              <Link to="/marketplace" onClick={() => setOpen(false)} className="flex-1 rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-black">
                Marketplace
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
