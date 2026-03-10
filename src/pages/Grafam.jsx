import { useState } from 'react'
import GrafamPublic from '../components/grafam/GrafamPublic'
import GrafamAdmin from '../components/grafam/GrafamAdmin'

export default function Grafam() {
  const [view, setView] = useState('public') // 'public' | 'admin'
  const [adminAuth, setAdminAuth] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState('')

  const handleLogin = () => {
    if (loginForm.username === 'pastor' && loginForm.password === 'grafam2024') {
      setAdminAuth(true)
      setLoginError('')
    } else {
      setLoginError('Invalid credentials. Try username: pastor / password: grafam2024')
    }
  }

  if (view === 'admin' && !adminAuth) {
    return (
      <div className="min-h-screen grafam-bg flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-grafam-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✝</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-gray-900">GRAFAM Admin</h2>
            <p className="text-gray-500 text-sm mt-1">Grace Faith Mission — Soppo, Street 5</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={e => setLoginForm(p => ({ ...p, username: e.target.value }))}
                placeholder="Enter username"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-grafam-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={e => setLoginForm(p => ({ ...p, password: e.target.value }))}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-grafam-blue"
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
              />
            </div>
            {loginError && (
              <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{loginError}</p>
            )}
            <button
              onClick={handleLogin}
              className="w-full bg-grafam-blue text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => setView('public')}
              className="w-full text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              ← Back to Church Page
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (view === 'admin' && adminAuth) {
    return <GrafamAdmin onLogout={() => { setAdminAuth(false); setView('public') }} />
  }

  return <GrafamPublic onAdminClick={() => setView('admin')} />
}
