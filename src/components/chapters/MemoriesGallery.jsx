import { useState } from 'react';
import { Heart, Star, ZoomIn, X } from 'lucide-react';

const memories = [
  {
    file: 'moviedateher1.jpeg',
    title: 'Movie Date Focus',
    message: `Before the lights dimmed and the screen came alive, my favourite thing to look at was you — completely absorbed in your own world, headphones on, glasses on, unbothered by everything around you. That kind of focus you have, on anything you love, is something I find beautiful every single time.`,
    rotate: '-2deg',
    color: '#ff2e63',
  },
  {
    file: 'handholding1.jpeg',
    title: 'Hand in Hand',
    message: `There is something about the way your hand fits in mine that makes the rest of the world go quiet. I do not need anything grand when I have this — just your hand, just your presence, just you.`,
    rotate: '1.5deg',
    color: '#d81b60',
  },
  {
    file: 'illusonmusuamtogether.jpeg',
    title: 'Museum of Illusions',
    message: `The whole place was designed to trick your eyes — but the clearest, most real thing I saw that day was you. Every mirror showed us together and honestly, I liked that version of the world.`,
    rotate: '-1deg',
    color: '#f43f5e',
  },
  {
    file: 'her1.jpeg',
    title: 'Her Radiant Smile',
    message: `You walk into a room and something shifts. You don't try to — it just happens. There is a warmth about you, a quiet brightness, that makes everything around you feel softer and more alive.`,
    rotate: '2.5deg',
    color: '#ff2e63',
  },
  {
    file: 'onmetrostationher2.jpeg',
    title: 'Quiet Waiting',
    message: `Ordinary moments with you never feel ordinary. Standing with you, waiting — it felt like a scene out of a novel where the reader already knows this is the important part, even before anything happens.`,
    rotate: '-2deg',
    color: '#d81b60',
  },
  {
    file: 'moviedatetogetr1.jpeg',
    title: 'Side by Side',
    message: `I have sat beside you in a dark theater and felt like the happiest person in that room. Not because of the film playing — because of who I got to watch it with. Every movie we see together becomes ours.`,
    rotate: '1deg',
    color: '#ff2e63',
  },
  {
    file: 'handholdingwithflower.jpeg',
    title: 'A Rose Between Us',
    message: `A flower held between our hands — a small, delicate thing between two people who mean everything to each other. It is one of those images I go back to. It says something real about us.`,
    rotate: '-1.5deg',
    color: '#f43f5e',
  },
  {
    file: 'handholdingwithflower2.jpeg',
    title: 'Blooming Together',
    message: `No bloom is ever going to be as beautiful to me as your hands. That feeling — your hand holding mine — is something I am genuinely grateful for every time it happens.`,
    rotate: '2deg',
    color: '#d81b60',
  },
  {
    file: 'illusionmuseumtogether2.jpeg',
    title: 'The Giant Chair',
    message: `You sitting up there on that giant chair, tiny and bright-eyed and completely delighted. Making you laugh, keeping you safe, being the person next to you in moments like this — that is everything I want.`,
    rotate: '-2.5deg',
    color: '#ff2e63',
  },
  {
    file: 'robolxversiontogethr.jpeg',
    title: 'Our Little Universe',
    message: `Even in a silly, blocky, miniature version of the world — we are still us. I think that says something. Some things stay true no matter what form they take.`,
    rotate: '1.5deg',
    color: '#f43f5e',
  },
  {
    file: 'her2.jpeg',
    title: 'Just You',
    message: `There are people you photograph and there are people photographs cannot contain. You are the second kind. Every picture of you captures something, but it never quite captures all of it — because all of it is too alive to stay still.`,
    rotate: '-1deg',
    color: '#d81b60',
  },
  {
    file: 'her3.jpeg',
    title: 'Effortlessly Her',
    message: `This is the thing about you — you do not need to try. You are genuinely, naturally, quietly stunning. And the best part is you carry it with such ease that it somehow makes you even more beautiful.`,
    rotate: '2deg',
    color: '#ff2e63',
  },
  {
    file: 'sundarnursurytogether.jpeg',
    title: 'Sundar Nursery',
    message: `We went to Sundar Nursery and you moved through it like you belonged there — among all that green and colour and quiet. That day is one of the ones I keep returning to. You, surrounded by flowers, looking completely at peace.`,
    rotate: '-2deg',
    color: '#f43f5e',
  },
  {
    file: 'sundarnursyerydatetogerter2.jpeg',
    title: 'The Garden Remembers Us',
    message: `That whole afternoon at Sundar Nursery — the slow walk, the colours everywhere, just the two of us with nowhere to be. I want more days like that. Many more.`,
    rotate: '1deg',
    color: '#d81b60',
  },
  {
    file: 'valindternepoloriodtogether.jpeg',
    title: 'Valentine',
    message: `A photograph of two people who have chosen each other, again and again, through ordinary days and the ones that asked more of them. That is us in this picture. And I would choose you every single time.`,
    rotate: '-1.5deg',
    color: '#ff2e63',
  },
  {
    file: 'moviedatetoger2.jpeg',
    title: 'Our Cinema',
    message: `Every film we have watched together has a version of you attached to it now — your reactions, your laugh, you leaning close. That is the only reason I want to keep going to the cinema.`,
    rotate: '2.5deg',
    color: '#f43f5e',
  },
  {
    file: 'herpicinwallet.jpeg',
    title: 'Always With Me',
    message: `I keep your picture with me. Not because I have to — because on the days when things feel heavy or far away, it reminds me that something genuinely good and real exists in my life. You exist. That is enough.`,
    rotate: '-2deg',
    color: '#d81b60',
  },
  {
    file: 'handholding together.jpeg',
    title: 'Together',
    message: `Two hands. One direction. Whatever comes next, I want to face it with you — not behind you, not ahead of you, but right beside you, holding on.`,
    rotate: '1.5deg',
    color: '#ff2e63',
  },
  {
    file: 'handholding3.jpeg',
    title: 'Intertwined',
    message: `Our fingers intertwined is a whole language on its own. It says: I am here. I am not going anywhere. You are safe. All of that, without a single word.`,
    rotate: '-1deg',
    color: '#f43f5e',
  },
];

