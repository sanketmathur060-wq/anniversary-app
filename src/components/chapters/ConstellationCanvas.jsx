import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const STARS = Array.from({ length: 80 }, (_, i) => ({
  x: Math.random(),
  y: Math.random(),
  r: Math.random() * 2 + 0.5,
  twinkle: Math.random() * Math.PI * 2,
}));

// Heart constellation points (normalized 0-1)
const HEART_POINTS = [
  [0.5, 0.2], [0.62, 0.12], [0.75, 0.15], [0.82, 0.25],
  [0.80, 0.38], [0.65, 0.55], [0.5, 0.7], [0.35, 0.55],
  [0.20, 0.38], [0.18, 0.25], [0.25, 0.15], [0.38, 0.12], [0.5, 0.2],
];

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [revealed, setRevealed] = useState(false);
  const [hint, setHint] = useState(false);
  const animRef = useRef();
  const tickRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function draw() {
      tickRef.current += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const radius = 120;

      // Draw all stars
      STARS.forEach((star) => {
        const sx = star.x * W;
        const sy = star.y * H;
        const opacity = 0.5 + 0.5 * Math.sin(tickRef.current * 0.03 + star.twinkle);
        ctx.beginPath();
        ctx.arc(sx, sy, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 220, 240, ${opacity})`;
        ctx.fill();
      });

      // Heart constellation
      const heartStars = HEART_POINTS.map(([nx, ny]) => ({
        x: nx * W,
        y: ny * H,
      }));

      if (revealed) {
        // Draw heart lines
        ctx.strokeStyle = 'rgba(255, 46, 99, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = '#ff2e63';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        heartStars.forEach((s, i) => {
          i === 0 ? ctx.moveTo(s.x, s.y) : ctx.lineTo(s.x, s.y);
        });
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Bright heart stars
        heartStars.forEach((s) => {
          const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 8);
          grad.addColorStop(0, 'rgba(255,46,99,1)');
          grad.addColorStop(1, 'rgba(255,46,99,0)');
          ctx.beginPath();
          ctx.arc(s.x, s.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        });

        // Heart label
        ctx.fillStyle = 'rgba(255,180,200,0.9)';
        ctx.font = `italic 16px "Cormorant Garamond", serif`;
        ctx.textAlign = 'center';
        ctx.fillText('❤ Sanket × Rishita Ji ❤', W / 2, H * 0.82);
      } else {
        // Glow lines near cursor
        const nearStars = STARS.filter((s) => {
          const dx = s.x * W - mx;
          const dy = s.y * H - my;
          return Math.sqrt(dx * dx + dy * dy) < radius;
        });

        nearStars.forEach((a) => {
          nearStars.forEach((b) => {
            if (a === b) return;
            const ax = a.x * W, ay = a.y * H;
            const bx = b.x * W, by = b.y * H;
            const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
            if (dist < 100) {
              const alpha = (1 - dist / 100) * 0.7;
              ctx.strokeStyle = `rgba(255, 46, 99, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.shadowColor = '#ff2e63';
              ctx.shadowBlur = 6;
              ctx.beginPath();
              ctx.moveTo(ax, ay);
              ctx.lineTo(bx, by);
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
          });
        });

        // Bright stars near cursor
        nearStars.forEach((s) => {
          const sx = s.x * W, sy = s.y * H;
          ctx.beginPath();
          ctx.arc(sx, sy, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,150,180,0.9)';
          ctx.fill();
        });
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [revealed]);

  function handleMouseMove(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handleTouchMove(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    mouseRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
  }

  return (
    <div className="min-h-screen py-16 px-4 chapter-enter">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="chapter-label mb-3">Chapter VI</p>
        <h2 className="type-hero gradient-text mb-4">The Constellation Canvas</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic', marginBottom: '24px' }}>
          {revealed
            ? 'The stars have revealed a heart — just for you, Rishita Ji 💫'
            : 'Move your cursor across the night sky — something is hidden in the stars…'}
        </p>
        <button
          onClick={() => { setRevealed(!revealed); setHint(false); }}
          className="px-10 py-4 rounded-full font-playfair transition-all duration-300"
          style={{
            fontSize: '18px',
            fontWeight: '600',
            background: revealed
              ? 'rgba(255,46,99,0.15)'
              : 'linear-gradient(135deg, #ff2e63, #d81b60)',
            border: '1.5px solid rgba(255,46,99,0.5)',
            color: revealed ? '#d81b60' : 'white',
            boxShadow: revealed ? 'none' : '0 6px 24px rgba(255,46,99,0.4)',
          }}
        >
          {revealed ? '✨ Hide the Heart' : '💫 Reveal the Constellation'}
        </button>
      </div>

      {/* Canvas */}
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #060010 0%, #0d0020 50%, #080015 100%)',
            border: '1px solid rgba(255,46,99,0.2)',
            boxShadow: '0 0 60px rgba(255,46,99,0.1)',
            height: '500px',
          }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          />

          {!revealed && (
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
              <p className="text-pink-400/40 text-sm font-cormorant italic animate-pulse">
                ✦ Move your cursor to connect the stars ✦
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Poem */}
      <div className="text-center mt-12 max-w-xl mx-auto">
        <div className="glass-warm rounded-3xl p-10">
          <p className="type-subtitle" style={{ color: '#2d0020', lineHeight: '1.5', marginBottom: '12px' }}>
            "I would rearrange every constellation<br />
            just to write your name in the sky,<br />
            Rishita Ji."
          </p>
          <p className="type-caption">— Sanket Mathur</p>
        </div>
      </div>
    </div>
  );
}
