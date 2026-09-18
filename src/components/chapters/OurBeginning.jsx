import { Heart, Star } from 'lucide-react';

export default function OurBeginning() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter I</p>
        <h2 className="type-hero gradient-text mb-4">Our Beginning</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050' }}>
          September 2024 — The beginning of everything
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-5 mb-10">
        {[
          { date: 'September 9, 2024', icon: '🌸', label: 'The First Meeting', detail: 'I was wearing a blue shirt and jeans. This is the day you first saw me, though I didn\'t see you yet.' },
          { date: 'September 24, 2024', icon: '💬', label: 'The First Talk', detail: 'The day we started talking — and something quietly changed.' },
          { date: 'September 26, 2024', icon: '💫', label: 'The First Real Conversation', detail: 'The first proper conversation. I did not know then how important you would become.' },
          { date: 'October 3, 2024', icon: '❤️', label: 'I Said "I Love You"', detail: 'The day I told you I loved you for the first time. I meant every word.' },
          { date: 'October 9, 2024', icon: '💗', label: 'You Said "I Love You"', detail: 'The day you said it back. I will never forget how that felt.' },
          { date: 'October 10, 2024', icon: '💕', label: 'Confession Day', detail: 'The day we made it real. Our confession. Our beginning, made official.' },
          { date: 'October 27, 2024', icon: '🌹', label: 'Our First Date', detail: 'The first time we stepped into something that was purely ours.' },
          { date: 'October 30, 2024', icon: '🌸', label: 'Our Second Date', detail: 'So soon after the first — because once was not nearly enough.' },
          { date: 'December 3, 2024', icon: '🧥', label: 'The Hoodie', detail: 'I gave you my hoodie. It makes me so happy to see you wearing it.' },
          { date: 'December 12, 2024', icon: '💋', label: 'Our First Kiss', detail: 'A private, significant, irreplaceable moment. One I carry carefully.' },
          { date: 'February 2, 2025', icon: '📚', label: 'The Book Fair — She Said Yes Again', detail: 'We went to the book fair. And on this day, you said yes to me again. Save the date.' },
        ].map((event, i) => (
          <div
            key={i}
            className="glass rounded-2xl px-6 py-5 pink-glow-hover flex gap-5 items-start"
          >
            <span className="text-3xl flex-shrink-0">{event.icon}</span>
            <div>
              <p className="chapter-label" style={{ marginBottom: '6px' }}>
                {event.date}
              </p>
              <h3 className="type-subtitle" style={{ fontSize: '1.4rem', color: '#2d0020', fontStyle: 'normal', marginBottom: '8px' }}>
                {event.label}
              </h3>
              <p className="type-body" style={{ color: '#4a1535' }}>
                {event.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Story sections */}
      <div className="space-y-6">
        {[
          {
            icon: '🌸',
            title: 'The Day That Started Everything',
            text: `September 9, 2024. I was wearing a blue shirt and jeans — the most ordinary thing about what would turn out to be a quietly extraordinary day. I did not know then that meeting you would change the entire shape of everything that came after. There was nothing dramatic about it. Just the ordinary beginning of something that would eventually become the most important thing in my life.`,
          },
          {
            icon: '💫',
            title: 'When You Became My Safe Place',
            text: `There is a specific kind of peace that comes only from being near someone who genuinely sees you. From the first real conversation, something in me relaxed that I had been holding tense for a long time. You are my safe place, Rishita Ji — not because the world is kinder when you are in it, but because I am kinder to myself when I am with you.`,
          },
          {
            icon: '🌹',
            title: 'The Dates We Will Always Have',
            text: `Our first date on October 27. Our second on October 30. The book fair in February, where you said yes to me again. These are the pages of us that I return to. Not because the days were perfect, but because you were in them, and that has always been enough.`,
          },
          {
            icon: '✨',
            title: 'What I Know For Certain',
            text: `I know the exact date I first met you. I know the date I first told you I loved you, and the date you said it back. I know what it felt like to give you my hoodie and see you wearing it. These details are not small things to me. They are the architecture of something I intend to keep building, with you, for as long as you will let me.`,
          },
        ].map((section, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-7 pink-glow-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{section.icon}</span>
              <h3 className="type-subtitle" style={{ fontSize: '1.6rem', color: '#2d0020', fontStyle: 'normal' }}>
                {section.title}
              </h3>
            </div>
            <p className="type-body" style={{ color: '#4a1535' }}>
              {section.text}
            </p>
          </div>
        ))}
      </div>

      {/* Closing quote */}
      <div className="mt-16 text-center">
        <div className="glass-warm rounded-3xl p-10 inline-block max-w-2xl">
          <p className="type-subtitle" style={{ color: '#2d0020', marginBottom: '14px', lineHeight: '1.4' }}>
            "In a universe of eight billion people,<br />I met you on a September afternoon."
          </p>
          <p className="type-caption">
            — That is not luck. That is something far more beautiful.
          </p>
        </div>
      </div>
    </div>
  );
}
