import { Star, Heart } from 'lucide-react';

const vows = [
  {
    icon: '🛡️',
    title: 'I Vow to Be Your Safe Space',
    text: `Rishita Ji, I vow that with me, you will never have to perform. Never have to be more than you are, or less than you deserve. You will never need to hide your fears, apologize for your emotions, or shrink yourself to fit into the space I provide. I will expand to meet you — always. My arms, my patience, my attention — all of it is yours. You are safe here. You will always be safe with me.`,
  },
  {
    icon: '🗣️',
    title: 'I Vow to Communicate Always',
    text: `I vow to speak to you — not at you, not around you. When something troubles me, I will tell you. When I am proud of you, I will say it out loud. When I am afraid, I will trust you enough to say so. I promise that our relationship will be built on words spoken honestly and received with love. No stone will stay unturned. No distance will be allowed to grow in silence between us.`,
  },
  {
    icon: '💎',
    title: 'I Vow to Protect Your Trust',
    text: `The day you trusted me with your heart, you gave me something that has no equal in this world. I vow to handle it with the care it deserves — every single day, not just the easy ones. Your trust in me is sacred. I will never give you reason to doubt it. I will be who I say I am, do what I say I will do, and be there when you need me — without exception.`,
  },
  {
    icon: '🌙',
    title: 'I Vow to See You — Truly See You',
    text: `Not the version of you that the world sometimes gets, but the whole of you — the parts you show easily and the parts you guard carefully. I vow to look for you, to pay attention, to notice when something has shifted in you even before you find the words for it. You deserve to be known, not just loved. I promise to know you — and to keep learning you, every year we have.`,
  },
  {
    icon: '🌸',
    title: 'I Vow to Never Stop Choosing You',
    text: `Love is not just a feeling — it is a daily decision. And I vow that every day, in the ordinary and the extraordinary, in the good times and the ones that test us, I will choose you. Not because I have to, but because there is no version of a life I want that does not include you in it. You are my first choice. My only choice. My always choice.`,
  },
  {
    icon: '🤝',
    title: 'I Vow to Walk Beside You',
    text: `Not in front, not behind — beside you. I will celebrate your victories as loudly as if they were my own, and I will sit with you in your hard moments without trying to rush you through them. Your journey is not mine to direct — only to walk alongside. Whatever you face, you will not face it alone. Not while I am here. Not ever.`,
  },
  {
    icon: '🌟',
    title: 'I Vow to Keep Growing With You',
    text: `I know that we will change — both of us — over the years we share. I vow to grow with you, not away from you. I will keep learning who you are becoming, and I will show you the same honesty in return. This relationship will be a living thing that we both tend to — with attention, with patience, with love. I commit not only to who you are today, but to every version of you yet to come.`,
  },
  {
    icon: '💞',
    title: 'I Vow to Love You — Fully and Without Condition',
    text: `Not a part of you. Not a convenient version of you. All of you — your light and your uncertainty, your laughter and your quiet sadness, your dreams and your fears. I vow to love you without keeping score, without conditions, without an expiry date. My love for you, Rishita Ji, is not something I intend to ever take back.`,
  },
];

export default function ManuscriptVows() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter IV</p>
        <h2 className="type-hero gradient-text mb-4">Manuscript Vows & Trust</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          Written from the heart — eight promises for Rishita Ji, from Sanket Mathur
        </p>
      </div>

      {/* Vows */}
      <div className="space-y-6">
        {vows.map((vow, i) => (
          <div
            key={i}
            className="parchment-bg rounded-3xl overflow-hidden"
            style={{
              border: '1px solid rgba(212,175,55,0.3)',
              boxShadow: '0 4px 24px rgba(212,175,55,0.1), 0 0 40px rgba(255,46,99,0.05)',
            }}
          >
            <div className="p-7">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0 mt-1">{vow.icon}</span>
                <div className="flex-1">
                  <h3 className="type-subtitle" style={{ fontSize: '1.6rem', color: '#c41c6e', marginBottom: '12px' }}>
                    {vow.title}
                  </h3>
                  <p className="type-body" style={{ color: '#5a2a10' }}>
                    {vow.text}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Signature */}
      <div className="text-center mt-16">
        <div className="glass-warm rounded-3xl p-10 inline-block max-w-xl">
          <p className="type-subtitle" style={{ color: '#2d0020', marginBottom: '8px' }}>
            "I meant every single word."
          </p>
          <p className="type-caption mb-6">
            — Sanket Mathur
          </p>
          <div className="h-px bg-amber-400/30 mb-4" />
          <p className="font-playfair text-amber-800/60 text-sm">With every piece of my heart,</p>
          <p className="font-playfair italic text-xl text-amber-900/80 mt-1">Sanket Mathur</p>
          <p className="text-amber-600/50 text-xs mt-2 font-cormorant">September 24, 2026</p>
        </div>
      </div>
    </div>
  );
}
