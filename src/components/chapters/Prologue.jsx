import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

/* ── Shared text style helpers ── */
const T = {
  label:    { fontFamily: '"Cormorant Garamond", serif', fontSize: '13px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c41c6e', marginBottom: '14px', display: 'block' },
  hero:     { fontFamily: '"Playfair Display", serif',   fontSize: 'clamp(3.4rem, 8vw, 5.2rem)', fontWeight: '800', lineHeight: '1.05', marginBottom: '20px' },
  sub:      { fontFamily: '"Playfair Display", serif',   fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontStyle: 'italic', color: '#6b1040', marginBottom: '10px' },
  date:     { fontFamily: '"Cormorant Garamond", serif', fontSize: '15px', color: '#a82b5e', letterSpacing: '0.06em', marginBottom: '32px' },
  body:     { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: '#3d1030', lineHeight: '1.9', textAlign: 'center' },
  hint:     { fontFamily: '"Cormorant Garamond", serif', fontSize: '14px', color: '#b04070', marginTop: '14px', fontStyle: 'italic' },
  hug:      { fontFamily: '"Cormorant Garamond", serif', fontSize: '16px', color: '#c41c6e',  textAlign: 'center', marginTop: '10px', fontStyle: 'italic' },
  dedLabel: { fontFamily: '"Playfair Display", serif',   fontSize: '12px', fontStyle: 'italic', color: '#7a4a20', textAlign: 'center', marginBottom: '14px', letterSpacing: '0.28em', textTransform: 'uppercase' },
  dedBody:  { fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: '#5a2a10', lineHeight: '2', textAlign: 'center' },
};

/* ── Interactive SVG Teddy Bear ── */
function TeddyBear() {
  const [hugged, setHugged] = useState(false);
  return (
    <div
      className="cursor-pointer select-none inline-block transition-transform duration-300 hover:scale-110"
      onClick={() => setHugged(!hugged)}
      title="Click me for a hug! 🧸"
    >
      <svg
        width="190" height="210" viewBox="0 0 180 200" fill="none"
        className={hugged ? 'animate-bounce' : ''}
      >
        <ellipse cx="90" cy="130" rx="55" ry="60" fill="#c8956c" />
        <ellipse cx="90" cy="135" rx="32" ry="35" fill="#e8b896" />
        <circle  cx="90" cy="75"  r="48"  fill="#c8956c" />
        <circle  cx="48" cy="38"  r="20"  fill="#c8956c" />
        <circle  cx="48" cy="38"  r="12"  fill="#ff9eb5" />
        <circle  cx="132" cy="38" r="20"  fill="#c8956c" />
        <circle  cx="132" cy="38" r="12"  fill="#ff9eb5" />
        <circle  cx="75"  cy="70" r="8"   fill="#3d2314" />
        <circle  cx="105" cy="70" r="8"   fill="#3d2314" />
        <circle  cx="77"  cy="68" r="3"   fill="white"   />
        <circle  cx="107" cy="68" r="3"   fill="white"   />
        <ellipse cx="90"  cy="84" rx="8"  ry="6"  fill="#3d2314" />
        <path d={hugged ? 'M78 96 Q90 108 102 96' : 'M80 92 Q90 102 100 92'}
          stroke="#3d2314" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="62"  cy="85"  r="10" fill="#ff9eb5" opacity="0.5" />
        <circle cx="118" cy="85"  r="10" fill="#ff9eb5" opacity="0.5" />
        <ellipse cx="38"  cy="125" rx="18" ry="28" fill="#c8956c" transform="rotate(-20 38 125)" />
        <ellipse cx="142" cy="125" rx="18" ry="28" fill="#c8956c" transform="rotate(20 142 125)" />
        <ellipse cx="68"  cy="182" rx="20" ry="15" fill="#c8956c" />
        <ellipse cx="112" cy="182" rx="20" ry="15" fill="#c8956c" />
        {hugged && <text x="80" y="142" fontSize="22" fill="#ff2e63">♥</text>}
        <path d="M75 105 L90 115 L105 105 L90 98 Z" fill="#ff2e63" opacity="0.9" />
        <circle cx="90" cy="107" r="5" fill="#d81b60" />
      </svg>

      {hugged && (
        <p style={T.hug}>Sending you a warm hug! 🤗</p>
      )}
    </div>
  );
}

