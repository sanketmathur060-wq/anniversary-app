import { useState, Suspense, lazy } from 'react';
import RosePetals from './components/RosePetals';
import Sidebar from './components/Sidebar';
import Prologue from './components/chapters/Prologue';
import OurBeginning from './components/chapters/OurBeginning';
import ReasonsLibrary from './components/chapters/ReasonsLibrary';
import MemoriesGallery from './components/chapters/MemoriesGallery';
import ManuscriptVows from './components/chapters/ManuscriptVows';
import SecretMailbox from './components/chapters/SecretMailbox';
import ConstellationCanvas from './components/chapters/ConstellationCanvas';
import PromiseLocket from './components/chapters/PromiseLocket';
import TimeCounter from './components/chapters/TimeCounter';
import BucketList from './components/chapters/BucketList';
import ComplimentVault from './components/chapters/ComplimentVault';
import TimeCapsule from './components/chapters/TimeCapsule';
import Epilogue from './components/chapters/Epilogue';
import TeddyHugs from './components/chapters/TeddyHugs';

const CHAPTER_COMPONENTS = {
  0: Prologue,
  1: OurBeginning,
  2: ReasonsLibrary,
  3: MemoriesGallery,
  4: ManuscriptVows,
  5: SecretMailbox,
  6: ConstellationCanvas,
  7: PromiseLocket,
  10: TimeCounter,
  11: BucketList,
  12: ComplimentVault,
  13: TimeCapsule,
  14: TeddyHugs,
  15: Epilogue,
};

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl animate-heartbeat inline-block mb-4">🌹</div>
        <p className="font-playfair text-pink-300/70 italic">Loading our story…</p>
      </div>
    </div>
  );
}

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [activeChapter, setActiveChapter] = useState(1);

  if (!showStory) {
    return (
      <div className="relative min-h-screen">
        <RosePetals />
        <div className="relative z-10">
          <Prologue onOpen={() => { setShowStory(true); setActiveChapter(1); }} />
        </div>
      </div>
    );
  }

  const ActiveComponent = CHAPTER_COMPONENTS[activeChapter] || OurBeginning;
  const prologueProps = activeChapter === 0 ? { onOpen: () => setActiveChapter(1) } : {};

  const chapterIds = Object.keys(CHAPTER_COMPONENTS).map(Number).sort((a, b) => a - b);
  const currentIndex = chapterIds.indexOf(activeChapter);
  const prevChapter = currentIndex > 0 ? chapterIds[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapterIds.length - 1 ? chapterIds[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen">
      {/* Continuous rose petals */}
      <RosePetals />

      {/* Sidebar */}
      <Sidebar activeChapter={activeChapter} onChapterChange={setActiveChapter} />

      {/* Main content area */}
      <main
        className="relative z-10 min-h-screen transition-all duration-300"
        style={{ marginLeft: '0', paddingLeft: '0' }}
      >
        {/* Desktop offset for sidebar */}
        <div className="lg:pl-72">
          <Suspense fallback={<LoadingSpinner />}>
            <div key={activeChapter} className="page-content min-h-screen flex flex-col justify-between">
              <div>
                <ActiveComponent {...prologueProps} />
              </div>
              
              {activeChapter !== 0 && (
                <div className="max-w-4xl w-full mx-auto px-4 pb-16 flex justify-between items-center chapter-enter mt-12">
                  {prevChapter !== null && prevChapter !== 0 ? (
                    <button
                      onClick={() => { window.scrollTo(0,0); setActiveChapter(prevChapter); }}
                      className="px-6 py-3 rounded-xl text-hotPink transition-all type-body"
                      style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,46,99,0.3)' }}
                    >
                      &larr; Previous
                    </button>
                  ) : <div />}

                  {nextChapter !== null ? (
                    <button
                      onClick={() => { window.scrollTo(0,0); setActiveChapter(nextChapter); }}
                      className="px-8 py-3 rounded-xl font-playfair transition-all"
                      style={{ background: 'linear-gradient(135deg, #ff2e63, #d81b60)', boxShadow: '0 4px 15px rgba(255,46,99,0.3)', color: 'white', fontSize: '18px', fontWeight: '600' }}
                    >
                      Next Chapter &rarr;
                    </button>
                  ) : <div />}
                </div>
              )}
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
