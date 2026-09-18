import { useState, useEffect } from 'react';
import { Star, Heart } from 'lucide-react';

const START_DATE = new Date('2024-09-24T00:00:00');

function pad(n) {
  return String(n).padStart(2, '0');
}

function getElapsed() {
  const now = new Date();
  
  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  let days = now.getDate() - START_DATE.getDate();
  let hours = now.getHours() - START_DATE.getHours();
  let minutes = now.getMinutes() - START_DATE.getMinutes();
  let seconds = now.getSeconds() - START_DATE.getSeconds();

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }
  if (minutes < 0) {
    hours--;
    minutes += 60;
  }
  if (hours < 0) {
    days--;
    hours += 24;
  }
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalSeconds = Math.floor((now - START_DATE) / 1000);
  const totalDays = Math.floor(totalSeconds / 86400);

  return { years, months, days, hours, minutes, seconds, totalDays };
}

function FlipUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-2"
        style={{
          background: 'linear-gradient(145deg, #2d0020 0%, #1a0010 100%)',
          border: '1px solid rgba(255,46,99,0.4)',
          boxShadow: '0 0 20px rgba(255,46,99,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Top half */}
        <div
          className="absolute top-0 left-0 right-0 bottom-1/2 rounded-t-2xl overflow-hidden flex items-end justify-center pb-1"
          style={{ background: 'rgba(0,0,0,0.15)', borderBottom: '1px solid rgba(255,46,99,0.15)' }}
        >
          <span className="font-playfair text-3xl md:text-4xl font-bold gradient-text leading-none">
            {pad(value)}
          </span>
        </div>
        {/* Bottom half */}
        <div className="absolute bottom-0 left-0 right-0 top-1/2 rounded-b-2xl overflow-hidden flex items-start justify-center pt-1">
          <span className="font-playfair text-3xl md:text-4xl font-bold gradient-text leading-none">
            {pad(value)}
          </span>
        </div>
      </div>
      <p className="chapter-label mt-3">{label}</p>
    </div>
  );
}

export default function TimeCounter() {
  const [elapsed, setElapsed] = useState(getElapsed());

  useEffect(() => {
    const interval = setInterval(() => setElapsed(getElapsed()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter X</p>
        <h2 className="type-hero gradient-text mb-4">Time Together</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          Every second with you is precious, Rishita Ji ⏰
        </p>
        <p className="type-caption mt-2">Since September 24, 2024</p>
      </div>

      {/* Main counter */}
      <div
        className="rounded-3xl p-8 mb-8"
        style={{
          background: 'linear-gradient(135deg, rgba(255,46,99,0.08) 0%, rgba(45,0,32,0.6) 100%)',
          border: '1px solid rgba(255,46,99,0.25)',
          boxShadow: '0 0 60px rgba(255,46,99,0.1)',
        }}
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <FlipUnit value={elapsed.years} label="Years" />
          <div className="flex items-center text-pink-500 text-3xl font-bold mt-6">:</div>
          <FlipUnit value={elapsed.months} label="Months" />
          <div className="flex items-center text-pink-500 text-3xl font-bold mt-6">:</div>
          <FlipUnit value={elapsed.days} label="Days" />
          <div className="flex items-center text-pink-500 text-3xl font-bold mt-6">:</div>
          <FlipUnit value={elapsed.hours} label="Hours" />
          <div className="flex items-center text-pink-500 text-3xl font-bold mt-6">:</div>
          <FlipUnit value={elapsed.minutes} label="Minutes" />
          <div className="flex items-center text-pink-500 text-3xl font-bold mt-6">:</div>
          <FlipUnit value={elapsed.seconds} label="Seconds" />
        </div>
      </div>

      {/* Fun stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Total Days Together', value: elapsed.totalDays.toLocaleString() },
          { label: 'Total Hours', value: (elapsed.totalDays * 24 + elapsed.hours).toLocaleString() },
          { label: 'Heartbeats Shared', value: `~${(elapsed.totalDays * 100000).toLocaleString()}` },
          { label: 'Smiles You Gave Me', value: 'Countless 😊' },
          { label: 'Times I Chose You', value: `${elapsed.totalDays} & counting` },
          { label: 'Love Level', value: '∞ / 10 💗' },
        ].map((stat, i) => (
          <div key={i} className="glass rounded-3xl p-6 text-center pink-glow-hover">
            <p className="font-playfair font-bold gradient-text mb-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>{stat.value}</p>
            <p className="type-caption">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="text-center mt-12">
        <div className="glass-warm rounded-3xl p-10 inline-block max-w-xl">
          <p className="type-subtitle" style={{ color: '#2d0020', lineHeight: '1.5', marginBottom: '12px' }}>
            "Time moves differently with you.<br />
            Every second feels like something worth keeping."
          </p>
          <p className="type-caption">— Sanket Mathur</p>
        </div>
      </div>
    </div>
  );
}
