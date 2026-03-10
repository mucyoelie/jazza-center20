import { Link } from 'react-router-dom'
import { Target, Eye, Heart, ChevronRight } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="hero-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">About Jazza Centre</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">Kenya's leading managed household solutions provider for expatriate, diplomatic and international families.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="section-divider" style={{margin: '0 0 24px 0'}}></div>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Jazza Centre is a professional household management and training organisation serving expatriate, diplomatic, and international families in Kenya. We specialise in training, leasing, and managing Domestic Managers under a structured, compliant, and client-friendly subscription model.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our tiered Domestic Manager system — Bronze, Silver, and Platinum — ensures that every household receives service aligned to its unique needs, with international SOP standards, certified training, and full payroll management.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nairobi serves as our pilot city, strategically chosen for its position as one of the world's four major UN duty stations and its growing expatriate & diplomatic community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Target, title: 'Mission', desc: 'To professionalise household services by delivering trained, certified, and managed Domestic Managers who meet international living standards.', color: 'bg-red-50 border-red-100' },
                { icon: Eye, title: 'Vision', desc: 'To become the leading managed household solutions provider for expatriate communities across Africa.', color: 'bg-blue-50 border-blue-100' },
                { icon: Heart, title: 'Values', desc: 'Professionalism, dignity, confidentiality, and continuous improvement — for every DM, every household, every day.', color: 'bg-green-50 border-green-100' },
                { icon: ChevronRight, title: 'Approach', desc: 'We manage people, systems, and compliance — so our clients enjoy peace of mind.', color: 'bg-amber-50 border-amber-100' },
              ].map(item => (
                <div key={item.title} className={`rounded-2xl p-6 border ${item.color}`}>
                  <item.icon className="w-7 h-7 text-brand-red mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jazza Foodies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3 block">✦ Meet Our Sister Division</span>
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">Jazza Foodies</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">Catering & Culinary Training — the division that trains our Platinum DMs and serves the finest international households and events in Nairobi.</p>
          <Link to="/services" className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-dark transition-colors">
            Explore Jazza Foodies <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Target Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-gray-900">We Serve Nairobi's Expatriate Zones</h2>
            <div className="section-divider"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Runda', 'Gigiri', 'Rosslyn', 'Muthaiga', 'Kitisuru', 'Karen', 'Lavington'].map(area => (
              <span key={area} className="bg-gray-100 text-gray-800 px-5 py-2.5 rounded-full font-medium hover:bg-brand-red hover:text-white transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-14 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Experience the Jazza Difference?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hire" className="bg-white text-brand-red px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition-all">Hire a DM</Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
