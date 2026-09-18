import { useState } from 'react';
import { Star, RefreshCw, Sparkles, Lock, Unlock } from 'lucide-react';

const compliments = [
  "The way you show your kindness is genuinely breathtaking.",
  "Your passion makes my world so much brighter.",
  "Your smile is one of the many things that make you so special.",
  "You have the grace of someone who has always known who they are.",
  "The way you wear your glasses and look completely unbothered by the world is breathtaking.",
  "I love how your patience shines through in everything you do.",
  "The way you show your spirit is genuinely breathtaking.",
  "You have the most wonderful humor, Rishita Ji.",
  "Your eyes is one of the many things that make you so special.",
  "Your kindness isn't performed; it's just who you are, and that is rare.",
  "Your empathy is one of the many things that make you so special.",
  "Your kindness brings so much peace to my heart.",
  "The way you show your intelligence is genuinely breathtaking.",
  "There is nothing quite like your beauty.",
  "Your gentleness brings so much peace to my heart.",
  "Every time I think about your warmth, I smile.",
  "There is nothing quite like your grace.",
  "There is nothing quite like your heart.",
  "I am constantly amazed by your kindness.",
  "Your smile makes my world so much brighter.",
  "Every time I think about your compassion, I smile.",
  "I am constantly amazed by your beauty.",
  "Your focus when you're absorbed in something you love is incredibly beautiful.",
  "You have the most wonderful warmth, Rishita Ji.",
  "Your intelligence makes my world so much brighter.",
  "Every time I think about your empathy, I smile.",
  "There is nothing quite like your laugh.",
  "Your grace is one of the many things that make you so special.",
  "I am constantly amazed by your elegance.",
  "Your empathy makes my world so much brighter.",
  "Your dedication makes my world so much brighter.",
  "I am constantly amazed by your grace.",
  "There is nothing quite like your humor.",
  "Everything about you — your wit, your warmth, your quiet strength — is perfect.",
  "You have the most wonderful compassion, Rishita Ji.",
  "Your warmth makes my world so much brighter.",
  "Every time I think about your thoughtfulness, I smile.",
  "You have the most wonderful kindness, Rishita Ji.",
  "I am constantly amazed by your compassion.",
  "Rishita Ji, you just glow. You radiate something incredibly warm and magnetic.",
  "Your compassion makes my world so much brighter.",
  "You have the most wonderful beauty, Rishita Ji.",
  "Your eyes brings so much peace to my heart.",
  "You make even the most ordinary moments feel extraordinary just by being there.",
  "I love how your grace shines through in everything you do.",
  "You carry yourself with a quiet dignity that most people spend their whole lives trying to learn.",
  "There is nothing quite like your empathy.",
  "Your kindness makes my world so much brighter.",
  "The way you show your warmth is genuinely breathtaking.",
  "Your thoughtfulness is one of the many things that make you so special.",
  "I love how your heart shines through in everything you do.",
  "Your creativity brings so much peace to my heart.",
  "The way you show your eyes is genuinely breathtaking.",
  "You are significantly more beautiful than you realize, and I will always remind you of it.",
  "You are the kind of person that makes a room feel warmer just by walking into it, Rishita Ji.",
  "The way you show your creativity is genuinely breathtaking.",
  "I love how your smile shines through in everything you do.",
  "I could spend forever admiring your grace.",
  "Your laugh makes my world so much brighter.",
  "You have the most wonderful heart, Rishita Ji.",
  "There is nothing quite like your eyes.",
  "I am constantly amazed by your intelligence.",
  "The thoughtfulness with which you approach life is something I genuinely admire.",
  "I could spend forever admiring your humor.",
  "There is nothing quite like your strength.",
  "I could spend forever admiring your beauty.",
  "Your laugh is my absolute favourite sound in the world.",
  "Your dedication brings so much peace to my heart.",
  "The way you show your laugh is genuinely breathtaking.",
  "Your thoughtfulness makes my world so much brighter.",
  "There is nothing quite like your gentleness.",
  "Your curiosity about the world makes you the most interesting person I know.",
  "I could spend forever admiring your passion.",
  "I am constantly amazed by your eyes.",
  "I love how your thoughtfulness shines through in everything you do.",
  "The way you show your heart is genuinely breathtaking.",
  "I am constantly amazed by your heart.",
  "The way you show your humor is genuinely breathtaking.",
  "Your strength makes my world so much brighter.",
  "The way you show your understanding is genuinely breathtaking.",
  "I love how your understanding shines through in everything you do.",
  "I could spend forever admiring your eyes.",
  "I love how your compassion shines through in everything you do.",
  "The fact that you exist in my life is the thing I am most grateful for.",
  "Your patience brings so much peace to my heart.",
  "You understand things without even needing them explained. Your emotional intelligence is a treasure.",
  "You have the most wonderful laugh, Rishita Ji.",
  "Your understanding brings so much peace to my heart.",
  "Every time I think about your gentleness, I smile.",
  "The way you show your grace is genuinely breathtaking.",
  "Every time I think about your elegance, I smile.",
  "I am constantly amazed by your understanding.",
  "I love how your warmth shines through in everything you do.",
  "Your understanding is one of the many things that make you so special.",
  "Your grace makes my world so much brighter.",
  "There is nothing quite like your patience.",
  "You have the most wonderful gentleness, Rishita Ji.",
  "I love how your elegance shines through in everything you do.",
  "There is nothing quite like your smile.",
  "There is nothing quite like your warmth.",
  "The way you show your strength is genuinely breathtaking.",
  "Your thoughtfulness brings so much peace to my heart.",
  "You have an extraordinary capacity to make people feel heard and understood.",
  "Your voice could narrate the world and I would listen to it forever.",
  "You are simultaneously my greatest comfort and my most exciting discovery."
];

