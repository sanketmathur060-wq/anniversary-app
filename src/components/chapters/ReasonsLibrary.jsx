import { useState } from 'react';
import { Heart, Star } from 'lucide-react';

const reasons = [
  "Because the way you read with such complete absorption into another world tells me you have the most beautifully vast inner life.",
  "Because your laugh — that spontaneous, unguarded laugh — is literally my favourite sound in the entire universe.",
  "Because you wear glasses and you are ten times more gorgeous with them than without.",
  "Because you have an extraordinary capacity for kindness that you sometimes don't even notice yourself.",
  "Because when you focus on something, the whole world could fall away and you wouldn't flinch. That singular focus is breathtaking.",
  "Because the way you hold your own opinions with quiet confidence makes me endlessly admire your inner strength.",
  "Because you make even the most ordinary moments — a metro station, a dark theater — feel like something precious.",
  "Because you can hold my hand and make every worry I have dissolve without saying a single word.",
  "Because your softness is not weakness — it is the most beautiful and rare kind of strength.",
  "Because you show up, fully and honestly, every single time.",
  "Because the image of you in your soft pink suit at the metro station is a painting I carry in my heart.",
  "Because you trusted me enough to let me in, and I promise I will always protect that trust.",
  "Because you're genuinely brilliant in a way that makes me want to be smarter and better every day.",
  "Because when you wear your black jacket and your glasses, you look like the most effortlessly stunning person I've ever seen.",
  "Because you find beauty and meaning in small things — in books, in art, in quiet moments.",
  "Because you are curious about the world in a way that makes being around you endlessly interesting.",
  "Because even in silly Lego / block universe versions, I know our pieces would find each other.",
  "Because you have made me feel safer than I ever thought I could feel with another person.",
  "Because you are fiercely loyal and quietly devoted in a way that means everything to me.",
  "Because your way of caring for people is thorough and thoughtful and utterly without performance.",
  "Because you will sit beside me in the dark of a movie theater and that is more than enough.",
  "Because when the world gets loud, you are my quiet.",
  "Because you've never once made me feel like I needed to be anything other than myself with you.",
  "Because you process things deeply before you speak, and every word you say carries real weight.",
  "Because you are beautiful — not just on the outside, but in the way your character glows.",
  "Because you can make the simplest moments feel cinematic just by being in them.",
  "Because your hands are the safest place I have ever been.",
  "Because you are someone who would stand at a museum mirror and see only the wonder of it.",
  "Because you make me want to write entire books — this one, for instance — just to come close to describing you.",
  "Because you are real and honest and not a single thing about you is pretend.",
  "Because you notice details other people walk right past.",
  "Because you have the kind of grace that doesn't come from trying — it just comes from being you.",
  "Because you've given me a feeling of home that no house ever could.",
  "Because every single time I see your name light up on my phone, I smile before I even open it.",
  "Because you make silence between us feel like a conversation.",
  "Because your version of caring is the most genuine I've ever experienced.",
  "Because you are endlessly patient with me when I need it most.",
  "Because when you're excited about something, the entire room lights up.",
  "Because you remember the small things — and that tells me everything about the size of your heart.",
  "Because you've been exactly who I needed every step of the way.",
  "Because you're the person I want to tell my best news to, always.",
  "Because even a stolen afternoon with you is better than any grand event without you.",
  "Because your dedication to the things and people you care about is one of the most admirable things I've ever seen.",
  "Because you have taught me what it feels like to be truly, completely seen.",
  "Because you are both my greatest adventure and my deepest peace, somehow at once.",
  "Because you've never asked me to shrink or simplify myself — you welcome all of it.",
  "Because your eyes carry a warmth that I could live in forever.",
  "Because the world is genuinely better and more beautiful because you are in it.",
  "Because you bring out a version of me I am proud of — braver, softer, more open.",
  "Because I fall a little more in love with you every single day, without exception.",
  "Because you read the room in ways that show a depth of emotional intelligence I deeply respect.",
  "Because when you hold a book, there's a reverence in your hands that moves me every time.",
  "Because your instincts about people are usually exactly right.",
  "Because you would gladly sit on a giant chair in a museum and be delighted by it.",
  "Because no matter what kind of day I've had, hearing your voice makes it better.",
  "Because the way you look at the world — with wonder and with care — is a gift I don't take lightly.",
  "Because you are exactly as beautiful on your most ordinary days as you are on the extraordinary ones.",
  "Because you hold space for my feelings without making me feel like a burden. Ever.",
  "Because you have the kind of loyalty that is rare and precious and I treasure it completely.",
  "Because you make me want to be a better, more tender, more attentive person.",
  "Because you've made September 24 the most meaningful date of my life.",
  "Because every hand-held flower, every dark theater, every metro station memory — all of it, with you.",
  "Because you embrace joy without apology.",
  "Because you are thoughtful in a way that runs right down to your bones.",
  "Because you don't just say you care — you demonstrate it, quietly and consistently.",
  "Because you've never once asked me to be less than I am.",
  "Because our conversations always leave me wanting more.",
  "Because you've helped me understand what love that is safe and grounded actually feels like.",
  "Because you are my person — in every possible definition of that phrase.",
  "Because the way you look in your glasses doing something you love is the most beautiful sight I know.",
  "Because you are genuinely, completely irreplaceable.",
  "Because even my most private thoughts have you in them.",
  "Because being loved by you feels like finally arriving somewhere I've been trying to find my whole life.",
  "Because your smile — that real, full, unguarded smile — is the single most precious thing I have ever seen.",
  "Because you are someone worth writing every chapter for.",
  "Because with you, I am not afraid of forever.",
  "Because you have the most extraordinary ability to make me feel calm just by being near.",
  "Because your kindness extends to strangers, to animals, to the smallest beings — and that tells me everything.",
  "Because you care about things deeply and unashamedly.",
  "Because your presence is the single greatest gift any day can have.",
  "Because you make me feel, for the very first time, that I am exactly where I'm supposed to be.",
  "Because you are soft when the world asks you to be hard, and that takes incredible courage.",
  "Because you are endlessly worth celebrating — every single day, not just today.",
  "Because you wear your heart in the most quietly elegant way.",
  "Because every version of my future looks better because you are in it.",
  "Because you are the reason I write. The reason I try. The reason I hope.",
  "Because you are the most extraordinary person I have ever had the privilege of loving.",
  "Because choosing you, every day, is the easiest choice I have ever made.",
  "Because this list could go on forever, and it would still not be enough to capture what you mean to me.",
  "Because you exist, and that alone is enough to make everything worth it.",
  "Because when you're with me, the whole world makes sense.",
  "Because in a lifetime of moments, the ones with you are the ones I'll always reach for first.",
  "Because you are both my greatest story and my safest home.",
  "Because every single day I wake up grateful — genuinely, deeply grateful — that you chose me too.",
  "Because you always know exactly how to make me smile even on the hardest days.",
  "Because your presence is the most comforting thing I have ever known.",
  "Because you see the best in me even when I struggle to see it myself.",
  "Because building a life with you is my favourite dream.",
  "Because you are, simply and completely, everything.",
  "Because I love you, Rishita Ji — more than any of these words, or all of them together, could ever say.",
];

