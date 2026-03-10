import { Link } from 'react-router-dom'
import { CheckCircle, ChevronRight } from 'lucide-react'

const tiers = [
  {
    name: 'Bronze',
    subtitle: 'Foundation / General Support DM',
    badge: 'bg-amber-700 text-white',
    clientRate: 'KES 30,000 – 35,000',
    dmSalary: 'KES 20,000 – 25,000',
    jazzaMargin: 'KES 10,000',
    duration: 'Monthly Subscription',
    ideal: 'Single professionals, consultants & small households',
    features: [
      'Housekeeping & cleaning SOPs',
      'Laundry & basic fabric care',
      'Basic kitchen support & hygiene',
      'Professional conduct & safety training',
      'Bronze-certified uniform (earth tones)',
    ],
    sopDepth: 'Core SOPs: Housekeeping, Laundry & Basic Kitchen',
  },
  {
    name: 'Silver',
    subtitle: 'Certified Professional DM',
    badge: 'bg-gray-500 text-white',
    clientRate: 'KES 45,000 – 50,000',
    dmSalary: 'KES 30,000 – 35,000',
    jazzaMargin: 'KES 10,000 – 15,000',
    duration: 'Monthly Subscription',
    ideal: 'Families, dual-career expats & UN postings',
    features: [
      'Full 8-domain SOP compliance',
      'Advanced laundry & wardrobe management',
      'Meal planning & multi-cuisine support',
      'Childcare support (non-clinical)',
      'Hosting & guest service etiquette',
      'Silver-certified uniform (grey/silver)',
    ],
    sopDepth: 'Full SOP suite + 3-Month Certificate of Merit',
    featured: true,
  },
  {
    name: 'Platinum',
    subtitle: 'Executive Household Manager',
    badge: 'bg-blue-900 text-white',
    clientRate: 'KES 60,000 – 70,000',
    dmSalary: 'KES 45,000 – 55,000',
    jazzaMargin: 'KES 10,000 – 15,000',
    duration: 'Monthly Subscription',
    ideal: 'Senior UN officials, diplomats & long-term expatriates',
    features: [
      'Executive household management',
      'International cuisine mastery (Jazza Foodies integration)',
      'Guest hosting & diplomatic protocol',
      'Vendor & inventory management',
      'Staff supervision & leadership',
      'Confidentiality & discretion',
      'Platinum uniform (navy/charcoal)',
    ],
    sopDepth: 'Advanced SOPs + 6-Month Executive Certification',
  },
]

const sops = [
  { title: 'Housekeeping & Home Care', desc: 'Daily, weekly & monthly cleaning schedules, room-by-room protocols, chemical safety, linen care.' },
  { title: 'Laundry & Fabric Care', desc: 'Fabric identification, colour separation, ironing standards, wardrobe organisation & delicate garment care.' },
  { title: 'Kitchen, Food Safety & Meals', desc: 'Food hygiene, contamination prevention, dietary compliance, grocery storage, hosting support.' },
  { title: 'Childcare & Family Support', desc: 'Child routines, safety standards, approved activities, emergency procedures & privacy boundaries.' },
  { title: 'Security, Conduct & Confidentiality', desc: 'Confidentiality agreements, visitor protocols, social media restrictions, cultural sensitivity.' },
  { title: 'Time, Attendance & Leave', desc: 'Working hours, leave management, emergency absence handling, replacement & backup procedures.' },
  { title: 'Emergency & Continuity', desc: 'Medical & household emergency response, incident reporting, rapid replacement timelines.' },
  { title: 'Performance & Retraining', desc: 'Skill gap assessments, client feedback, refresher training, RPL & tier upgrade pathways.' },
]

export default function Services() {
  return (
    <div>
      <section className="hero-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">Managed household solutions, culinary excellence & professional training — all under one platform.</p>
        </div>
      </section>

      {/* Leasing Model */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold">The Jazza Leasing Model</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600">One monthly invoice. Zero HR burden. Full professional management.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { step: '1', title: 'Client Pays Jazza', desc: 'Monthly all-inclusive subscription invoice — DM salary + statutory deductions + Jazza management fee.' },
              { step: '2', title: 'Jazza Manages Everything', desc: 'Payroll, NHIF/NSSF, leave, replacements, retraining, SOP compliance & HR issues.' },
              { step: '3', title: 'You Enjoy Peace of Mind', desc: 'A certified, uniformed, managed DM operates to international standards in your home.' },
            ].map(item => (
              <div key={item.step} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
            <p className="text-blue-800 font-semibold">✦ On-Site Household Skill Gap Assessment also available — <strong>KES 5,000</strong></p>
            <p className="text-blue-600 text-sm mt-1">We visit your household, assess current domestic staff capabilities, and recommend a tailored upgrade pathway.</p>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold">Service Tier Breakdown</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map(tier => (
              <div key={tier.name} className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 ${tier.featured ? 'border-brand-red' : 'border-gray-100'}`}>
                {tier.featured && <div className="bg-brand-red text-white text-center py-2 text-sm font-bold">⭐ Most Requested Tier</div>}
                <div className="p-7">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-3 ${tier.badge}`}>{tier.name}</span>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{tier.subtitle}</h3>
                  <p className="text-gray-500 text-sm italic mb-5">{tier.ideal}</p>
                  <div className="bg-gray-50 rounded-xl p-4 mb-5 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Client rate</span>
                      <span className="font-bold text-gray-900">{tier.clientRate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">DM salary</span>
                      <span className="font-semibold text-gray-700">{tier.dmSalary}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Jazza margin</span>
                      <span className="font-semibold text-green-700">{tier.jazzaMargin}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 rounded-lg p-3 text-xs text-amber-800 mb-5">
                    <strong>SOP Depth:</strong> {tier.sopDepth}
                  </div>
                  <Link to="/hire" className="block text-center bg-brand-red text-white py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors">
                    Request This Tier
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOP Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold">Household SOP Framework</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">8 domains of Standard Operating Procedures ensure your household runs to international standards — regardless of which DM is on duty.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sops.map((sop, i) => (
              <div key={sop.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-brand-red text-white rounded-lg flex items-center justify-center text-sm font-bold mb-3">{i + 1}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{sop.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{sop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jazza Foodies */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3 block">✦ Culinary Division</span>
          <h2 className="text-4xl font-heading font-bold mb-4">Jazza Foodies</h2>
          <p className="text-gray-300 text-lg mb-8">Catering & Culinary Training for diplomatic events, private households & DM certification pathways.</p>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {['Corporate & Diplomatic Events', 'Weddings & Private Celebrations', 'Culinary Training for DMs'].map(item => (
              <div key={item} className="bg-white/10 rounded-xl p-5 text-sm font-medium">{item}</div>
            ))}
          </div>
          <a
            href={`https://wa.me/254711781306?text=${encodeURIComponent('Hello! I am interested in Jazza Foodies catering services.')}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Enquire About Catering <ChevronRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
