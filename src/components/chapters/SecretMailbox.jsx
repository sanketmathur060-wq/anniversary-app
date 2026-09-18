import { useState } from 'react';
import { Star, Mail } from 'lucide-react';

const letters = [
  {
    id: 1,
    label: 'Letter of First Words',
    from: 'Sanket',
    subject: 'What I Wanted to Say That First Day',
    content: `My dearest Rishita Ji,

There are things I felt that very first day that I didn't say — because some feelings are too large for the moment in which they arrive. They need a little time to settle, to find their shape.

What I wanted to tell you then, and what I am telling you now: the very first time you laughed at something I said, I thought — this. This is what I want. Not something dramatic or cinematic. Just this. Your laughter, near me.

I am writing this so you know that from the very beginning, before I knew how to name what I felt, I knew that you were someone important. Someone rare. Someone I did not want to let slip out of my day without finding a reason to stay near.

Thank you for giving me that reason, and a thousand more since.

All of my love,
Sanket Mathur`,
  },
  {
    id: 2,
    label: 'Letter of Gratitude',
    from: 'Sanket',
    subject: 'For Everything You\'ve Given Me',
    content: `My Rishita Ji,

I have been trying to count all the things I am grateful to you for, and I have realised I will never finish this list. So let me start with the most important ones.

Thank you for your patience — not the performative kind, but the deep, quiet patience of someone who genuinely gives people the time they need.

Thank you for your honesty. For saying what you actually mean. For never making me guess where I stand with you.

Thank you for every time you stayed. When it would have been easier to leave the conversation, you stayed. That is not a small thing. That is everything.

Thank you for the way you look at me sometimes — like I am something worth looking at. I hold onto those moments.

Thank you for existing at the exact time in my life that you did. The timing of you, Rishita Ji, was perfect.

Always yours,
Sanket`,
  },
  {
    id: 3,
    label: 'Letter for the Hard Days',
    from: 'Sanket',
    subject: 'Read This When Things Feel Heavy',
    content: `Rishita Ji,

I am writing this for the days when the world feels too loud, or too quiet — when things feel uncertain and difficult and you are not sure which direction is forward.

On those days: I am here. Not theoretically. Not in principle. I am here in the practical, tangible, real sense of that word. You can reach out. You are allowed to lean. I will not buckle.

I also want you to know: whatever you are going through, it does not diminish you. Hard days are part of every good story — even ours. They are the chapters that make the rest of the book matter.

And when they pass — and they always pass — I will still be here. On the other side, with something warm for you, and no questions asked.

You are stronger than your hardest day, Rishita Ji. And on the days you forget that, I will remember it for both of us.

With unwavering love,
Sanket Mathur`,
  },
  {
    id: 4,
    label: 'Love Letter — Two Years',
    from: 'Sanket',
    subject: 'On Our Two-Year Anniversary',
    content: `My dearest, beloved Rishita Ji,

Two years.

I have been sitting with those two words for a while, trying to find ones that do justice to what they contain. Two years of conversations I never wanted to end. Two years of your laugh becoming the thing I most want to hear in a day. Two years of learning you, in the most wonderful way one person can learn another.

If I could write a letter to myself two years ago — standing at the beginning of this, slightly uncertain, hoping — I would say only: it is everything you hoped it would be. And more.

You have made the past two years of my life the most meaningful, most loved, most deeply felt I have ever experienced. And I intend to spend the next two, and the ten after that, and all the time we're given, making sure you feel even a fraction of what you've given me.

Happy anniversary, Rishita Ji. Thank you for two extraordinary years. Thank you for you.

Completely and endlessly yours,
Sanket Mathur
September 24, 2026`,
  },
];

function Envelope({ letter, isOpen, onToggle }) {
  return (
    <div className="flex flex-col items-center">
      {/* Envelope */}
      <div
        className={`cursor-pointer transition-all duration-300 pink-glow-hover w-full`}
        onClick={onToggle}
      >
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            background: isOpen
              ? 'linear-gradient(135deg, #ff2e63 0%, #d81b60 100%)'
              : 'linear-gradient(135deg, #ff6b9d 0%, #ff2e63 100%)',
            boxShadow: isOpen
              ? '0 0 40px rgba(255,46,99,0.5), 0 8px 30px rgba(0,0,0,0.3)'
              : '0 4px 15px rgba(255,46,99,0.2)',
            minHeight: '80px',
          }}
        >
          {/* Flap */}
          <div
            className="absolute top-0 left-0 right-0 transition-transform duration-500 origin-top"
            style={{
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              background: 'linear-gradient(135deg, #d81b60, #b71c1c)',
              height: '45px',
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
            }}
          />

          <div className="flex items-center justify-center py-8 px-6">
            <div className="text-center">
              <Mail size={28} color="white" className="mx-auto mb-2 opacity-90" />
              <p className="text-white font-playfair text-sm font-semibold">{letter.label}</p>
              <p className="text-pink-200/70 text-xs mt-1 font-cormorant">{letter.subject}</p>
              <p className="text-white/60 text-xs mt-2 font-cormorant italic">
                {isOpen ? 'Click to seal ↑' : 'Click to open ↓'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Letter content */}
      {isOpen && (
        <div
          className="w-full letter-unfold mt-0"
          style={{ transformOrigin: 'top' }}
        >
          <div
            className="parchment-bg rounded-b-2xl p-8"
            style={{ border: '1px solid rgba(212,175,55,0.3)', borderTop: 'none' }}
          >
            <div className="max-w-xl mx-auto">
              <p className="text-amber-700/60 text-xs font-cormorant tracking-widest uppercase mb-4 text-right">
                From: {letter.from} | {letter.subject}
              </p>
              <div className="h-px bg-amber-400/30 mb-6" />
              <pre className="type-body whitespace-pre-wrap" style={{ color: '#4a1535' }}>
                {letter.content}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SecretMailbox() {
  const [openLetter, setOpenLetter] = useState(null);

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter V</p>
        <h2 className="type-hero gradient-text mb-4">The Secret Mailbox</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic' }}>
          Private letters written just for you, Rishita Ji — click an envelope to open it 💌
        </p>
      </div>

      {/* Envelopes */}
      <div className="space-y-4">
        {letters.map((letter) => (
          <Envelope
            key={letter.id}
            letter={letter}
            isOpen={openLetter === letter.id}
            onToggle={() => setOpenLetter(openLetter === letter.id ? null : letter.id)}
          />
        ))}
      </div>
    </div>
  );
}
