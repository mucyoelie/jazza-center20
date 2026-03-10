const galleryItems = [
  { category: 'Training', title: 'Bronze Programme', img: '/image26.jpg', desc: 'Foundation training in progress' },
  { category: 'Training', title: 'Kitchen & Food Safety', img: '/image22.jpg', desc: 'Professional kitchen training' },
  { category: 'Training', title: 'Silver Certification', img: '/image25.jpg', desc: 'Advanced household management training' },
  { category: 'Placements', title: 'Bronze DM at Work', img: '/image20.jpg', desc: 'Certified DM maintaining household standards' },
  { category: 'Placements', title: 'Platinum Excellence', img: '/image19.jpg', desc: 'Executive household management in action' },
  { category: 'Jazza Foodies', title: 'Event Catering', img: '/image16.jpg', desc: 'Jazza Foodies at a diplomatic event' },
  { category: 'Jazza Foodies', title: 'Culinary Excellence', img: '/image4.jpg', desc: 'International cuisine mastery' },
  { category: 'Jazza Foodies', title: 'Pastry & Baking', img: '/image17.jpg', desc: 'Advanced pastry for Platinum DMs' },
  { category: 'Certification', title: 'Graduation Day', img: '/image11.jpg', desc: 'Certified DMs receiving their credentials' },
];

const categories = ['All', 'Training', 'Placements', 'Jazza Foodies', 'Certification'];

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
