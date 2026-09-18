import { useState } from 'react';
import { Star, Lock } from 'lucide-react';

const BRIDGE_SPOTS = [
  { x: 12, y: 60 }, { x: 22, y: 60 }, { x: 32, y: 60 }, { x: 42, y: 60 },
  { x: 52, y: 60 }, { x: 62, y: 60 }, { x: 72, y: 60 }, { x: 82, y: 60 },
];

export default function LoveLocks() {
  const [locks, setLocks] = useState([]);
  const [sparkle, setSparkle] = useState(null);

  function addLock(spot) {
    if (locks.find((l) => l.x === spot.x)) return; // already locked
    setLocks((prev) => [...prev, spot]);
    setSparkle(spot.x);
    setTimeout(() => setSparkle(null), 1000);
  }

  const mainLockPlaced = locks.length === 0;

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="chapter-label mb-3">Chapter IX</p>
        <h2 className="type-hero gradient-text mb-4">Virtual Love Locks</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          Click anywhere on the bridge railing to snap a love lock 🔒
        </p>
      </div>

      {/* Bridge SVG */}
      <div className="glass rounded-3xl p-6 mb-8">
        <svg
          viewBox="0 0 100 90"
          className="w-full"
          style={{ maxHeight: '320px' }}
        >
          {/* Sky gradient */}
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a0010" />
              <stop offset="100%" stopColor="#2d0020" />
            </linearGradient>
            <linearGradient id="bridgeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5a4020" />
              <stop offset="100%" stopColor="#3a2a10" />
            </linearGradient>
          </defs>

          <rect width="100" height="90" fill="url(#skyGrad)" />

          {/* Stars */}
          {[5,15,25,35,45,55,65,75,85,95].map((x, i) => (
            <circle key={i} cx={x} cy={5 + (i % 3) * 8} r="0.4" fill="white" opacity={0.6} />
          ))}

          {/* Bridge cables */}
          <path d="M0 35 Q50 20 100 35" stroke="#5a4020" strokeWidth="1.5" fill="none" />
          <path d="M0 40 Q50 25 100 40" stroke="#6a5030" strokeWidth="1" fill="none" />

          {/* Vertical cables */}
          {[10,20,30,40,50,60,70,80,90].map((x) => (
            <line key={x} x1={x} y1={28 + Math.abs(x-50)*0.1} x2={x} y2={55} stroke="#5a4020" strokeWidth="0.5" opacity="0.7" />
          ))}

          {/* Bridge railing */}
          <rect x="0" y="53" width="100" height="5" fill="url(#bridgeGrad)" rx="1" />
          <rect x="0" y="50" width="100" height="3" fill="#7a6030" rx="1" />

          {/* Vertical rails */}
          {[5,15,25,35,45,55,65,75,85,95].map((x) => (
            <rect key={x} x={x-0.5} y="40" width="1.2" height="18" fill="#6a5030" rx="0.5" />
          ))}

          {/* Bridge deck */}
          <rect x="0" y="58" width="100" height="6" fill="#3a2a10" />

          {/* Lock click zones */}
          {BRIDGE_SPOTS.map((spot) => {
            const locked = locks.find((l) => l.x === spot.x);
            const isSparkle = sparkle === spot.x;
            return (
              <g
                key={spot.x}
                onClick={() => addLock(spot)}
                className="cursor-pointer"
              >
                {!locked ? (
                  <>
                    {/* Click indicator */}
                    <circle cx={spot.x} cy={spot.y} r="3" fill="rgba(255,46,99,0.2)" className="animate-pulse" />
                    <text x={spot.x} y={spot.y + 1} textAnchor="middle" fontSize="3" fill="rgba(255,46,99,0.5)">+</text>
                  </>
                ) : (
                  <g>
                    {/* Lock body */}
                    <rect x={spot.x - 3} y={spot.y - 3} width="6" height="5" rx="1"
                      fill={isSparkle ? '#ffcc00' : '#d4af37'}
                      stroke="#b8860b" strokeWidth="0.5"
                    />
                    {/* Lock shackle */}
                    <path d={`M${spot.x - 1.5} ${spot.y - 3} Q${spot.x} ${spot.y - 6} ${spot.x + 1.5} ${spot.y - 3}`}
                      stroke="#b8860b" strokeWidth="1" fill="none" strokeLinecap="round" />
                    {/* Initials */}
                    <text x={spot.x} y={spot.y + 0.5} textAnchor="middle" fontSize="2.2" fill="#1a0f05" fontWeight="bold">
                      S♥R
                    </text>
                    {/* Sparkle */}
                    {isSparkle && (
                      <>
                        <circle cx={spot.x} cy={spot.y - 6} r="1" fill="#ffff00" opacity="0.9" />
                        <circle cx={spot.x + 4} cy={spot.y - 2} r="0.7" fill="#ff2e63" opacity="0.9" />
                        <circle cx={spot.x - 4} cy={spot.y - 2} r="0.7" fill="#ff2e63" opacity="0.9" />
                      </>
                    )}
                  </g>
                )}
              </g>
            );
          })}

          {/* River */}
          <rect x="0" y="64" width="100" height="26" fill="#0a0520" opacity="0.8" />
          <path d="M0 70 Q25 67 50 72 Q75 77 100 70" stroke="rgba(255,46,99,0.15)" strokeWidth="1" fill="none" />
          <path d="M0 78 Q30 75 60 80 Q80 83 100 78" stroke="rgba(255,100,150,0.1)" strokeWidth="0.8" fill="none" />

          {/* Moon reflection */}
          <circle cx="50" cy="80" r="3" fill="rgba(255,200,220,0.1)" />
        </svg>
      </div>

      <div className="text-center mb-8">
        <span className="glass-pink px-6 py-3 rounded-full font-cormorant" style={{ fontSize: '18px', color: '#6b1040' }}>
          {locks.length === 0
            ? 'No locks yet — click the bridge to start! 🔒'
            : `${locks.length} love lock${locks.length !== 1 ? 's' : ''} snapped — S♥R forever!`}
        </span>
      </div>

      {/* Reset */}
      {locks.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => setLocks([])}
            className="text-pink-400/50 text-sm font-cormorant underline hover:text-pink-400"
          >
            Clear all locks
          </button>
        </div>
      )}

      <div className="text-center mt-12">
        <div className="glass-warm rounded-3xl p-10 max-w-xl mx-auto">
          <p className="type-subtitle" style={{ color: '#2d0020', lineHeight: '1.5', marginBottom: '12px' }}>
            "Some loves are so certain,<br />
            they deserve to be locked in place forever."
          </p>
          <p className="type-caption">— S ♥ Rishita Ji</p>
        </div>
      </div>
    </div>
  );
}
