import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="py-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-balance bg-gradient-to-br from-white via-white to-gray-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
            DHUN – The GitHub for Musicians
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 max-w-xl text-lg text-gray-300">
            Upload. Learn. Collaborate. Earn. A structured, community-powered music knowledge platform.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
            <Link to="/creator" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
              Start Creating <ArrowRight size={16} />
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40">
              Explore Notes <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
