import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services', path: '/services',
    children: [
      { label: 'Managed Household Solutions', path: '/services' },
      { label: 'Training & Certification', path: '/training' },
      { label: 'Hire a Domestic Manager', path: '/hire' },
    ]
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const location = useLocation()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
           <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img 
              src="/logo.jpg" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
            <div>
              <span className="font-heading text-xl font-bold text-gray-900">JAZZA</span>
              <span className="font-heading text-xl font-bold text-brand-red"> CENTRE</span>
              <p className="text-xs text-gray-500 leading-none">Managed Household Solutions</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-brand-red font-medium nav-link transition-colors"
                    onMouseEnter={() => setDropdown(link.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    {link.label} <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-gray-700 hover:text-brand-red font-medium nav-link transition-colors ${location.pathname === link.path ? 'text-brand-red' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && dropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 min-w-56 py-2"
                    onMouseEnter={() => setDropdown(link.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    {link.children.map(child => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-brand-red transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/hire"
              className="bg-brand-red text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-dark transition-colors shadow-md hover:shadow-lg"
            >
              Hire a DM
            </Link>

            <Link
              to="/enroll"
              className="border-2 border-brand-red text-brand-red px-5 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              Enroll
            </Link>

            {/* Grafam Button */}
            <Link
              to="/grafam"
              className="border-2 border-gray-800 text-gray-800 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Grafam
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6">
          {navLinks.map(link => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <p className="py-3 font-semibold text-gray-500 text-sm uppercase tracking-wide">{link.label}</p>
                  {link.children.map(child => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setOpen(false)}
                      className="block pl-4 py-2 text-gray-700 hover:text-brand-red"
                    >
                      → {child.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-semibold border-b border-gray-100 ${location.pathname === link.path ? 'text-brand-red' : 'text-gray-800'}`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div className="flex gap-3 mt-4">
            <Link
              to="/hire"
              onClick={() => setOpen(false)}
              className="flex-1 bg-brand-red text-white py-3 rounded-full font-semibold text-center"
            >
              Hire a DM
            </Link>

            <Link
              to="/enroll"
              onClick={() => setOpen(false)}
              className="flex-1 border-2 border-brand-red text-brand-red py-3 rounded-full font-semibold text-center"
            >
              Enroll
            </Link>
          </div>

          {/* Grafam Button (Mobile) */}
          <Link
            to="/grafam"
            onClick={() => setOpen(false)}
            className="block mt-4 w-full border-2 border-gray-800 text-gray-800 py-3 rounded-full font-semibold text-center"
          >
            Grafam
          </Link>
        </div>
      )}
    </nav>
  )
}