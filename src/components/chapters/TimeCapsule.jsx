import { useState, useEffect } from 'react';
import { Star, Lock, Send, Heart } from 'lucide-react';

const STORAGE_KEY = 'rishita_time_capsule';
const NEXT_OPEN = new Date('2027-09-24T00:00:00');

export default function TimeCapsule() {
  const [wish, setWish] = useState('');
  const [saved, setSaved] = useState(null);
  const [sealed, setSealed] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setSaved(parsed);
      setSealed(true);
    }
  }, []);

  function saveCapsule() {
    if (!wish.trim()) return;
    const entry = {
      message: wish,
      from: name || 'Rishita Ji',
      savedAt: new Date().toISOString(),
      openOn: NEXT_OPEN.toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
    setSaved(entry);
    setSealed(true);
  }

  function unseal() {
    localStorage.removeItem(STORAGE_KEY);
    setSaved(null);
    setSealed(false);
    setWish('');
    setName('');
  }

  const daysUntilOpen = Math.ceil((NEXT_OPEN - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter XIII</p>
        <h2 className="type-hero gradient-text mb-4">Message in a Bottle</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          Write a wish, seal it in the bottle, and open it on September 24, 2027 🍾
        </p>
      </div>

      {/* Bottle SVG */}
      <div className="flex justify-center mb-8">
        <svg width="160" height="280" viewBox="0 0 160 280">
          <defs>
            <linearGradient id="bottleGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(100,60,180,0.7)" />
              <stop offset="50%" stopColor="rgba(60,20,120,0.8)" />
              <stop offset="100%" stopColor="rgba(80,30,150,0.6)" />
            </linearGradient>
            <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,46,99,0.4)" />
              <stop offset="100%" stopColor="rgba(180,20,60,0.1)" />
            </linearGradient>
          </defs>

          {/* Bottle body */}
          <path
            d="M55 80 C40 100 30 130 30 165 C30 220 50 260 80 260 C110 260 130 220 130 165 C130 130 120 100 105 80 Z"
            fill="url(#bottleGrad)"
            stroke="rgba(150,100,255,0.5)"
            strokeWidth="2"
          />

          {/* Bottle neck */}
          <rect x="60" y="30" width="40" height="55" rx="8" fill="url(#bottleGrad)" stroke="rgba(150,100,255,0.5)" strokeWidth="1.5" />

          {/* Cork / cap */}
          <rect x="58" y="15" width="44" height="22" rx="6"
            fill={sealed ? '#d4af37' : '#8b6914'}
            stroke={sealed ? '#b8860b' : '#5a4010'}
            strokeWidth="1.5"
          />
          {sealed && <text x="80" y="31" textAnchor="middle" fontSize="10" fill="#3d2010">🔒</text>}

          {/* Message inside when sealed */}
          {sealed && (
            <>
              <rect x="45" y="140" width="70" height="60" rx="4" fill="rgba(253,246,236,0.9)" transform="rotate(-5 80 170)" />
              <text x="80" y="162" textAnchor="middle" fontSize="7" fill="#8b4513" fontFamily="serif" fontStyle="italic" transform="rotate(-5 80 162)">
                A wish sealed
              </text>
              <text x="80" y="174" textAnchor="middle" fontSize="7" fill="#8b4513" fontFamily="serif" fontStyle="italic" transform="rotate(-5 80 174)">
                for Sep 2027
              </text>
              <text x="80" y="190" textAnchor="middle" fontSize="12" transform="rotate(-5 80 190)">
                🌹
              </text>
            </>
          )}

          {/* Shimmer */}
          <path
            d="M50 110 Q60 140 55 180"
            stroke="rgba(200,150,255,0.4)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Bubbles */}
          {sealed && [
            { cx: 70, cy: 190 }, { cx: 95, cy: 210 }, { cx: 75, cy: 230 },
          ].map((b, i) => (
            <circle key={i} cx={b.cx} cy={b.cy} r="3" fill="rgba(255,200,255,0.3)" />
          ))}
        </svg>
      </div>

      {/* Sealed state */}
      {sealed && saved ? (
        <div className="space-y-6 chapter-enter">
          <div
            className="glass-warm rounded-3xl p-10 text-center pink-glow"
            style={{ border: '2px solid rgba(255,46,99,0.2)' }}
          >
            <Lock size={40} color="#ff2e63" className="mx-auto mb-6" />
            <h3 className="type-subtitle" style={{ color: '#2d0020', marginBottom: '12px' }}>Capsule Sealed! 🌊</h3>
            <p className="type-body" style={{ color: '#7a2050', marginBottom: '24px' }}>
              Your message has been sealed and is floating toward September 24, 2027.
            </p>
            <div className="glass rounded-2xl p-6 text-left mb-6" style={{ background: 'rgba(255,255,255,0.7)' }}>
              <p className="type-caption mb-2">From: {saved.from}</p>
              <p className="type-body" style={{ color: '#2d0020', fontStyle: 'italic', margin: '0 0 12px 0' }}>"{saved.message}"</p>
              <p className="type-caption" style={{ color: '#8a4020' }}>
                Sealed on: {new Date(saved.savedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
            <p className="text-pink-300/60 font-cormorant text-sm">
              Opens in approximately <span className="text-pink-400 font-bold">{daysUntilOpen.toLocaleString()}</span> days ✨
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={unseal}
              className="text-pink-400/50 text-sm font-cormorant underline hover:text-pink-400"
            >
              Unseal and write a new message
            </button>
          </div>
        </div>
      ) : (
        /* Input form */
        <div className="glass-warm rounded-3xl p-10 chapter-enter">
          <h3 className="type-subtitle text-center mb-8" style={{ color: '#2d0020' }}>
            Write Your Wish
          </h3>

          <div className="space-y-4">
            <div>
              <label className="type-caption block mb-2" style={{ color: '#6b1040' }}>Your name (optional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rishita Ji"
                className="w-full px-5 py-4 rounded-xl text-input focus:outline-none focus:border-hotPink type-body"
                style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,46,99,0.3)', color: '#2d0020' }}
              />
            </div>

            <div>
              <label className="type-caption block mb-2" style={{ color: '#6b1040' }}>Your wish or message for September 2027</label>
              <textarea
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Write something beautiful to open a year from now… a hope, a dream, a love note to your future self…"
                rows={6}
                className="w-full px-5 py-4 rounded-xl text-input focus:outline-none focus:border-hotPink type-body resize-none"
                style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,46,99,0.3)', color: '#2d0020', lineHeight: '1.6' }}
              />
            </div>

            <button
              onClick={saveCapsule}
              disabled={!wish.trim()}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-playfair btn-white-text transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-4"
              style={{ fontSize: '18px', fontWeight: '600', background: 'linear-gradient(135deg, #ff2e63, #d81b60)', boxShadow: '0 6px 24px rgba(255,46,99,0.4)' }}
            >
              <Send size={20} color="white" />
              Seal in the Bottle 🍾
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
