import { useState } from 'react';
import { Heart, X, Menu } from 'lucide-react';

const chapters = [
  { id: 0,  icon: '🌹', label: 'Prologue — Our Cover' },
  { id: 1,  icon: '💫', label: 'Chapter I — Our Beginning' },
  { id: 2,  icon: '📚', label: 'Chapter II — 100 Reasons' },
  { id: 3,  icon: '📸', label: 'Chapter III — Memories' },
  { id: 4,  icon: '📜', label: 'Chapter IV — Vows & Trust' },
  { id: 5,  icon: '✉️', label: 'Chapter V — Secret Mailbox' },
  { id: 6,  icon: '✨', label: 'Chapter VI — Constellation' },
  { id: 7,  icon: '🔮', label: 'Chapter VII — Promise Locket' },
  { id: 10, icon: '⏰', label: 'Chapter X — Time Together' },
  { id: 11, icon: '🌟', label: 'Chapter XI — Bucket List' },
  { id: 12, icon: '💝', label: 'Chapter XII — Compliment Vault' },
  { id: 13, icon: '🍾', label: 'Chapter XIII — Time Capsule' },
  { id: 14, icon: '🫂', label: 'Chapter XIV — Cute Teddy Hugs' },
  { id: 15, icon: '🧸', label: 'Chapter XV — Epilogue' },
];

export default function Sidebar({ activeChapter, onChapterChange }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 lg:hidden rounded-full w-12 h-12 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #ff2e63, #ff69b4)',
          boxShadow: '0 4px 20px rgba(255,46,99,0.35)',
        }}
        aria-label="Toggle navigation"
      >
        {open
          ? <X size={20} color="white" />
          : <Menu size={20} color="white" />}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'rgba(255,182,210,0.35)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-40 flex flex-col transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,235,248,0.97) 100%)',
          borderRight: '1px solid rgba(255, 105, 180, 0.22)',
          boxShadow: '4px 0 30px rgba(255, 46, 99, 0.1)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '28px 24px 20px',
            borderBottom: '1px solid rgba(255,105,180,0.18)',
            background: 'linear-gradient(135deg, rgba(255,220,238,0.6) 0%, rgba(255,245,252,0.6) 100%)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px', display: 'inline-block' }}
              className="animate-heartbeat">🌹</div>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '17px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #ff1493, #ff2e63, #ff69b4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '4px',
              }}
            >
              Our Love Story
            </h2>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '11px',
              color: 'rgba(200, 60, 110, 0.65)',
              fontStyle: 'italic',
            }}>
              Sep 9, 2024 — Forever
            </p>
          </div>
        </div>

        {/* Chapter list */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 10px' }}>
          {chapters.map((ch) => {
            const isActive = activeChapter === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => { onChapterChange(ch.id); setOpen(false); }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  marginBottom: '3px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isActive
                    ? 'linear-gradient(135deg, #ff2e63, #ff69b4)'
                    : 'transparent',
                  boxShadow: isActive
                    ? '0 4px 16px rgba(255, 46, 99, 0.3)'
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(255, 182, 210, 0.3)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'transparent';
                }}
              >
                <span style={{ fontSize: '17px', flexShrink: 0 }}>{ch.icon}</span>
                <span style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '13px',
                  lineHeight: '1.3',
                  color: isActive ? 'white' : '#7a2050',
                  flex: 1,
                }}>
                  {ch.label}
                </span>
                {isActive && (
                  <Heart size={11} fill="white" color="white" style={{ flexShrink: 0 }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div
          style={{
            padding: '16px 20px',
            borderTop: '1px solid rgba(255,105,180,0.15)',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '11px',
            color: 'rgba(200, 80, 130, 0.55)',
            fontStyle: 'italic',
            lineHeight: '1.6',
          }}>
            Made with ❤️ by Sanket<br />for Rishita Ji
          </p>
        </div>
      </aside>
    </>
  );
}
