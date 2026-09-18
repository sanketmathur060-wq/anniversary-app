import { useState } from 'react';
import { Star, Heart } from 'lucide-react';

const promises = [
  { icon: '☕', text: 'I promise to always find the coziest corner for our reading evenings together.' },
  { icon: '🛡️', text: 'I promise to protect your peace — always, without question.' },
  { icon: '📚', text: 'I promise to respect your love for books and stories, and to never rush you through a chapter.' },
  { icon: '🌙', text: 'I promise to be your anchor on the nights that feel uncertain.' },
  { icon: '🎬', text: 'I promise many more movie dates — always beside you in the dark.' },
  { icon: '🌺', text: 'I promise to celebrate you, loudly and sincerely, on your big days and your ordinary ones.' },
  { icon: '🤫', text: 'I promise to keep every secret you have ever trusted me with, forever.' },
  { icon: '💬', text: 'I promise to always choose honest words over comfortable silence.' },
];

export default function PromiseLocket() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter VII</p>
        <h2 className="type-hero gradient-text mb-4">The Promise Locket</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          Click the locket to open it, Rishita Ji 🔮
        </p>
      </div>

      {/* Locket graphic */}
      <div className="flex justify-center mb-8">
        <div
          className="cursor-pointer group"
          onClick={() => setOpen(!open)}
          style={{ perspective: '600px' }}
        >
          <svg
            width="200"
            height="240"
            viewBox="0 0 200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_30px_rgba(255,46,99,0.5)] transition-transform duration-300 group-hover:scale-105"
          >
            {/* Chain */}
            <path d="M100 10 Q80 30 80 50" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
            <path d="M100 10 Q120 30 120 50" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
            <circle cx="100" cy="10" r="5" fill="#d4af37" />

            {/* Locket body */}
            <ellipse cx="100" cy="155" rx="75" ry="80" fill="url(#locketGrad)" />
            <ellipse cx="100" cy="155" rx="75" ry="80" stroke="#d4af37" strokeWidth="3" fill="none" opacity="0.7" />

            {/* Inner circle */}
            <ellipse cx="100" cy="155" rx="58" ry="62" fill={open ? 'url(#openGrad)' : 'url(#closedGrad)'} />

            {/* Heart engraving */}
            {!open && (
              <path
                d="M100 135 C100 135 85 120 78 128 C71 136 75 148 100 165 C125 148 129 136 122 128 C115 120 100 135 100 135Z"
                fill="#ff2e63"
                opacity="0.9"
              />
            )}

            {/* Open state content */}
            {open && (
              <>
                <text x="100" y="130" textAnchor="middle" fontSize="11" fill="#fff0f3" fontFamily="Cormorant Garamond, serif" fontStyle="italic">Rishita Ji</text>
                <text x="100" y="148" textAnchor="middle" fontSize="9" fill="#ffb3c6" fontFamily="Cormorant Garamond, serif">&</text>
                <text x="100" y="165" textAnchor="middle" fontSize="11" fill="#fff0f3" fontFamily="Cormorant Garamond, serif" fontStyle="italic">Sanket Mathur</text>
                <text x="100" y="185" textAnchor="middle" fontSize="9" fill="#ff9eb5" fontFamily="Cormorant Garamond, serif">Sep 24, 2024 ♥</text>
              </>
            )}

            {/* Clasp */}
            <rect x="94" y="73" width="12" height="8" rx="3" fill="#d4af37" />

            <defs>
              <radialGradient id="locketGrad" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#e8c46e" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#b8860b" />
              </radialGradient>
              <radialGradient id="closedGrad" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#c8a02a" />
                <stop offset="100%" stopColor="#8b6914" />
              </radialGradient>
              <radialGradient id="openGrad" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#3d1a2a" />
                <stop offset="100%" stopColor="#1a0010" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="text-center mt-16 max-w-xl mx-auto chapter-enter">
        <div className="parchment-bg rounded-3xl p-10 border border-amber-300/30">
          <p className="type-subtitle" style={{ color: '#2d0020', marginBottom: '8px' }}>
            "These promises are the lock. You hold the only key."
          </p>
          <p className="type-caption">— Sanket Mathur</p>
        </div>
      </div>

      {/* Promises revealed */}
      {open && (
        <div className="space-y-4 chapter-enter mt-12">
          <h3 className="type-heading text-center mb-8">
            My Promises to You, Rishita Ji
          </h3>
          {promises.map((promise, i) => (
            <div
              key={i}
              className="glass-warm rounded-3xl p-6 flex items-start gap-5 transform transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-3xl flex-shrink-0 mt-1">{promise.icon}</span>
              <p className="type-body" style={{ color: '#3d1030', margin: 0 }}>
                {promise.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {!open && (
        <p className="text-center text-pink-400/50 font-cormorant italic text-base">
          The locket holds all my promises to you. Click it to see them.
        </p>
      )}
    </div>
  );
}
