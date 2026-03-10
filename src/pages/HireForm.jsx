import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const initialState = {
  lastName: '', middleName: '', firstName: '',
  email: '', phone: '', alternatePhone: '',
  location: '', county: '', subcounty: '',
  householdSize: '',
  householdType: '',
  familySize: '',
  clientType: '',
  tierRequired: '',
  preferredAge: '',
  preferredGender: '',
  startDate: '',
  specialPreferences: '',
  notes: '',
  skillGapAssessment: false,
}

export default function HireForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = () => {
    const required = ['lastName', 'firstName', 'phone', 'location', 'county', 'subcounty', 'householdSize', 'tierRequired']
    const missing = required.filter(f => !form[f])
    if (missing.length > 0) { alert('Please fill in all required fields.'); return }
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  const Field = ({ label, name, type = 'text', options, required, placeholder }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
      {options ? (
        <select name={name} value={form[name]} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red bg-white">
          <option value="">Select...</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
      )}
    </div>
  )

  if (submitted) {
    const phone = '254711781306'
    const msg = encodeURIComponent(`Hello Jazza Centre! I have submitted a household hire request.\nName: ${form.firstName} ${form.lastName}\nTier: ${form.tierRequired}\nLocation: ${form.location}, ${form.county}\nHousehold: ${form.householdSize}\nPhone: ${form.phone}`)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">Request Received!</h2>
          <p className="text-gray-600 mb-6">Thank you, <strong>{form.firstName}</strong>. Our team will contact you within 24 hours to arrange your household consultation.</p>
          <a
            href={`https://wa.me/${phone}?text=${msg}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mb-4"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Confirm on WhatsApp
          </a>
          <br />
          <button onClick={() => { setForm(initialState); setSubmitted(false) }} className="text-brand-red text-sm underline mt-2">Submit another request</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="hero-bg text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-3">Hire a Domestic Manager</h1>
          <p className="text-white/80">Complete the form below and we will match you with the right certified DM for your household.</p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Client Onboarding Form</h2>

            {/* Personal Details */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Personal Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Field label="Last Name" name="lastName" required placeholder="Surname" />
                <Field label="Middle Name" name="middleName" placeholder="Optional" />
                <Field label="First Name" name="firstName" required placeholder="Given name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Field label="Email Address" name="email" type="email" placeholder="your@email.com" />
                <Field label="Phone Number" name="phone" required placeholder="+254..." />
                <Field label="Alternate Phone" name="alternatePhone" placeholder="+254... (optional)" />
                <Field label="Client Type" name="clientType" options={['Couple / Family', 'Live-in Mum', 'Single Professional', 'Corporate / Company', 'Entrepreneur / Executive', 'Diplomatic / Embassy Staff', 'UN / NGO Staff']} />
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Location</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Field label="Location / Estate" name="location" required placeholder="e.g. Runda, Gigiri" />
                <Field label="County" name="county" required placeholder="e.g. Nairobi" />
                <Field label="Sub-county" name="subcounty" required placeholder="e.g. Westlands" />
              </div>
            </div>

            {/* Household Info */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Household Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Household Size / Type" name="householdSize" required options={['Studio / 1-Bedroom Apartment', '2-Bedroom Apartment', '3-Bedroom Apartment', 'Gated Community Townhouse', '3-Bedroom Bungalow', '4-Bedroom Bungalow', '5-Bedroom Bungalow with own compound', '6+ Bedroom Estate / Villa', 'Serviced Residence']} />
                <Field label="Family / Occupant Size" name="familySize" options={['1 Person', '2 People (Couple)', '3 People', '4–5 People', '6+ People (Large Family)']} />
              </div>
            </div>

            {/* DM Requirements */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">DM Requirements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Tier Required" name="tierRequired" required options={['Bronze – Foundation (KES 30k–35k/mo)', 'Silver – Certified Professional (KES 45k–50k/mo)', 'Platinum – Executive HM (KES 60k–70k/mo)', 'Not sure – please advise']} />
                <Field label="Preferred Age of DM" name="preferredAge" options={['No preference', '21–30 years', '31–40 years', '41–50 years', '50+ years']} />
                <Field label="Preferred Gender" name="preferredGender" options={['No preference', 'Female', 'Male']} />
                <Field label="Preferred Start Date" name="startDate" type="date" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Other Special Preferences / Requirements</label>
                <textarea name="specialPreferences" value={form.specialPreferences} onChange={handleChange} rows={3} placeholder="e.g. Must speak French, experience with infants, no pets, specific dietary handling, etc." className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-8 bg-amber-50 rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-3">Additional Services</h3>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="skillGapAssessment" checked={form.skillGapAssessment} onChange={handleChange} className="mt-1 accent-brand-red" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">On-Site Household Skill Gap Assessment — <span className="text-brand-red">KES 5,000</span></p>
                  <p className="text-gray-500 text-xs">A Jazza representative visits your household to assess current staff or establish SOP requirements before placement.</p>
                </div>
              </label>
            </div>

            {/* Additional Notes */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Anything else we should know about your household or requirements..." className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
            </div>

            <button onClick={handleSubmit} className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors shadow-lg">
              Submit Hiring Request
            </button>
            <p className="text-gray-400 text-xs text-center mt-3">Our team will contact you within 24 hours to arrange your consultation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
