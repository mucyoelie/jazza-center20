import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.message) { alert('Please fill in name and message.'); return }
    setSubmitted(true)
  }

  return (
    <div>
      <section className="hero-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 text-xl">Get in touch with the Jazza Centre team. We're here to help.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="section-divider" style={{margin: '0 0 24px 0'}}></div>
              <p className="text-gray-600 mb-8">Whether you're looking to hire a certified Domestic Manager, enroll in our training programmes, or enquire about Jazza Foodies catering — we're ready to help.</p>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+254 711 781 306', href: 'tel:+254711781306' },
                  { icon: Mail, label: 'Email', value: 'info@jazzacentre.co.ke', href: 'mailto:info@jazzacentre.co.ke' },
                  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya — Serving Runda, Gigiri, Rosslyn, Muthaiga & Kitisuru', href: null },
                  { icon: Clock, label: 'Office Hours', value: 'Monday – Saturday: 8:00 AM – 6:00 PM', href: null },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="text-gray-900 font-medium hover:text-brand-red transition-colors">{item.value}</a>
                        : <p className="text-gray-900 font-medium">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 bg-green-50 rounded-xl p-5 border border-green-200">
                <p className="text-green-800 font-semibold mb-3">💬 Prefer to chat directly?</p>
                <a
                  href={`https://wa.me/254711781306?text=${encodeURIComponent('Hello Jazza Centre! I would like to enquire about your services.')}`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you, <strong>{form.name}</strong>. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Full Name', name: 'name', placeholder: 'Your full name' },
                      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
                      { label: 'Phone Number', name: 'phone', placeholder: '+254...' },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                        <input type={f.type || 'text'} name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red bg-white">
                        <option value="">Select a subject...</option>
                        <option>Hire a Domestic Manager</option>
                        <option>Training Enquiry</option>
                        <option>Jazza Foodies / Catering</option>
                        <option>Skill Gap Assessment</option>
                        <option>Partnership / Referral</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="How can we help you?" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
                    </div>
                    <button onClick={handleSubmit} className="w-full bg-brand-red text-white py-3.5 rounded-xl font-bold hover:bg-brand-dark transition-colors">
                      Send Message
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
