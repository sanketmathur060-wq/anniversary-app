import { useState, useEffect } from 'react';
import { Star, Heart } from 'lucide-react';

// Teddy Bear SVG (reusable)
function TeddyBear({ onClick, hugged }) {
  return (
    <div
      className={`cursor-pointer select-none transition-all duration-300 ${hugged ? 'scale-110' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      <svg
        width="200"
        height="220"
        viewBox="0 0 180 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={hugged ? 'animate-bounce' : ''}
      >
        <ellipse cx="90" cy="130" rx="55" ry="60" fill="#c8956c" />
        <ellipse cx="90" cy="135" rx="32" ry="35" fill="#e8b896" />
        <circle cx="90" cy="75" r="48" fill="#c8956c" />
        <circle cx="48" cy="38" r="20" fill="#c8956c" />
        <circle cx="48" cy="38" r="12" fill="#ff9eb5" />
        <circle cx="132" cy="38" r="20" fill="#c8956c" />
        <circle cx="132" cy="38" r="12" fill="#ff9eb5" />
        <circle cx="75" cy="70" r="8" fill="#3d2314" />
        <circle cx="105" cy="70" r="8" fill="#3d2314" />
        <circle cx="77" cy="68" r="3" fill="white" />
        <circle cx="107" cy="68" r="3" fill="white" />
        <ellipse cx="90" cy="84" rx="8" ry="6" fill="#3d2314" />
        <path d={hugged ? 'M78 96 Q90 108 102 96' : 'M80 92 Q90 102 100 92'} stroke="#3d2314" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="62" cy="85" r="10" fill="#ff9eb5" opacity="0.5" />
        <circle cx="118" cy="85" r="10" fill="#ff9eb5" opacity="0.5" />
        <ellipse cx="38" cy="125" rx="18" ry="28" fill="#c8956c" transform="rotate(-20 38 125)" />
        <ellipse cx="142" cy="125" rx="18" ry="28" fill="#c8956c" transform="rotate(20 142 125)" />
        <ellipse cx="68" cy="182" rx="20" ry="15" fill="#c8956c" />
        <ellipse cx="112" cy="182" rx="20" ry="15" fill="#c8956c" />
        {hugged && <text x="80" y="142" fontSize="22" fill="#ff2e63">♥</text>}
        <path d="M75 105 L90 115 L105 105 L90 98 Z" fill="#ff2e63" opacity="0.9" />
        <circle cx="90" cy="107" r="5" fill="#d81b60" />
      </svg>
    </div>
  );
}

// Floating hearts when hugged
function FloatingHeart({ id, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <span
      className="absolute text-pink-400 float-heart pointer-events-none text-2xl"
      style={{
        left: `${20 + Math.random() * 60}%`,
        bottom: '60%',
      }}
    >
      ♥
    </span>
  );
}

const finalMessages = [
  {
    icon: '🌹',
    title: 'The Last Page',
    text: `Every book worth reading ends with you wanting more. This one is no different. If anything, writing every word of it — every chapter, every reason, every letter, every vow — has only made it clearer how much more there is left to say. There will always be more to say about you, Rishita Ji.

Thank you for two years of being exactly who you are. For being my favourite story and the only ending I want.`,
  },
  {
    icon: '💌',
    title: 'From Sanket, With Everything',
    text: `I want you to know — not just today, but always — that you are the great love of my life. Not a chapter. Not a phase. The actual, entire story. Everything good in my world has your fingerprints on it.

You deserve every beautiful thing. I intend to spend as many years as you'll give me making sure you feel it. Happy anniversary, my Rishita Ji.`,
  },
  {
    icon: '⭐',
    title: 'A Final Promise',
    text: `I promise you this: no matter how many pages we add to our story, you will always be my favourite part of every single one. I choose you — today, tomorrow, and in every version of this life I am lucky enough to live.

Always yours, completely and without reservation,
— Sanket Mathur`,
  },
];

export default function Epilogue() {
  const [hugCount, setHugCount] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [nextId, setNextId] = useState(0);

  function handleHug() {
    setHugCount((c) => c + 1);
    const newHearts = Array.from({ length: 5 }, (_, i) => nextId + i);
    setFloatingHearts((prev) => [...prev, ...newHearts]);
    setNextId((id) => id + 5);
  }

  function removeHeart(id) {
    setFloatingHearts((prev) => prev.filter((h) => h !== id));
  }

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">
          Chapter XV
        </p>
        <h2 className="type-hero gradient-text mb-4">Epilogue & Teddy's Embrace</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          The final chapter — but never the last moment 🧸
        </p>
      </div>

      {/* Teddy hug section */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <TeddyBear onClick={handleHug} hugged={hugCount > 0 && hugCount % 2 === 1} />
          {floatingHearts.map((id) => (
            <FloatingHeart key={id} id={id} onDone={() => removeHeart(id)} />
          ))}
        </div>

        <p className="type-subtitle" style={{ color: '#2d0020', fontStyle: 'italic', marginTop: '24px' }}>
          Click the teddy for a virtual hug from Sanket 🧸
        </p>
        {hugCount > 0 && (
          <p className="type-body font-bold text-hotPink mt-4 animate-fade-in">
            {hugCount === 1 && 'One warm hug, just for you! 💕'}
            {hugCount === 2 && 'Two hugs — because once was not enough! 💗'}
            {hugCount === 3 && 'Three hugs — you deserve all of them! 💝'}
            {hugCount >= 4 && `${hugCount} hugs and still counting — my arms are always open for you! 🌹`}
          </p>
        )}
      </div>

      {/* Final messages */}
      <div className="space-y-6 mb-12">
        {finalMessages.map((msg, i) => (
          <div
            key={i}
            className="glass-warm rounded-3xl p-10"
            style={{ border: '2px solid rgba(255,46,99,0.2)' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl mt-1">{msg.icon}</span>
              <h3 className="type-subtitle" style={{ color: '#2d0020', margin: 0 }}>{msg.title}</h3>
            </div>
            <pre className="type-body whitespace-pre-wrap" style={{ color: '#5a2a10' }}>
              {msg.text}
            </pre>
          </div>
        ))}
      </div>

      {/* Final quote */}
      <div
        className="text-center rounded-3xl p-12 mb-8 glass-warm"
        style={{
          border: '1.5px solid rgba(255,46,99,0.3)',
          boxShadow: '0 8px 32px rgba(255,46,99,0.15)',
        }}
      >
        <div className="text-6xl mb-8 animate-heartbeat inline-block">🌹</div>
        <p className="type-title" style={{ color: '#2d0020', fontStyle: 'italic', marginBottom: '24px' }}>
          "You are every good thing<br />I was brave enough to hope for."
        </p>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-500/40" />
          <Heart size={20} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-500/40" />
        </div>
        <p className="type-subtitle" style={{ color: '#4a1535', fontStyle: 'italic', marginBottom: '8px' }}>
          Happy 2nd Anniversary, Rishita Ji
        </p>
        <p className="type-caption">
          September 24, 2026 — Sanket Mathur
        </p>
      </div>

      {/* Decorative bottom */}
      <div className="text-center">
        <p className="text-pink-400/40 font-cormorant italic text-sm">
          ❧ End of Book One — The rest is still being written ❧
        </p>
      </div>
    </div>
  );
}
