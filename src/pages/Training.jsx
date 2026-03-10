import { Link } from 'react-router-dom'
import { CheckCircle, Clock, Award, ChevronRight } from 'lucide-react'

const courses = [
  {
    name: 'Bronze',
    full: 'General Household Manager',
    level: 'Foundation Level',
    badge: 'bg-amber-700',
    who: 'Entry-level or informally experienced DMs',
    duration: '3–4 Weeks',
    fee: 'KES 25,000 – 30,000',
    deposit: 'KES 10,000 minimum deposit on enrollment',
    certificate: 'Certificate of Completion (Bronze)',
    outcome: 'Eligible for Bronze placement & upgrade pathway',
    skills: ['Housekeeping SOPs', 'Laundry basics', 'Kitchen hygiene', 'Professional conduct & safety', 'Household routines'],
  },
  {
    name: 'Silver',
    full: 'Certified Professional Household Manager',
    level: 'Intermediate Level',
    badge: 'bg-gray-500',
    who: 'Experienced or RPL-assessed DMs',
    duration: '3–4 Weeks',
    fee: 'KES 30,000 – 35,000',
    deposit: 'KES 10,000 minimum deposit on enrollment',
    certificate: 'Certificate of Merit (Silver)',
    outcome: 'Expat-ready, higher salary placement',
    skills: ['International housekeeping SOPs', 'Advanced laundry & wardrobe care', 'Meal planning & basic international cuisines', 'Childcare / elderly care SOPs', 'Client service & reporting'],
    featured: true,
  },
  {
    name: 'Platinum',
    full: 'Executive Household Manager',
    level: 'Advanced Level',
    badge: 'bg-blue-900',
    who: 'Senior DMs / supervisors seeking leadership roles',
    duration: '3–6 Months',
    fee: 'KES 45,000 – 50,000',
    deposit: 'KES 10,000 minimum deposit on enrollment',
    certificate: 'Executive Household Manager (Platinum)',
    outcome: 'Executive placement & leadership roles',
    skills: ['Executive household SOPs', 'Guest hosting & diplomatic protocol', 'International cuisines & meal planning', 'Staff supervision & leadership', 'Vendor & inventory management'],
  },
]

const rplDetails = {
  name: 'RPL',
  full: 'Recognition of Prior Learning',
  desc: 'For experienced but uncertified DMs who have gained skills through work experience. We assess your competency and recommend placement or targeted gap-training.',
  fee: 'KES 5,000 – 8,000',
  outcome: 'Direct placement recommendation or a personalised gap-training plan',
}

export default function Training() {
  return (
    <div>
      <section className="hero-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">Training & Certification</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">Practical, internationally-aligned training linked to managed household placements — especially for expatriate & UN-aligned homes.</p>
        </div>
      </section>

      {/* Payment terms banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-4">
        <div className="max-w-5xl mx-auto px-4 text-center text-amber-800 text-sm">
          <strong>💳 Payment Terms:</strong> Minimum deposit of <strong>KES 10,000</strong> required upon enrollment. Balance cleared in <strong>2 installments</strong> within the 3–4 week training period.
        </div>
      </div>

      {/* Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-bold">Certification Programmes</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600">Choose the programme that matches your experience level and career goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map(course => (
              <div key={course.name} className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 ${course.featured ? 'border-brand-red' : 'border-gray-100'}`}>
                {course.featured && <div className="bg-brand-red text-white text-center py-2 text-sm font-bold">⭐ Most Popular Course</div>}
                <div className="p-7">
                  <div className={`inline-flex items-center gap-2 ${course.badge} text-white px-4 py-1.5 rounded-full text-sm font-bold mb-3`}>
                    <Award size={14} /> {course.name} – {course.level}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{course.full}</h3>
                  <p className="text-gray-500 text-sm italic mb-5">{course.who}</p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <Clock size={16} className="text-brand-red mx-auto mb-1" />
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-900 text-sm">{course.duration}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-500">Course Fee</p>
                      <p className="font-bold text-green-800 text-sm">{course.fee}</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-xs text-amber-800">
                    <strong>Admission:</strong> {course.deposit}
                  </div>
                  <ul className="space-y-2 mb-5">
                    {course.skills.map(s => (
                      <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-800 mb-5">
                    <strong>Certificate:</strong> {course.certificate}<br />
                    <strong>Outcome:</strong> {course.outcome}
                  </div>
                  <Link to="/enroll" className="block text-center bg-brand-red text-white py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors">
                    Enroll in {course.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RPL Card */}
          <div className="mt-10 bg-gray-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">🔁 RPL – Recognition of Prior Learning</span>
              <h3 className="font-heading text-2xl font-bold mb-2">{rplDetails.full}</h3>
              <p className="text-gray-300 mb-4">{rplDetails.desc}</p>
              <p className="text-gray-400 text-sm"><strong className="text-white">Assessment Fee:</strong> {rplDetails.fee}</p>
              <p className="text-gray-400 text-sm mt-1"><strong className="text-white">Outcome:</strong> {rplDetails.outcome}</p>
            </div>
            <div>
              <Link to="/enroll" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-full font-semibold transition-colors">
                Apply for RPL Assessment <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Train with Jazza */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Why Train with Jazza?</h2>
          <div className="section-divider"></div>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {[
              'Internationally-aligned, practical training',
              'Linked to real managed household placements',
              'Certified uniforms & branded recognition',
              'Pathway to Bronze → Silver → Platinum',
              'RPL for experienced but uncertified DMs',
              'Jazza Foodies integration for culinary tracks',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <CheckCircle size={18} className="text-brand-red flex-shrink-0" />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-red py-14 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Start Your Certification Journey Today</h2>
          <Link to="/enroll" className="bg-white text-brand-red px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all shadow-xl inline-block">
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  )
}
