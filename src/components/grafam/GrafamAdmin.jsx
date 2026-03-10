import { useState, useEffect } from 'react'
import { Bell, Users, Send, Plus, Trash2, Pin, PinOff, LogOut, Menu, X, ChevronRight, MessageSquare, Calendar, BarChart2, CheckCircle } from 'lucide-react'
import { INITIAL_MEMBERS, INITIAL_MESSAGES, INITIAL_EVENTS, DEPARTMENTS, MESSAGE_TYPES } from './grafamData'

function timeAgo(iso) {
  const d = Date.now() - new Date(iso).getTime()
  const m = Math.floor(d/60000)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m/60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h/24)}d ago`
}
function toWa(phone) { return phone.replace(/[\s+]/g,'') }

function WaIcon({ size=18, color='currentColor' }) {
  return <svg viewBox="0 0 24 24" fill={color} width={size} height={size}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}

export default function GrafamAdmin({ onLogout }) {
  const [tab, setTab] = useState('dashboard')
  const [sidebar, setSidebar] = useState(false)

  const [messages, setMessages] = useState(() => {
    try { return JSON.parse(localStorage.getItem('grafam_messages') || 'null') || INITIAL_MESSAGES }
    catch { return INITIAL_MESSAGES }
  })
  const [members, setMembers] = useState(() => {
    try {
      const extra = JSON.parse(localStorage.getItem('grafam_extra_members') || '[]')
      return [...INITIAL_MEMBERS, ...extra]
    } catch { return INITIAL_MEMBERS }
  })
  const [events, setEvents] = useState(INITIAL_EVENTS)
  const [compose, setCompose] = useState({ type:'announcement', title:'', body:'', recipient:'All Members' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [mForm, setMForm] = useState({ name:'', phone:'', department:'Women', status:'active' })
  const [showMForm, setShowMForm] = useState(false)
  const [eForm, setEForm] = useState({ title:'', date:'', time:'', description:'' })
  const [showEForm, setShowEForm] = useState(false)
  const [mSearch, setMSearch] = useState('')
  const [deptFilter, setDeptFilter] = useState('All Members')
  const [waBlast, setWaBlast] = useState({ dept:'All Members', title:'', body:'' })
  const [showWa, setShowWa] = useState(false)

  useEffect(() => { localStorage.setItem('grafam_messages', JSON.stringify(messages)) }, [messages])

  const countFor = dept => dept === 'All Members' ? members.length : members.filter(m => m.department === dept).length

  const postMsg = () => {
    if (!compose.title.trim() || !compose.body.trim()) { alert('Fill in title and body.'); return }
    setSending(true)
    setTimeout(() => {
      setMessages(p => [...p, { id: Date.now(), ...compose, sentBy: 'Pastor Derick', sentAt: new Date().toISOString(), pinned: false }])
      setCompose({ type:'announcement', title:'', body:'', recipient:'All Members' })
      setSending(false); setSent(true); setTimeout(() => setSent(false), 4000)
    }, 700)
  }

  const blastWa = (title, body, dept) => {
    const list = dept === 'All Members' ? members : members.filter(m => m.department === dept)
    if (!list.length) { alert('No members in this group.'); return }
    list.forEach((m, i) => {
      setTimeout(() => {
        const msg = encodeURIComponent(`✝ *GRAFAM — Grace Faith Mission*\n*${title}*\n\nDear ${m.name},\n\n${body}\n\n_— Pastor Derick, GRAFAM Soppo Street 5_`)
        window.open(`https://wa.me/${toWa(m.phone)}?text=${msg}`, '_blank')
      }, i * 1200)
    })
    alert(`✅ WhatsApp is opening for ${list.length} member(s). Please check your browser pop-ups if blocked.`)
  }

  const addMember = () => {
    if (!mForm.name || !mForm.phone) { alert('Name and phone required.'); return }
    const m = { ...mForm, id: Date.now() }
    const extra = JSON.parse(localStorage.getItem('grafam_extra_members') || '[]')
    localStorage.setItem('grafam_extra_members', JSON.stringify([...extra, m]))
    setMembers(p => [...p, m])
    setMForm({ name:'', phone:'', department:'Women', status:'active' })
    setShowMForm(false)
  }

  const filtered = members.filter(m =>
    `${m.name} ${m.phone}`.toLowerCase().includes(mSearch.toLowerCase()) &&
    (deptFilter === 'All Members' || m.department === deptFilter)
  )

  const nav = [
    { key:'dashboard', icon:BarChart2, label:'Dashboard' },
    { key:'compose',   icon:Send,      label:'Send Message' },
    { key:'messages',  icon:MessageSquare, label:'Messages' },
    { key:'members',   icon:Users,     label:`Members (${members.length})` },
    { key:'events',    icon:Calendar,  label:'Events' },
  ]

  const Sidebar = () => (
    <div className="h-full flex flex-col bg-gray-900">
      <div className="p-5 border-b border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"><span className="text-white font-bold">✝</span></div>
        <div><p className="text-white font-bold text-sm">GRAFAM Admin</p><p className="text-white/40 text-xs">Soppo, Street 5</p></div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {nav.map(n => <button key={n.key} onClick={() => { setTab(n.key); setSidebar(false) }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${tab===n.key?'bg-blue-600 text-white':'text-white/60 hover:bg-white/10 hover:text-white'}`}>
          <n.icon size={17}/>{n.label}</button>)}
      </nav>
      <div className="p-4 border-t border-white/10">
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400 hover:bg-red-900/30 transition-colors"><LogOut size={17}/>Sign Out</button>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden" style={{fontFamily:'Lato,sans-serif'}}>
      <div className="hidden md:block w-60 flex-shrink-0 shadow-xl"><Sidebar/></div>
      {sidebar && <div className="fixed inset-0 z-50 md:hidden"><div className="absolute inset-0 bg-black/50" onClick={()=>setSidebar(false)}/><div className="absolute left-0 top-0 bottom-0 w-64"><Sidebar/></div></div>}

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white shadow-sm px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={()=>setSidebar(true)} className="md:hidden text-gray-600"><Menu size={22}/></button>
            <div><h1 className="font-heading font-bold text-gray-900 text-lg">{nav.find(n=>n.key===tab)?.label}</h1>
            <p className="text-gray-400 text-xs">Grace Faith Mission · Soppo, Street 5</p></div>
          </div>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"><span className="text-white text-sm font-bold">P</span></div>
        </div>

        <div className="flex-1 overflow-y-auto p-5">

          {/* DASHBOARD */}
          {tab==='dashboard' && (
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[{l:'Total Members',v:members.length,i:Users,c:'bg-blue-600'},{l:'Active',v:members.filter(m=>m.status==='active').length,i:CheckCircle,c:'bg-green-600'},{l:'Messages',v:messages.length,i:Send,c:'bg-purple-600'},{l:'Departments',v:[...new Set(members.map(m=>m.department))].length,i:BarChart2,c:'bg-amber-600'}].map(s=>(
                  <div key={s.l} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className={`w-10 h-10 ${s.c} rounded-xl flex items-center justify-center mb-3`}><s.i size={18} className="text-white"/></div>
                    <p className="text-2xl font-bold text-gray-900">{s.v}</p>
                    <p className="text-gray-500 text-sm">{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="bg-white rounded-2xl shadow-sm p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-gray-900">Recent Messages</h3>
                    <button onClick={()=>setTab('compose')} className="text-blue-600 text-sm font-semibold flex items-center gap-1"><Plus size={13}/>New</button>
                  </div>
                  {[...messages].reverse().slice(0,4).map(m=>{
                    const b=MESSAGE_TYPES.find(t=>t.value===m.type)
                    return <div key={m.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ${b?.color}`}>{b?.label}</span>
                      <div className="flex-1 min-w-0"><p className="font-semibold text-sm truncate text-gray-900">{m.title}</p><p className="text-gray-400 text-xs">{timeAgo(m.sentAt)} · {m.recipient}</p></div>
                    </div>
                  })}
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-5">
                  <h3 className="font-heading font-bold text-gray-900 mb-4">Quick Actions</h3>
                  {[{l:'Announcement to All',d:'Broadcast to all 43 members',t:'compose',ty:'announcement',col:'bg-blue-50 border-blue-200'},{l:'Send Reminder',d:'Service or prayer reminder',t:'compose',ty:'reminder',col:'bg-amber-50 border-amber-200'},{l:'WhatsApp Broadcast',d:'Send via WhatsApp to members',t:'members',wa:true,col:'bg-green-50 border-green-200'},{l:'Add New Member',d:'Register a church member',t:'members',add:true,col:'bg-purple-50 border-purple-200'}].map(a=>(
                    <button key={a.l} onClick={()=>{setTab(a.t);if(a.ty)setCompose(p=>({...p,type:a.ty}));if(a.wa)setShowWa(true);if(a.add)setShowMForm(true)}}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border ${a.col} hover:opacity-80 transition-all text-left mb-2`}>
                      <div className="flex-1"><p className="font-semibold text-gray-900 text-sm">{a.l}</p><p className="text-gray-500 text-xs">{a.d}</p></div>
                      <ChevronRight size={14} className="text-gray-400"/>
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-5">
                <h3 className="font-heading font-bold text-gray-900 mb-4">Weekly Services</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {events.slice(0,3).map(ev=>(
                    <div key={ev.id} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <p className="font-bold text-gray-900 text-sm">{ev.title}</p>
                      <p className="text-blue-700 text-xs mt-1">{ev.date}</p>
                      <p className="text-blue-600 text-xs font-semibold">{ev.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* COMPOSE */}
          {tab==='compose' && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="font-heading font-bold text-gray-900 text-xl mb-5">Compose & Send Message</h2>
                {sent && <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-5 flex items-center gap-3"><CheckCircle className="text-green-600" size={20}/><p className="text-green-800 font-bold">Message posted successfully!</p></div>}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {MESSAGE_TYPES.map(t=><button key={t.value} onClick={()=>setCompose(p=>({...p,type:t.value}))}
                        className={`py-2.5 px-3 rounded-xl text-sm font-semibold border-2 transition-all ${compose.type===t.value?'border-blue-600 bg-blue-50 text-blue-800':'border-gray-200 text-gray-600 hover:border-gray-300'}`}>{t.label}</button>)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Send To</label>
                    <select value={compose.recipient} onChange={e=>setCompose(p=>({...p,recipient:e.target.value}))}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {DEPARTMENTS.map(d=><option key={d}>{d} ({countFor(d)})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                    <input value={compose.title} onChange={e=>setCompose(p=>({...p,title:e.target.value}))} placeholder="e.g. Sunday Service — Reminder"
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message Body *</label>
                    <textarea value={compose.body} onChange={e=>setCompose(p=>({...p,body:e.target.value}))} rows={5} placeholder="Type your message..."
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"/>
                    <p className="text-gray-400 text-xs mt-1">{compose.body.length} characters</p>
                  </div>
                  {compose.body && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-green-800 font-semibold text-sm mb-2">📱 Also send via WhatsApp</p>
                      <button onClick={()=>blastWa(compose.title,compose.body,compose.recipient)}
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors">
                        <WaIcon size={15} color="white"/> WhatsApp Broadcast ({countFor(compose.recipient)} members)
                      </button>
                    </div>
                  )}
                  <button onClick={postMsg} disabled={sending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
                    {sending?<><div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"/>Sending...</>:<><Send size={18}/>Post to Church Board</>}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MESSAGES */}
          {tab==='messages' && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-heading font-bold text-gray-900 text-xl">Messages ({messages.length})</h2>
                <button onClick={()=>setTab('compose')} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"><Plus size={15}/>New</button>
              </div>
              <div className="space-y-3">
                {[...messages].reverse().map(m=>{
                  const b=MESSAGE_TYPES.find(t=>t.value===m.type)
                  return <div key={m.id} className={`bg-white rounded-2xl shadow-sm p-5 border-l-4 ${m.pinned?'border-yellow-400':'border-transparent'}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${b?.color}`}>{b?.label}</span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">→ {m.recipient} ({countFor(m.recipient)})</span>
                          {m.pinned&&<span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">📌 Pinned</span>}
                        </div>
                        <h3 className="font-bold text-gray-900">{m.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{m.body}</p>
                        <p className="text-gray-400 text-xs mt-2">{timeAgo(m.sentAt)} · {m.sentBy}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button onClick={()=>setMessages(p=>p.map(x=>x.id===m.id?{...x,pinned:!x.pinned}:x))} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-yellow-100 flex items-center justify-center text-gray-500 hover:text-yellow-600 transition-colors">{m.pinned?<PinOff size={13}/>:<Pin size={13}/>}</button>
                        <button onClick={()=>{if(confirm('Delete?'))setMessages(p=>p.filter(x=>x.id!==m.id))}} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-100 flex items-center justify-center text-gray-500 hover:text-red-600 transition-colors"><Trash2 size={13}/></button>
                      </div>
                    </div>
                  </div>
                })}
              </div>
            </div>
          )}

          {/* MEMBERS */}
          {tab==='members' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <h2 className="font-heading font-bold text-gray-900 text-xl">Members ({filtered.length} of {members.length})</h2>
                <div className="flex gap-2">
                  <button onClick={()=>setShowWa(!showWa)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${showWa?'bg-gray-200 text-gray-700':'bg-green-600 text-white hover:bg-green-700'}`}>
                    <WaIcon size={15} color={showWa?'#374151':'white'}/>{showWa?'Close':'WhatsApp All'}
                  </button>
                  <button onClick={()=>setShowMForm(!showMForm)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${showMForm?'bg-gray-200 text-gray-700':'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    {showMForm?<X size={14}/>:<Plus size={14}/>}{showMForm?'Cancel':'Add Member'}
                  </button>
                </div>
              </div>

              {/* WhatsApp Blast Panel */}
              {showWa && (
                <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-5 mb-5">
                  <h3 className="font-bold text-green-900 mb-1">📱 WhatsApp Broadcast to Members</h3>
                  <p className="text-green-700 text-sm mb-4">Each member receives a personalised WhatsApp message with their name.</p>
                  <div className="space-y-3 mb-4">
                    <select value={waBlast.dept} onChange={e=>setWaBlast(p=>({...p,dept:e.target.value}))}
                      className="w-full border border-green-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none">
                      {DEPARTMENTS.map(d=><option key={d}>{d} ({countFor(d)})</option>)}
                    </select>
                    <input type="text" placeholder="Message title" value={waBlast.title} onChange={e=>setWaBlast(p=>({...p,title:e.target.value}))}
                      className="w-full border border-green-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"/>
                    <textarea rows={3} placeholder="Message body..." value={waBlast.body} onChange={e=>setWaBlast(p=>({...p,body:e.target.value}))}
                      className="w-full border border-green-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"/>
                  </div>
                  {waBlast.body && (
                    <div className="bg-white rounded-xl p-3 mb-4 border border-green-200">
                      <p className="text-xs text-gray-500 font-bold mb-1 uppercase">Preview</p>
                      <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans">{`✝ *GRAFAM — Grace Faith Mission*\n*${waBlast.title||'Title'}*\n\nDear [Name],\n\n${waBlast.body}\n\n— Pastor Derick, GRAFAM Soppo Street 5`}</pre>
                    </div>
                  )}
                  <button onClick={()=>{ if(!waBlast.title||!waBlast.body){alert('Fill in title and message.');return} blastWa(waBlast.title,waBlast.body,waBlast.dept); setShowWa(false) }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                    <WaIcon size={17} color="white"/>Broadcast to {countFor(waBlast.dept)} Members
                  </button>
                </div>
              )}

              {/* Add Member Form */}
              {showMForm && (
                <div className="bg-white rounded-2xl shadow-sm p-5 mb-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Add New Member</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[['name','Full Name *','e.g. Sis Grace'],['phone','Phone Number *','+237 6XX XXX XXX']].map(([k,l,p])=>(
                      <div key={k}><label className="block text-xs font-medium text-gray-600 mb-1">{l}</label>
                      <input type="text" placeholder={p} value={mForm[k]} onChange={e=>setMForm(x=>({...x,[k]:e.target.value}))}
                        className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/></div>
                    ))}
                    <div><label className="block text-xs font-medium text-gray-600 mb-1">Department</label>
                    <select value={mForm.department} onChange={e=>setMForm(x=>({...x,department:e.target.value}))}
                      className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {DEPARTMENTS.filter(d=>d!=='All Members').map(d=><option key={d}>{d}</option>)}</select></div>
                    <div><label className="block text-xs font-medium text-gray-600 mb-1">Status</label>
                    <select value={mForm.status} onChange={e=>setMForm(x=>({...x,status:e.target.value}))}
                      className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="active">Active</option><option value="inactive">Inactive</option></select></div>
                  </div>
                  <button onClick={addMember} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">Save Member</button>
                </div>
              )}

              <div className="flex flex-wrap gap-3 mb-4">
                <input type="text" placeholder="Search by name or phone..." value={mSearch} onChange={e=>setMSearch(e.target.value)}
                  className="flex-1 min-w-48 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <select value={deptFilter} onChange={e=>setDeptFilter(e.target.value)} className="border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none">
                  {DEPARTMENTS.map(d=><option key={d}>{d}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filtered.map(m=>(
                  <div key={m.id} className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-base flex-shrink-0">
                      {m.name?.[0]?.toUpperCase()||'?'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">{m.name}</p>
                      <p className="text-gray-400 text-xs">{m.phone}</p>
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-0.5 ${m.department==='Leadership'?'bg-amber-100 text-amber-700':'bg-blue-50 text-blue-700'}`}>{m.department}</span>
                    </div>
                    <a href={`https://wa.me/${toWa(m.phone)}?text=${encodeURIComponent(`✝ *GRAFAM*\nDear ${m.name},\n\n`)}`} target="_blank" rel="noreferrer"
                      title={`Chat with ${m.name}`}
                      className="w-9 h-9 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <WaIcon size={15} color="#16a34a"/>
                    </a>
                    {m.id > 43 && <button onClick={()=>{if(confirm('Remove?'))setMembers(p=>p.filter(x=>x.id!==m.id))}}
                      className="w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors"><Trash2 size={13}/></button>}
                  </div>
                ))}
              </div>
              {filtered.length===0 && <div className="text-center py-10 text-gray-400"><Users size={32} className="mx-auto mb-2 opacity-30"/><p>No members found.</p></div>}
            </div>
          )}

          {/* EVENTS */}
          {tab==='events' && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-heading font-bold text-gray-900 text-xl">Services & Events</h2>
                <button onClick={()=>setShowEForm(!showEForm)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                  {showEForm?<X size={14}/>:<Plus size={14}/>}{showEForm?'Cancel':'Add Event'}
                </button>
              </div>
              {showEForm && (
                <div className="bg-white rounded-2xl shadow-sm p-5 mb-5">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[['title','Title *','e.g. Harvest Thanksgiving'],['date','Date *','e.g. Sunday 15 June'],['time','Time','e.g. 9:00 AM'],['description','Description','Brief note']].map(([k,l,p])=>(
                      <div key={k}><label className="block text-xs font-medium text-gray-600 mb-1">{l}</label>
                      <input type="text" placeholder={p} value={eForm[k]} onChange={e=>setEForm(f=>({...f,[k]:e.target.value}))}
                        className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/></div>
                    ))}
                  </div>
                  <button onClick={()=>{if(!eForm.title||!eForm.date){alert('Title and date required.');return}setEvents(p=>[...p,{...eForm,id:Date.now()}]);setEForm({title:'',date:'',time:'',description:''});setShowEForm(false)}}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">Save Event</button>
                </div>
              )}
              <div className="space-y-4">
                {events.map(ev=>(
                  <div key={ev.id} className="bg-white rounded-2xl shadow-sm p-5 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0"><Calendar size={20} className="text-white"/></div>
                      <div>
                        <h3 className="font-heading font-bold text-gray-900 text-lg">{ev.title}</h3>
                        <p className="text-blue-600 font-semibold text-sm">{ev.date}{ev.time?` · ${ev.time}`:''}</p>
                        {ev.description&&<p className="text-gray-500 text-sm mt-1">{ev.description}</p>}
                      </div>
                    </div>
                    {ev.id>3&&<button onClick={()=>setEvents(p=>p.filter(e=>e.id!==ev.id))} className="text-red-400 hover:text-red-600 transition-colors flex-shrink-0"><Trash2 size={16}/></button>}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
