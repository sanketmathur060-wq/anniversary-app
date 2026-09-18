import { useState } from 'react';
import { Star, Play, Pause, SkipBack, Heart } from 'lucide-react';

const songs = [
  { title: 'Tum Hi Ho', artist: 'Arijit Singh', vibe: 'Our anthem — every note is us.' },
  { title: 'Kal Ho Naa Ho', artist: 'Sonu Nigam', vibe: 'For every day we are grateful for.' },
  { title: 'Raabta', artist: 'Arijit Singh', vibe: 'Connected across lifetimes.' },
  { title: 'Kesariya', artist: 'Arijit Singh', vibe: 'My love is as vast as the ocean.' },
];

export default function CassettePlayer() {
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [progress, setProgress] = useState(35);

  const song = songs[currentSong];

  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter VIII</p>
        <h2 className="type-hero gradient-text mb-4">Retro Cassette Player</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          The soundtrack of us 🎵
        </p>
      </div>

      {/* Cassette Deck */}
      <div
        className="rounded-3xl p-8 mx-auto"
        style={{
          background: 'linear-gradient(145deg, #2a1a0a 0%, #1a0f05 100%)',
          border: '2px solid rgba(212,175,55,0.4)',
          boxShadow: '0 0 50px rgba(212,175,55,0.1), 0 10px 40px rgba(0,0,0,0.6)',
          maxWidth: '460px',
        }}
      >
        {/* Deck label */}
        <div className="text-center mb-6">
          <p className="font-playfair text-gold text-xs tracking-[0.3em] uppercase opacity-70">
            ✦ Love Tape Mk. II ✦
          </p>
        </div>

        {/* Cassette window */}
        <div
          className="rounded-2xl p-5 mb-6 relative"
          style={{
            background: 'linear-gradient(135deg, #0d0806 0%, #1a120a 100%)',
            border: '1px solid rgba(212,175,55,0.3)',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          {/* Tape label */}
          <div
            className="rounded-xl p-4 mb-4"
            style={{ background: 'linear-gradient(135deg, #fff0f3 0%, #ffe3e6 100%)' }}
          >
            <p className="font-playfair text-center text-sm font-bold text-pink-800">
              ♥ SANKET × RISHITA JI ♥
            </p>
            <p className="text-center text-pink-600/70 text-xs mt-1 font-cormorant italic">
              Our Song Collection · Sep 2024
            </p>
          </div>

          {/* Reels */}
          <div className="flex justify-around items-center py-3">
            {[0, 1].map((r) => (
              <div key={r} className="relative">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center
                    ${playing ? 'reel-spin' : ''}`}
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #4a3a2a, #1a0f05)',
                    border: '2px solid rgba(212,175,55,0.4)',
                    boxShadow: '0 0 10px rgba(212,175,55,0.2)',
                  }}
                >
                  {/* Spokes */}
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <div
                      key={angle}
                      className="absolute w-0.5 h-6 rounded-full"
                      style={{
                        background: 'rgba(212,175,55,0.5)',
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'center bottom',
                        bottom: '50%',
                        left: '50%',
                        marginLeft: '-1px',
                      }}
                    />
                  ))}
                  <div
                    className="w-5 h-5 rounded-full"
                    style={{ background: 'rgba(212,175,55,0.7)', zIndex: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tape slit */}
          <div
            className="h-1 rounded-full mx-4 mt-2"
            style={{ background: 'linear-gradient(90deg, #8b6914, #d4af37, #8b6914)' }}
          />
        </div>

        {/* Song info */}
        <div className="text-center mb-5">
          <h3 className="type-subtitle" style={{ color: '#2d0020', marginBottom: '4px' }}>{song.title}</h3>
          <p className="type-caption">{song.artist}</p>
        </div>

        <p className="type-body" style={{ color: '#6b1040', textAlign: 'center', marginBottom: '16px' }}>
          {song.vibe}
        </p>

        {/* Progress bar */}
        <div
          className="h-1.5 rounded-full mb-4 cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.1)' }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = ((e.clientX - rect.left) / rect.width) * 100;
            setProgress(Math.round(pct));
          }}
        >
          <div
            className="h-full rounded-full transition-all duration-300 relative"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #ff2e63, #d81b60)',
            }}
          >
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"
              style={{ boxShadow: '0 0 8px rgba(255,46,99,0.8)' }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setCurrentSong((p) => (p - 1 + songs.length) % songs.length)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-pink-900/30 transition-colors"
          >
            <SkipBack size={16} color="#ff9eb5" />
          </button>

          <button
            onClick={() => setPlaying(!playing)}
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #ff2e63, #d81b60)',
              boxShadow: playing
                ? '0 0 30px rgba(255,46,99,0.8)'
                : '0 0 15px rgba(255,46,99,0.4)',
            }}
          >
            {playing
              ? <Pause size={24} color="white" fill="white" />
              : <Play size={24} color="white" fill="white" className="ml-1" />}
          </button>

          <button
            onClick={() => setCurrentSong((p) => (p + 1) % songs.length)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-pink-900/30 transition-colors"
          >
            <SkipBack size={16} color="#ff9eb5" className="rotate-180" />
          </button>
        </div>

        {playing && (
          <p className="text-center text-pink-400/60 text-xs mt-4 font-cormorant italic animate-pulse">
            ♪ Playing in our hearts ♪
          </p>
        )}
      </div>

      {/* Song list */}
      <div className="mt-8 space-y-3">
        {songs.map((s, i) => (
          <button
            key={i}
            onClick={() => { setCurrentSong(i); setPlaying(true); }}
            className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-200
              ${currentSong === i ? 'glass-pink pink-glow' : 'glass hover:bg-pink-900/20'}`}
          >
            <span className="text-xl">{currentSong === i && playing ? '♪' : '♩'}</span>
            <div className="text-left">
              <p className="type-body" style={{ color: currentSong === i ? '#2d0020' : '#6b1040', fontWeight: currentSong === i ? '700' : '500', margin: 0, lineHeight: '1.4' }}>
                {s.title}
              </p>
              <p className="type-caption">{s.artist}</p>
            </div>
            {currentSong === i && <Heart size={16} fill="#ff2e63" color="#ff2e63" className="ml-auto" />}
          </button>
        ))}
      </div>
    </div>
  );
}
