import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Training from './pages/Training'
import HireForm from './pages/HireForm'
import DMEnrollment from './pages/DMEnrollment'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Grafam from './pages/Grafam'

function AppLayout() {
  const location = useLocation()
  const isGrafam = location.pathname.startsWith('/grafam')

  if (isGrafam) {
    return (
      <Routes>
        <Route path="/grafam" element={<Grafam />} />
      </Routes>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/hire" element={<HireForm />} />
          <Route path="/enroll" element={<DMEnrollment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}
