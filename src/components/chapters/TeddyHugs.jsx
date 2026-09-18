import { useState } from 'react';
import { Star, Heart } from 'lucide-react';

const hugs = [
  {
    id: 'warm',
    label: 'A Warm Hug 🫂',
    message: 'For those days when you just need to feel safe. I am right here.'
  },
  {
    id: 'tight',
    label: 'A Tight Squeeze 💗',
    message: 'The kind of hug where I just don\'t want to let you go.'
  },
  {
    id: 'sleepy',
    label: 'A Sleepy Cuddle 💤',
    message: 'For when we are both tired but still want to be as close as possible.'
  },
  {
    id: 'happy',
    label: 'A Happy Dance Hug ✨',
    message: 'Because being with you is always a reason to celebrate!'
  }
];

function BubuDuduSVG({ type }) {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="animate-bounce mx-auto">
      {/* Brown Bear (Dudu) */}
      <circle cx="120" cy="110" r="50" fill="#c8956c" />
      <circle cx="150" cy="70" r="18" fill="#c8956c" />
      <circle cx="90" cy="70" r="18" fill="#c8956c" />
      <circle cx="105" cy="100" r="6" fill="#3d2314" />
      <circle cx="135" cy="100" r="6" fill="#3d2314" />
      <ellipse cx="120" cy="115" rx="10" ry="7" fill="#3d2314" />
      <path d="M113 125 Q120 135 127 125" stroke="#3d2314" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* White Bear (Bubu) */}
      <circle cx="75" cy="120" r="50" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2" />
      <circle cx="40" cy="80" r="18" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2" />
      <circle cx="100" cy="80" r="18" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2" />
      <circle cx="60" cy="110" r="6" fill="#3d2314" />
      <circle cx="90" cy="110" r="6" fill="#3d2314" />
      <ellipse cx="75" cy="125" rx="10" ry="7" fill="#3d2314" />
      <path d="M68 135 Q75 145 82 135" stroke="#3d2314" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Blush */}
      <circle cx="50" cy="125" r="10" fill="#ff9eb5" opacity="0.6" />
      <circle cx="100" cy="125" r="10" fill="#ff9eb5" opacity="0.6" />
      
      {/* Heart */}
      <text x="85" y="45" fontSize="40" fill="#ff2e63" className="animate-pulse">♥</text>
    </svg>
  );
}

export default function TeddyHugs() {
  const [activeHug, setActiveHug] = useState(null);

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter XIV</p>
        <h2 className="type-hero gradient-text mb-4">Cute Teddy Hugs</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          Virtual Bubu & Dudu hugs whenever you need them, Rishita Ji 🧸
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {hugs.map((hug) => (
          <button
            key={hug.id}
            onClick={() => setActiveHug(hug)}
            className={`p-4 rounded-2xl transition-all duration-300 font-playfair text-lg flex items-center justify-center gap-2 ${
              activeHug?.id === hug.id 
                ? 'bg-hotPink text-white shadow-[0_4px_15px_rgba(255,46,99,0.3)]' 
                : 'glass-warm text-hotPink hover:bg-pink-100'
            }`}
            style={{ 
              border: activeHug?.id === hug.id ? 'none' : '1.5px solid rgba(255,46,99,0.2)'
            }}
          >
            {hug.label}
          </button>
        ))}
      </div>

      {activeHug && (
        <div className="glass-warm rounded-3xl p-10 text-center animate-fade-in" style={{ border: '2px solid rgba(255,46,99,0.2)' }}>
          <div className="flex justify-center mb-6">
            <BubuDuduSVG type={activeHug.id} />
          </div>
          <h3 className="type-subtitle mb-4" style={{ color: '#2d0020' }}>{activeHug.label}</h3>
          <p className="type-body italic" style={{ color: '#5a2a10' }}>"{activeHug.message}"</p>
        </div>
      )}

      {!activeHug && (
        <div className="glass rounded-3xl p-10 text-center flex flex-col items-center justify-center min-h-[300px]" style={{ background: 'rgba(255,255,255,0.6)', border: '1.5px dashed rgba(255,46,99,0.3)' }}>
          <Heart size={48} color="#ff2e63" className="mb-4 animate-bounce" />
          <p className="type-body" style={{ color: '#7a2050' }}>Click a button above to receive a hug! 💕</p>
        </div>
      )}
    </div>
  );
}