function Polaroid({ memory, onClick }) {
  return (
    <div
      className="cursor-pointer group polaroid"
      style={{
        transform: `rotate(${memory.rotate})`,
      }}
      onClick={() => onClick(memory)}
    >
      {/* Photo — natural aspect ratio, no cropping */}
      <div
        style={{
          background: '#f8f0f0',
          overflow: 'hidden',
          position: 'relative',
          minHeight: '140px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={`images/${memory.file}`}
          alt={memory.title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            maxHeight: '260px',
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #ff2e63 0%, #d81b60 100%)';
            e.target.parentElement.style.minHeight = '180px';
          }}
        />
        {/* Hover zoom icon */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255,105,180,0.25)',
            opacity: 0,
            transition: 'opacity 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(2px)'
          }}
          className="group-hover:opacity-100"
        >
          <ZoomIn size={32} color="white" />
        </div>
      </div>

      {/* Caption strip */}
      <div style={{ paddingTop: '12px', textAlign: 'center' }}>
        <p className="font-playfair" style={{ fontSize: '13px', fontWeight: '700', color: '#2d0020', marginBottom: '6px' }}>
          {memory.title}
        </p>
        <Heart
          size={12}
          fill={memory.color}
          color={memory.color}
          style={{ margin: '0 auto' }}
        />
      </div>
    </div>
  );
}

function LightBox({ memory, onClose }) {
  if (!memory) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full chapter-enter"
        style={{ maxWidth: '580px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-5 -right-2 z-10 w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #ff2e63, #d81b60)',
            boxShadow: '0 4px 20px rgba(255,46,99,0.4)',
          }}
        >
          <X size={20} color="white" />
        </button>

        {/* Polaroid lightbox */}
        <div
          style={{
            background: 'white',
            padding: '16px 16px 28px 16px',
            borderRadius: '6px',
            boxShadow: '0 24px 80px rgba(255,46,99,0.2)',
            border: '1px solid rgba(255,105,180,0.2)'
          }}
        >
          {/* Full image — no cropping */}
          <img
            src={`images/${memory.file}`}
            alt={memory.title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              maxHeight: '480px',
              background: '#fff0f7',
            }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />

          {/* Caption */}
          <div style={{ paddingTop: '24px', paddingBottom: '8px' }}>
            <h3 className="type-title" style={{ color: '#2d0020', marginBottom: '12px' }}>
              {memory.title}
            </h3>
            <div style={{ height: '1.5px', background: 'linear-gradient(to right, #ffb3d9, transparent)', marginBottom: '16px' }} />
            <p className="type-body" style={{ fontStyle: 'italic', color: '#6b1040' }}>
              {memory.message}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '20px',
              }}
            >
              <Heart size={14} fill={memory.color} color={memory.color} />
              <span className="chapter-label">Sanket × Rishita Ji</span>
              <Heart size={14} fill={memory.color} color={memory.color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MemoriesGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="py-20 px-4 chapter-enter page-content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter III</p>
        <h2 className="type-hero gradient-text mb-4">Our Memories Gallery</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ height: '1.5px', width: '100px', background: 'linear-gradient(to right, transparent, rgba(255,46,99,0.5))' }} />
          <Star size={16} fill="#ff2e63" color="#ff2e63" />
          <div style={{ height: '1.5px', width: '100px', background: 'linear-gradient(to left, transparent, rgba(255,46,99,0.5))' }} />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050' }}>
          Click any polaroid to open it, Rishita Ji 💕
        </p>
      </div>

      {/* Gallery — masonry-like grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '36px',
          padding: '24px',
        }}
      >
        {memories.map((memory, i) => (
          <Polaroid key={i} memory={memory} onClick={setSelected} />
        ))}
      </div>

      {/* Lightbox */}
      <LightBox memory={selected} onClose={() => setSelected(null)} />

      {/* Footer */}
      <div className="text-center mt-20">
        <div className="glass-warm" style={{
            display: 'inline-block',
            borderRadius: '20px',
            padding: '32px 48px',
            maxWidth: '540px',
          }}
        >
          <p className="type-subtitle" style={{ color: '#2d0020', marginBottom: '12px' }}>
            "Every photo is a frozen heartbeat."
          </p>
          <p className="type-caption">
            — {memories.length} memories and counting, forever.
          </p>
        </div>
      </div>
    </div>
  );
}
