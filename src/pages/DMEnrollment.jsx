import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const initialState = {
  lastName: '', middleName: '', firstName: '',
  dob: '', gender: '', phone: '', email: '',
  idNumber: '',
  location: '', county: '', subcounty: '',
  educationLevel: '',
  experienceYears: '',
  programmeApplying: '',
  hearAboutUs: '',
  motivation: '',
  existingExperience: '',
  agreedToTerms: false,
}

export default function DMEnrollment() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = () => {
    const required = ['lastName', 'firstName', 'dob', 'gender', 'phone', 'programmeApplying', 'agreedToTerms']
    const missing = required.filter(f => !form[f])
    if (missing.length > 0) { alert('Please fill in all required fields and accept the terms.'); return }
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  const Field = ({ label, name, type = 'text', options, required, placeholder, rows }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
      {options ? (
        <select name={name} value={form[name]} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red bg-white">
          <option value="">Select...</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : rows ? (
        <textarea name={name} value={form[name]} onChange={handleChange} rows={rows} placeholder={placeholder} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
      ) : (
        <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
      )}
    </div>
  )

  const programmes = [
    'Bronze – Foundation (KES 25,000–30,000 | 3–4 weeks)',
    'Silver – Certified Professional (KES 30,000–35,000 | 3–4 weeks)',
    'Platinum – Executive Household Manager (KES 45,000–50,000 | 3–6 months)',
    'RPL – Recognition of Prior Learning Assessment (KES 5,000–8,000)',
  ]

  if (submitted) {
    const phone = '254711781306'
    const msg = encodeURIComponent(`Hello Jazza Centre! I have submitted an enrollment application.\nName: ${form.firstName} ${form.lastName}\nProgramme: ${form.programmeApplying}\nPhone: ${form.phone}`)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">Application Received!</h2>
          <p className="text-gray-600 mb-4">Thank you, <strong>{form.firstName}</strong>! Your enrollment application has been submitted.</p>
          <div className="bg-amber-50 rounded-xl p-4 mb-6 text-sm text-amber-800">
            <strong>Next Step:</strong> Our admissions team will contact you to confirm your enrollment and arrange your <strong>KES 10,000 minimum deposit</strong> to secure your place.
          </div>
          <a
            href={`https://wa.me/${phone}?text=${msg}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mb-4"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Confirm on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="hero-bg text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-3">DM Enrollment / Application</h1>
          <p className="text-white/80">Apply for Bronze, Silver, Platinum training or RPL Assessment. Start your professional household management career.</p>
        </div>
      </section>

      {/* Fee summary */}
      <div className="bg-gray-900 text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            {[
              { name: 'Bronze', fee: 'KES 25k–30k', badge: 'bg-amber-700' },
              { name: 'Silver', fee: 'KES 30k–35k', badge: 'bg-gray-500' },
              { name: 'Platinum', fee: 'KES 45k–50k', badge: 'bg-blue-900' },
              { name: 'RPL', fee: 'KES 5k–8k', badge: 'bg-green-700' },
            ].map(p => (
              <div key={p.name} className="bg-white/10 rounded-xl p-3">
                <span className={`${p.badge} text-white px-3 py-1 rounded-full text-xs font-bold`}>{p.name}</span>
                <p className="mt-2 font-bold">{p.fee}</p>
                <p className="text-gray-400 text-xs">Min. KES 10k deposit</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Enrollment Application Form</h2>

            {/* Personal */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <Field label="Last Name" name="lastName" required placeholder="Surname" />
                <Field label="Middle Name" name="middleName" placeholder="Optional" />
                <Field label="First Name" name="firstName" required placeholder="Given name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Date of Birth" name="dob" type="date" required />
                <Field label="Gender" name="gender" required options={['Female', 'Male', 'Prefer not to say']} />
                <Field label="Phone Number" name="phone" required placeholder="+254..." />
                <Field label="Email Address" name="email" type="email" placeholder="your@email.com" />
                <Field label="National ID / Passport Number" name="idNumber" placeholder="ID or Passport number" />
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Location</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Field label="Location / Town" name="location" placeholder="e.g. Nairobi CBD, Kasarani" />
                <Field label="County" name="county" placeholder="e.g. Nairobi" />
                <Field label="Sub-county" name="subcounty" placeholder="e.g. Embakasi" />
              </div>
            </div>

            {/* Background */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Education & Experience</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Highest Education Level" name="educationLevel" options={['Primary / KCPE', 'Secondary / KCSE', 'Certificate', 'Diploma', 'Degree', 'Other']} />
                <Field label="Years of Relevant Experience" name="experienceYears" options={['No experience (entry-level)', 'Less than 1 year', '1–2 years', '3–5 years', '5–10 years', '10+ years']} />
              </div>
              <div className="mt-4">
                <Field label="Describe your previous work experience (optional)" name="existingExperience" placeholder="e.g. Worked as a house manager for 3 years in Gigiri. Experienced in childcare, cooking and housekeeping..." rows={3} />
              </div>
            </div>

            {/* Programme */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Programme Selection</h3>
              <Field label="Programme Applying For" name="programmeApplying" required options={programmes} />
              <div className="mt-4">
                <Field label="How did you hear about Jazza Centre?" name="hearAboutUs" options={['WhatsApp', 'Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'Referral by friend/family', 'Google Search', 'Other']} />
              </div>
              <div className="mt-4">
                <Field label="Why do you want to enroll? (optional)" name="motivation" placeholder="Share your motivation for joining Jazza Centre..." rows={3} />
              </div>
            </div>

            {/* Payment & Terms */}
            <div className="mb-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-semibold text-amber-900 mb-2">Payment Terms</h3>
              <ul className="text-amber-800 text-sm space-y-1">
                <li>• Minimum deposit: <strong>KES 10,000</strong> upon enrollment to secure your place</li>
                <li>• Balance split into <strong>2 installments</strong> within the 3–4 week training period</li>
                <li>• Payment can be made via M-Pesa or bank transfer</li>
              </ul>
              <div className="mt-4 bg-gray-100 rounded-lg p-3 text-xs text-gray-600">
                <strong>Paybill / Bank details</strong> will be provided by the admissions team upon confirmation of your application.
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="agreedToTerms" checked={form.agreedToTerms} onChange={handleChange} className="mt-1 accent-brand-red" required />
                <p className="text-sm text-gray-600">I confirm that the information provided is accurate and I agree to the <strong>Jazza Centre enrollment terms</strong>, including the payment schedule.</p>
              </label>
            </div>

            <button onClick={handleSubmit} className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors shadow-lg">
              Submit Enrollment Application
            </button>
            <p className="text-gray-400 text-xs text-center mt-3">Our admissions team will contact you within 24 hours.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
