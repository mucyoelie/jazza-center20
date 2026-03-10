import { useState, useEffect } from 'react'
import { Bell, Calendar, MapPin, Phone, Mail, ChevronRight, Users, BookOpen } from 'lucide-react'
import { CHURCH_INFO, INITIAL_MESSAGES, INITIAL_EVENTS, MESSAGE_TYPES } from './grafamData'

function timeAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

function getBadge(type) {
  return MESSAGE_TYPES.find(t => t.value === type) || MESSAGE_TYPES[0]
}

export default function GrafamPublic({ onAdminClick }) {
  const [messages, setMessages] = useState(() => {
    try {
      const stored = localStorage.getItem('grafam_messages')
      return stored ? JSON.parse(stored) : INITIAL_MESSAGES
    } catch { return INITIAL_MESSAGES }
  })

  const [filter, setFilter] = useState('all')
  const [memberForm, setMemberForm] = useState({
    firstName: '', lastName: '', phone: '', email: '', department: '', joinDate: ''
  })
  const [memberSubmitted, setMemberSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('messages') // messages | events | register

  useEffect(() => {
    const onStorage = () => {
      const stored = localStorage.getItem('grafam_messages')
      if (stored) setMessages(JSON.parse(stored))
    }
    window.addEventListener('storage', onStorage)
    const interval = setInterval(() => {
      const stored = localStorage.getItem('grafam_messages')
      if (stored) setMessages(JSON.parse(stored))
    }, 3000)
    return () => { window.removeEventListener('storage', onStorage); clearInterval(interval) }
  }, [])

  const filtered = filter === 'all' ? messages : messages.filter(m => m.type === filter)
  const pinned = messages.filter(m => m.pinned)

  const handleMemberSubmit = () => {
    if (!memberForm.firstName || !memberForm.phone) {
      alert('Please fill in first name and phone number.')
      return
    }
    const existing = JSON.parse(localStorage.getItem('grafam_members') || '[]')
    const newMember = { ...memberForm, id: Date.now(), status: 'active', registeredAt: new Date().toISOString() }
    localStorage.setItem('grafam_members', JSON.stringify([...existing, newMember]))
    setMemberSubmitted(true)
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}>

      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute border border-white rounded-full"
              style={{ width: `${(i+1)*120}px`, height: `${(i+1)*120}px`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-5 shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}>
            <span className="text-white text-3xl">✝</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            Grace Faith Mission
          </h1>
          <p className="text-2xl font-heading text-blue-300 font-semibold mb-3">GRAFAM</p>
          <div className="flex items-center justify-center gap-2 text-blue-200 text-sm mb-1">
            <MapPin size={14} /> <span>Soppo, Street 5</span>
          </div>
          <p className="text-blue-300 text-sm italic mt-2">"{CHURCH_INFO.motto}"</p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              { icon: Users, value: '80+', label: 'Members' },
              { icon: Bell, value: messages.length, label: 'Messages' },
              { icon: Calendar, value: '3', label: 'Weekly Services' },
              { icon: BookOpen, value: '9', label: 'Departments' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-blue-300 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pinned banner */}
      {pinned.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 mb-4">
          {pinned.map(msg => (
            <div key={msg.id} className="bg-yellow-400 text-yellow-900 rounded-xl px-5 py-3 flex items-start gap-3 mb-2">
              <span className="text-lg mt-0.5">📌</span>
              <div>
                <p className="font-bold text-sm">{msg.title}</p>
                <p className="text-xs mt-0.5 opacity-80 line-clamp-2">{msg.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Nav */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-2 mb-6 bg-white/10 rounded-2xl p-1.5 backdrop-blur">
          {[
            { key: 'messages', label: '📢 Messages & Announcements' },
            { key: 'events', label: '📅 Services & Events' },
            { key: 'register', label: '✍️ Join GRAFAM' },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.key ? 'bg-white text-blue-900 shadow' : 'text-white/70 hover:text-white'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button onClick={() => setFilter('all')}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${filter === 'all' ? 'bg-white text-blue-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                All
              </button>
              {MESSAGE_TYPES.map(t => (
                <button key={t.value} onClick={() => setFilter(t.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${filter === t.value ? 'bg-white text-blue-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-white/50">
                <Bell size={40} className="mx-auto mb-3 opacity-30" />
                <p>No messages in this category yet.</p>
              </div>
            ) : (
              <div className="space-y-4 pb-8">
                {[...filtered].reverse().map(msg => {
                  const badge = getBadge(msg.type)
                  return (
                    <div key={msg.id} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badge.color}`}>{badge.label}</span>
                          {msg.recipient !== 'All Members' && (
                            <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">→ {msg.recipient}</span>
                          )}
                        </div>
                        <span className="text-white/40 text-xs whitespace-nowrap">{timeAgo(msg.sentAt)}</span>
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg mb-2">{msg.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{msg.body}</p>
                      <p className="text-white/40 text-xs mt-3">— {msg.sentBy}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* EVENTS TAB */}
        {activeTab === 'events' && (
          <div className="pb-8">
            <div className="space-y-4">
              {INITIAL_EVENTS.map(ev => (
                <div key={ev.id} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-xl">{ev.title}</h3>
                      <p className="text-blue-300 font-semibold text-sm mt-1">{ev.date} · {ev.time}</p>
                      <p className="text-white/65 text-sm mt-1">{ev.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Service info */}
              <div className="bg-blue-900/50 rounded-2xl p-6 border border-blue-400/30">
                <h3 className="font-heading font-bold text-white text-lg mb-4">📍 Find Us</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { icon: MapPin, text: 'Soppo, Street 5, Buea, Cameroon' },
                    { icon: Phone, text: CHURCH_INFO.phone },
                    { icon: Mail, text: CHURCH_INFO.email },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/75">
                      <item.icon size={15} className="text-blue-300 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REGISTER TAB */}
        {activeTab === 'register' && (
          <div className="pb-8">
            {memberSubmitted ? (
              <div className="bg-white/10 backdrop-blur rounded-2xl p-10 text-center border border-white/10">
                <div className="text-5xl mb-4">🙏</div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Welcome to GRAFAM!</h3>
                <p className="text-white/70">Your registration has been received. The church secretary will be in touch. God bless you!</p>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                <h3 className="font-heading text-xl font-bold text-white mb-5">New Member Registration</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'First Name *', key: 'firstName', placeholder: 'Given name' },
                    { label: 'Last Name', key: 'lastName', placeholder: 'Surname' },
                    { label: 'Phone Number *', key: 'phone', placeholder: '+237...' },
                    { label: 'Email', key: 'email', placeholder: 'Optional' },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-sm text-white/70 mb-1.5">{f.label}</label>
                      <input type="text" placeholder={f.placeholder} value={memberForm[f.key]}
                        onChange={e => setMemberForm(p => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5">Department / Ministry</label>
                    <select value={memberForm.department}
                      onChange={e => setMemberForm(p => ({ ...p, department: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="" className="bg-gray-800">Select department</option>
                      {['Choir', 'Ushers', 'Youth', 'Women', 'Men', 'Children', 'Prayer Team'].map(d => (
                        <option key={d} value={d} className="bg-gray-800">{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5">Date Joined</label>
                    <input type="date" value={memberForm.joinDate}
                      onChange={e => setMemberForm(p => ({ ...p, joinDate: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                </div>
                <button onClick={handleMemberSubmit}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  Register as Member
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Admin link */}
      <div className="max-w-4xl mx-auto px-4 pb-10 text-center">
        <button onClick={onAdminClick}
          className="text-white/30 hover:text-white/60 text-xs transition-colors">
          Admin / Pastor Login →
        </button>
      </div>
    </div>
  )
}