export default function ReasonsLibrary() {
  const [revealed, setRevealed] = useState({});
  const [search, setSearch] = useState('');

  const filtered = reasons.filter((r, i) =>
    r.toLowerCase().includes(search.toLowerCase()) || String(i + 1).includes(search)
  );

  return (
    <div className="min-h-screen py-16 px-4 max-w-6xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="chapter-label mb-3">Chapter II</p>
        <h2 className="font-playfair gradient-text" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', marginBottom: '16px' }}>The 100 Reasons Library</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="font-cormorant" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', color: '#7a2050', fontStyle: 'italic', marginBottom: '24px' }}>
          100 reasons why Rishita Ji is loved, cherished, and adored — by Sanket Mathur
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search reasons or enter a number..."
            className="w-full px-5 py-3 rounded-full glass border border-pink-300 focus:outline-none font-cormorant"
            style={{ fontSize: '17px', color: '#2d0020', background: 'rgba(255,255,255,0.9)' }}
          />
        </div>
      </div>

      {/* Count badge */}
      <div className="text-center mb-8">
        <span className="glass-pink px-5 py-2 rounded-full font-cormorant" style={{ fontSize: '15px', color: '#6b1040' }}>
          {filtered.length} reasons found
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((reason, idx) => {
          const realIdx = reasons.indexOf(reason);
          const isRevealed = revealed[realIdx];

          return (
            <div
              key={realIdx}
              onClick={() => setRevealed((prev) => ({ ...prev, [realIdx]: !prev[realIdx] }))}
              className={`relative cursor-pointer rounded-2xl p-5 transition-all duration-300 pink-glow-hover
                ${isRevealed ? 'glass-pink' : 'glass'}`}
              style={{
                border: isRevealed ? '1px solid rgba(255,46,99,0.4)' : '1px solid rgba(255,46,99,0.15)',
              }}
            >
              {/* Number badge */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-playfair"
                  style={{ background: 'linear-gradient(135deg, #ff2e63, #d81b60)' }}
                >
                  {realIdx + 1}
                </span>
                {isRevealed && <Heart size={12} fill="#ff2e63" color="#ff2e63" />}
              </div>

              {/* Reason text */}
              <p className="font-cormorant leading-relaxed transition-all duration-300"
                style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', color: isRevealed ? '#2d0020' : 'rgba(80,20,50,0.55)', lineHeight: '1.85' }}>
                {reason}
              </p>

              {!isRevealed && (
                <p className="font-cormorant italic mt-2" style={{ fontSize: '13px', color: 'rgba(180,50,100,0.55)' }}>Click to reveal ♥</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="text-center mt-12">
        <div className="glass-warm rounded-2xl p-6 inline-block max-w-xl">
          <p className="font-playfair italic" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', color: '#3d1030', marginBottom: '8px' }}>
            "And that's still only a fraction of it."
          </p>
          <p className="font-cormorant" style={{ fontSize: '15px', color: '#a82b5e' }}>
            — Sanket Mathur
          </p>
        </div>
      </div>
    </div>
  );
}
