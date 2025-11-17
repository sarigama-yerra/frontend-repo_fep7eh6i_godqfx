import { Link } from 'react-router-dom'
import { Github, Twitter, Mail, Music, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black">
                <Music size={18} />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">DHUN</span>
            </div>
            <p className="mt-3 text-sm text-gray-400">The GitHub for Musicians. Upload, learn, collaborate, and earn in a structured, community-powered music knowledge platform.</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li><Link to="/features" className="hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/marketplace" className="hover:text-white">Marketplace</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/creator" className="hover:text-white">Creators</Link></li>
              <li><Link to="/learner" className="hover:text-white">Learners</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">Connect</p>
            <div className="mt-3 flex items-center gap-4 text-gray-400">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
              <a href="mailto:hello@dhun.app" className="hover:text-white"><Mail size={18} /></a>
            </div>
            <p className="mt-4 text-xs text-gray-500">Made with <Heart className="inline" size={12} /> for musicians worldwide.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} DHUN. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
