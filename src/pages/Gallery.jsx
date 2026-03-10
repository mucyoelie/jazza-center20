const galleryItems = [
  { category: 'Training', title: 'Bronze Programme', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', desc: 'Foundation training in progress' },
  { category: 'Training', title: 'Kitchen & Food Safety', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', desc: 'Professional kitchen training' },
  { category: 'Training', title: 'Silver Certification', img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80', desc: 'Advanced household management training' },
  { category: 'Placements', title: 'Bronze DM at Work', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Certified DM maintaining household standards' },
  { category: 'Placements', title: 'Platinum Excellence', img: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80', desc: 'Executive household management in action' },
  { category: 'Jazza Foodies', title: 'Event Catering', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80', desc: 'Jazza Foodies at a diplomatic event' },
  { category: 'Jazza Foodies', title: 'Culinary Excellence', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', desc: 'International cuisine mastery' },
  { category: 'Jazza Foodies', title: 'Pastry & Baking', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80', desc: 'Advanced pastry for Platinum DMs' },
  { category: 'Certification', title: 'Graduation Day', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', desc: 'Certified DMs receiving their credentials' },
]

const categories = ['All', 'Training', 'Placements', 'Jazza Foodies', 'Certification']

import { useState } from 'react'

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.category === active)

  return (
    <div>
      <section className="hero-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">Gallery</h1>
          <p className="text-white/80 text-xl">Training sessions, certifications, placements & Jazza Foodies moments.</p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === cat ? 'bg-brand-red text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => { e.target.src = `https://via.placeholder.com/600x400/CC1414/ffffff?text=${encodeURIComponent(item.title)}` }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-red text-white text-xs px-3 py-1 rounded-full font-semibold">{item.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