export default function ComplimentVault() {
  const [unlocked, setUnlocked] = useState(false);
  const [current, setCurrent] = useState(0);
  const [shake, setShake] = useState(false);
  function openVault() {
    setShake(true);
    setTimeout(() => {
      setShake(false);
      setUnlocked(true);
      setCurrent(Math.floor(Math.random() * compliments.length));
    }, 600);
  }

  function newCompliment() {
    let next = Math.floor(Math.random() * compliments.length);
    while (next === current) next = Math.floor(Math.random() * compliments.length);
    setCurrent(next);
    }

    return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter XII</p>
        <h2 className="type-hero gradient-text mb-4">The Compliment Vault</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          An endless supply of love, for whenever you need it 💝
        </p>
      </div>

      {/* Vault */}
      <div className="flex justify-center mb-8">
        <div
          className={`cursor-pointer transition-all duration-300 ${shake ? 'vault-shake' : ''}`}
          onClick={!unlocked ? openVault : undefined}
        >
          <svg width="180" height="200" viewBox="0 0 180 200">
            <defs>
              <linearGradient id="vaultGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3d2a1a" />
                <stop offset="100%" stopColor="#1a0f05" />
              </linearGradient>
              <linearGradient id="doorGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5a3d28" />
                <stop offset="100%" stopColor="#2d1a0a" />
              </linearGradient>
            </defs>

            {/* Vault body */}
            <rect x="10" y="20" width="160" height="160" rx="16" fill="url(#vaultGrad)" stroke="#d4af37" strokeWidth="2" />

            {/* Door */}
            <rect x="25" y="35" width="130" height="130" rx="12" fill="url(#doorGrad)" stroke="#d4af37" strokeWidth="1.5" />

            {/* Combination wheel */}
            <circle cx="90" cy="100" r="40" fill="#3d2a1a" stroke="#d4af37" strokeWidth="2" />
            <circle cx="90" cy="100" r="30" fill="#2d1a0a" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />

            {/* Wheel notches */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 90 + 28 * Math.cos(angle);
              const y1 = 100 + 28 * Math.sin(angle);
              const x2 = 90 + 35 * Math.cos(angle);
              const y2 = 100 + 35 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d4af37" strokeWidth="2" />;
            })}

            {/* Center knob */}
            <circle cx="90" cy="100" r="10" fill="#d4af37" />
            <circle cx="90" cy="100" r="5" fill="#8b6914" />

            {/* Handle */}
            <rect x="125" y="90" width="20" height="20" rx="4" fill="#d4af37" />
            <rect x="140" y="94" width="15" height="12" rx="3" fill="#b8860b" />

            {/* Heart when unlocked */}
            {unlocked && (
              <text x="90" y="106" textAnchor="middle" fontSize="18" fill="#ff2e63">♥</text>
            )}

            {/* Status indicator */}
            <circle cx="50" cy="100" r="6" fill={unlocked ? '#22c55e' : '#ef4444'} />
            <text x="90" y="175" textAnchor="middle" fontSize="10" fill={unlocked ? '#22c55e' : '#ef4444'} fontFamily="serif">
              {unlocked ? '✓ OPEN' : '✗ LOCKED'}
            </text>
          </svg>
        </div>
      </div>

      {!unlocked && (
        <div className="text-center">
          <p className="type-subtitle" style={{ color: '#2d0020', marginBottom: '16px' }}>
            Click the vault to unlock today's compliment 🔓
          </p>
          <button
            onClick={openVault}
            className="px-10 py-4 rounded-full font-playfair btn-white-text"
            style={{ fontSize: '18px', fontWeight: '600', background: 'linear-gradient(135deg, #ff2e63, #d81b60)', boxShadow: '0 6px 24px rgba(255,46,99,0.4)', color: 'white' }}
          >
            <Unlock size={20} className="inline mr-2" color="white" />
            Open the Vault
          </button>
        </div>
      )}

      {/* Compliment display */}
      {unlocked && (
        <div className="space-y-6 chapter-enter">
          {/* Main compliment */}
          <div
            className="glass-warm rounded-3xl p-10 text-center pink-glow"
            style={{ border: '2px solid rgba(255,46,99,0.2)' }}
          >
            <p className="text-5xl mb-6">💝</p>
            <p className="type-subtitle" style={{ color: '#2d0020', lineHeight: '1.5', marginBottom: '16px' }}>
              "{compliments[current]}"
            </p>
            <p className="type-caption">— Sanket Mathur</p>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={newCompliment}
              className="flex items-center gap-2 px-6 py-3 rounded-full glass border border-pink-500/30 text-pink-300 hover:text-white hover:border-pink-500 transition-all font-cormorant"
            >
              <RefreshCw size={16} />
              New Compliment
            </button>
            
          </div>

        </div>
      )}
    </div>
  );
}
