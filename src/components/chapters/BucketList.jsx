import { useState } from 'react';
import { Star, Heart, CheckCircle, Circle } from 'lucide-react';

const bucketList = [
  { id: 1, category: 'Dates 💕', icon: '🎬', text: 'Watch a midnight movie together under a blanket fort' },
  { id: 2, category: 'Dates 💕', icon: '🌸', text: 'Have a picnic in a garden full of flowers' },
  { id: 3, category: 'Dates 💕', icon: '☕', text: 'Spend an entire Sunday in a cozy café with books' },
  { id: 4, category: 'Dates 💕', icon: '🎨', text: 'Visit an art museum and create our own interpretations' },
  { id: 5, category: 'Dates 💕', icon: '🌅', text: 'Wake up early and watch a sunrise together' },
  { id: 6, category: 'Dates 💕', icon: '🍕', text: 'Cook a fancy dinner together at home, just us' },
  { id: 7, category: 'Reading Nights 📚', icon: '📖', text: 'Read the same book and discuss it over hot chocolate' },
  { id: 8, category: 'Reading Nights 📚', icon: '🕯️', text: 'Have a candlelit reading night with our favourite novels' },
  { id: 9, category: 'Reading Nights 📚', icon: '📚', text: 'Build a reading list together for the coming year' },
  { id: 10, category: 'Reading Nights 📚', icon: '🧸', text: 'Read a bedtime story to each other' },
  { id: 11, category: 'Getaways 🌍', icon: '🏔️', text: 'Visit a hill station together and get lost in the mist' },
  { id: 12, category: 'Getaways 🌍', icon: '🌊', text: 'Walk along a beach at sunset, hand in hand' },
  { id: 13, category: 'Getaways 🌍', icon: '🏛️', text: 'Explore a heritage city together for a weekend' },
  { id: 14, category: 'Getaways 🌍', icon: '🌿', text: 'Stay in a nature retreat with no screens for a day' },
  { id: 15, category: 'Little Things 🌙', icon: '⭐', text: 'Stargaze together on a clear night far from city lights' },
  { id: 16, category: 'Little Things 🌙', icon: '🎶', text: 'Create our official playlist — one song added each month' },
  { id: 17, category: 'Little Things 🌙', icon: '💌', text: 'Exchange handwritten letters on our next anniversary' },
  { id: 18, category: 'Little Things 🌙', icon: '🌻', text: 'Plant something together and watch it grow' },
  { id: 19, category: 'Little Things 🌙', icon: '🎁', text: 'Surprise each other with mystery gift-wrapped books' },
  { id: 20, category: 'Little Things 🌙', icon: '🧁', text: 'Bake something sweet together and eat every bit of it' },
];

const categories = [...new Set(bucketList.map((b) => b.category))];

export default function BucketList() {
  const [checked, setChecked] = useState({});

  function toggle(id) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto chapter-enter">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="chapter-label mb-3">Chapter XI</p>
        <h2 className="type-hero gradient-text mb-4">Future Bucket List</h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500/50" />
          <Star size={14} fill="#ff2e63" color="#ff2e63" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="type-subtitle" style={{ color: '#7a2050', fontStyle: 'italic', marginBottom: '16px' }}>
          Our future adventures, planned with love 🌟
        </p>

        {/* Progress */}
        <div className="max-w-sm mx-auto">
          <div className="flex justify-between text-sm font-cormorant text-pink-400/70 mb-2">
            <span>{doneCount} completed</span>
            <span>{bucketList.length - doneCount} remaining</span>
          </div>
          <div className="h-2 bg-pink-900/30 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(doneCount / bucketList.length) * 100}%`,
                background: 'linear-gradient(90deg, #ff2e63, #d81b60)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Category groups */}
      {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <h3 className="type-subtitle flex items-center gap-2" style={{ color: '#2d0020', marginBottom: '16px' }}>
            {cat}
          </h3>
          <div className="space-y-3">
            {bucketList.filter((b) => b.category === cat).map((item) => (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300
                  ${checked[item.id] ? 'glass-pink pink-glow' : 'glass hover:bg-pink-900/20'}`}
              >
                <span className="text-2xl flex-shrink-0 mt-1">{item.icon}</span>
                <p className="type-body flex-1" style={{ color: checked[item.id] ? 'rgba(180,50,90,0.5)' : '#3d1030', textDecoration: checked[item.id] ? 'line-through' : 'none', margin: 0 }}>
                  {item.text}
                </p>
                {checked[item.id]
                  ? <CheckCircle size={22} color="#ff2e63" fill="rgba(255,46,99,0.2)" className="flex-shrink-0" />
                  : <Circle size={22} color="rgba(255,46,99,0.3)" className="flex-shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Completion message */}
      {doneCount === bucketList.length && (
        <div className="text-center glass-warm rounded-3xl p-10 pink-glow animate-fade-in mt-12">
          <p className="text-5xl mb-4">🎉</p>
          <p className="type-subtitle" style={{ color: '#2d0020', marginBottom: '8px' }}>All done, Rishita Ji!</p>
          <p className="type-body" style={{ color: '#7a2050' }}>
            Look how far we've come. Now let's dream up the next 20 together.
          </p>
        </div>
      )}
    </div>
  );
}
