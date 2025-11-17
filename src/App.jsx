import { Routes, Route } from 'react-router-dom'
import { Home, About, Features, Creator, Learner, Marketplace, Pricing, Contact, FAQ } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/creator" element={<Creator />} />
      <Route path="/learner" element={<Learner />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  )
}

export default App