/* ── Main Prologue Page ── */
export default function Prologue({ onOpen }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${5 + i * 10}%`,
        delay: `${i * 0.35}s`,
        size: `${Math.random() * 22 + 14}px`,
      }))
    );
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px', position: 'relative' }}>

      {/* Floating hearts */}
      {hearts.map((h) => (
        <span key={h.id} className="fixed pointer-events-none animate-float"
          style={{ left: h.left, top: '10%', fontSize: h.size, animationDelay: h.delay, color: 'rgba(255,46,99,0.13)' }}>
          ♥
        </span>
      ))}

      <div style={{ maxWidth: '680px', width: '100%', textAlign: 'center' }} className="chapter-enter">

        {/* ── Book card ── */}
        <div style={{
          position: 'relative',
          padding: 'clamp(32px, 5vw, 56px)',
          borderRadius: '28px',
          background: 'rgba(255, 255, 255, 0.92)',
          border: '2px solid rgba(255, 105, 180, 0.28)',
          backdropFilter: 'blur(28px)',
          boxShadow: '0 12px 70px rgba(255,46,99,0.14), 0 2px 0 rgba(255,255,255,0.98) inset',
        }}>

          {/* Corner ornaments */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <span key={pos} className={`absolute ${pos}`}
              style={{ fontSize: '24px', color: 'rgba(255,105,180,0.35)',
                transform: ['none','scaleX(-1)','scaleY(-1)','scale(-1)'][i] }}>
              ❧
            </span>
          ))}

          {/* Teddy bear */}
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
            <TeddyBear />
          </div>

          {/* Labels & Title */}
          <span style={T.label}>A Book of Love, Crafted by Sanket Mathur</span>

          <h1 className="gradient-text" style={T.hero}>For Rishita Ji</h1>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,46,99,0.4))' }} />
            <Heart size={20} fill="#ff2e63" color="#ff2e63" />
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(255,46,99,0.4))' }} />
          </div>

          <p style={T.sub}>"Our Love Story"</p>
          <p style={T.date}>September 9, 2024 — The day we first met. Forever and beyond.</p>

          {/* Dedication parchment */}
          <div style={{
            background: 'linear-gradient(135deg, #fdf6ec, #faecd8, #fef4e8)',
            border: '1.5px solid rgba(212,175,55,0.3)',
            borderRadius: '18px',
            padding: 'clamp(20px, 3vw, 36px) clamp(24px, 4vw, 48px)',
            marginBottom: '32px',
            boxShadow: 'inset 0 2px 14px rgba(212,175,55,0.08)',
          }}>
            <span style={T.dedLabel}>Dedication</span>
            <p style={T.dedBody}>
              To <strong style={{ color: '#d81b60', fontWeight: '700' }}>Rishita Ji</strong> — my safe place, my quiet strength,<br />
              my favourite chapter in every story I will ever tell.<br />
              This book exists because you exist.<br />
              Every word here is true. Every page is yours.<br />
              <em>— Sanket Mathur</em>
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpen}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 40px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              fontWeight: '700',
              color: 'white',
              background: 'linear-gradient(135deg, #ff2e63, #d81b60)',
              boxShadow: '0 6px 30px rgba(255,46,99,0.45)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(255,46,99,0.55)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 6px 30px rgba(255,46,99,0.45)'; }}
          >
            <Sparkles size={20} color="white" />
            Open Our Story
            <Sparkles size={20} color="white" />
          </button>

          <p style={T.hint}>Click the teddy bear above for a special hug 🧸</p>
        </div>
      </div>
    </div>
  );
}

export { TeddyBear };
