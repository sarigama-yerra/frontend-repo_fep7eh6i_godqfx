import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export function SimplePage({ title, children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="mt-6 text-gray-300">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
