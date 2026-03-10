import { Link } from 'react-router-dom'
import { CheckCircle, Star, Users, Award, Shield, Repeat, ChevronRight } from 'lucide-react'

const tiers = [
  {
    name: 'Bronze',
    subtitle: 'Foundation Domestic Manager',
    color: 'amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-700',
    price: 'KES 30,000 – 35,000',
    dm: 'KES 20,000 – 25,000',
    ideal: 'Single professionals, consultants & small households',
    features: ['Housekeeping & cleaning SOPs', 'Laundry & basic garment care', 'Basic kitchen support', 'Professional conduct training'],
  },
  {
    name: 'Silver',
    subtitle: 'Certified Professional DM',
    color: 'gray-500',
    bg: 'bg-gray-50',
    border: 'border-gray-300',
    badge: 'bg-gray-500',
    price: 'KES 45,000 – 50,000',
    dm: 'KES 30,000 – 35,000',
    ideal: 'Families, dual-career expats & UN postings',
    features: ['Full SOP suite compliance', 'Advanced laundry & wardrobe', 'Meal planning & multi-cuisine', 'Childcare support (non-clinical)'],
    featured: true,
  },
  {
    name: 'Platinum',
    subtitle: 'Executive Household Manager',
    color: 'blue-800',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-800',
    price: 'KES 60,000 – 70,000',
    dm: 'KES 45,000 – 55,000',
    ideal: 'Senior UN officials, diplomats & long-term postings',
    features: ['Executive household management', 'International cuisine mastery', 'Guest hosting & protocol', 'Vendor & inventory coordination'],
  },
]

const stats = [
  { value: '100+', label: 'Target Placements', icon: Users },
  { value: '3', label: 'Certification Tiers', icon: Award },
  { value: '8', label: 'SOP Domains', icon: Shield },
  { value: '100%', label: 'Payroll Managed', icon: Repeat },
]

export default function Home() {
  const whatsappMsg = encodeURIComponent('Hello Jazza Centre! I would like to book a household consultation.')

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg text-white min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full border-2 border-white"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-white"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/30">
              🏆 Nairobi's Premier Household Management Platform
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Managed Household Solutions for
              <span className="block text-yellow-300"> Expatriate Families</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              Certified Domestic Managers. Payroll-Managed. SOP-Driven. Jazza Centre delivers stress-free household operations aligned to UN & diplomatic standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/hire"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-red px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Request a Household Consultation <ChevronRight size={20} />
              </Link>
              <a
                href={`https://wa.me/254711781306?text=${whatsappMsg}`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <s.icon className="w-7 h-7 text-brand-red mx-auto mb-2" />
              <p className="text-3xl font-heading font-bold text-white">{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Jazza */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-gray-900">Why Jazza Centre?</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">We go beyond placement. We deliver a fully managed household operating system aligned to international standards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Certified & Tiered', desc: 'Bronze, Silver & Platinum DMs — each trained to specific international SOP standards with colour-coded uniforms for instant recognition.' },
              { icon: Shield, title: 'Employer of Record', desc: 'Jazza handles all payroll, statutory deductions, leave management & compliance. Clients enjoy zero HR burden.' },
              { icon: Repeat, title: 'Guaranteed Continuity', desc: 'Rapid replacement, retraining pathways & skill-gap assessments ensure your household never misses a beat.' },
            ].map(item => (
              <div key={item.title} className="bg-red-50 rounded-2xl p-8 border border-red-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-gray-900">Choose Your Tier</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 text-lg">Monthly all-inclusive subscription. No hidden costs. No HR headaches.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map(tier => (
              <div key={tier.name} className={`tier-card rounded-2xl border-2 ${tier.border} ${tier.bg} p-8 relative ${tier.featured ? 'ring-4 ring-brand-red ring-offset-2' : ''}`}>
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white px-5 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={12} fill="white" /> Most Popular
                  </div>
                )}
                <div className={`inline-flex items-center gap-2 ${tier.badge} text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4`}>
                  {tier.name}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{tier.subtitle}</h3>
                <p className="text-gray-500 text-sm mb-4 italic">{tier.ideal}</p>
                <div className="bg-white rounded-xl p-4 mb-5 border border-gray-200">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Monthly Subscription</p>
                  <p className="text-xl font-bold text-gray-900">{tier.price}</p>
                  <p className="text-xs text-gray-400 mt-1">DM take-home: {tier.dm} · Jazza margin retained</p>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={15} className="text-green-600 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/hire" className="block w-full text-center bg-brand-red text-white py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Also available: <strong>On-Site Household Skill Gap Assessment</strong> @ <strong>KES 5,000</strong>
          </p>
        </div>
      </section>

      {/* Jazza Foodies */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3 block">✦ Division Spotlight</span>
              <h2 className="text-4xl font-heading font-bold mb-4">Jazza Foodies</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our culinary & catering division complements Jazza Centre — delivering event catering, culinary training, and advanced kitchen skills for Platinum DMs. From intimate family dinners to diplomatic receptions.
              </p>
              <ul className="space-y-3 mb-8">
                {['Event catering for corporate, diplomatic & private occasions', 'Culinary training integrated into DM certification pathways', 'International cuisine, pastry & hosting protocol', 'Available for weddings, birthdays & UN functions'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Explore Jazza Foodies <ChevronRight size={16} />
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {['🍽️ Fine Dining Events', '🎂 Pastry & Baking', '🌍 International Cuisines', '👨‍🍳 Culinary Certification'].map(item => (
                <div key={item} className="bg-white/10 backdrop-blur rounded-xl p-5 text-center hover:bg-white/15 transition-colors">
                  <p className="text-2xl mb-2">{item.split(' ')[0]}</p>
                  <p className="text-sm font-medium">{item.split(' ').slice(1).join(' ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold text-gray-900">How It Works</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6 text-brand-red">For Households</h3>
              {['Submit a hiring request & household consultation', 'Get matched with a certified tier-appropriate DM', 'Jazza handles payroll, SOPs & compliance', 'Enjoy managed household operations monthly'].map((step, i) => (
                <div key={step} className="flex items-start gap-4 mb-5">
                  <div className="w-9 h-9 rounded-full bg-brand-red text-white flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                  <p className="text-gray-700 pt-1.5">{step}</p>
                </div>
              ))}
              <Link to="/hire" className="mt-4 inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-dark transition-colors">
                Hire a DM <ChevronRight size={16} />
              </Link>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6 text-gray-700">For Domestic Managers</h3>
              {['Apply for Bronze, Silver, Platinum or RPL assessment', 'Complete internationally-aligned practical training', 'Receive your certification & branded uniform', 'Get placed with managed household clients'].map((step, i) => (
                <div key={step} className="flex items-start gap-4 mb-5">
                  <div className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                  <p className="text-gray-700 pt-1.5">{step}</p>
                </div>
              ))}
              <Link to="/enroll" className="mt-4 inline-flex items-center gap-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Enroll Now <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-4">Ready for Stress-Free Household Management?</h2>
          <p className="text-white/85 text-lg mb-8">Book a household consultation today and experience professionally managed living in Nairobi.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hire" className="bg-white text-brand-red px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all shadow-xl">
              Request a Consultation
            </Link>
            <a
              href={`https://wa.me/254711781306?text=${encodeURIComponent('Hello! I want to book a household consultation with Jazza Centre.')}`}
              target="_blank" rel="noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
