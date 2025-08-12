import { useState } from 'react';
import { Link } from 'react-router-dom';

function Chapter5Heart() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 sm:mb-6">Chapter 5:<br></br>The Heart of the Woods</h1>
        <h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          The final reckoning…
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Story Text Section */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="bg-black/20 rounded-lg p-6 border-4 border-yellow-400/50">
              <div className="space-y-6">
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  For many days we have pressed — through Thicket, through Mire, through Gorge. Now we come to the most perilous part of our journey.
                </p>
                
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  Turning our backs to the mountains, we descend into forest thicker and darker than all that came before. The canopy closes, becoming so dense that we walk in a perpetual darkness. The air grows heavier, the trees more ancient; the very leaves whisper of magic, and memory, and death.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  We have reached the Heart of the Woods. We think back on the many spirits we have encountered on this journey. Perhaps they will protect us from the Woods rage. Perhaps they will not.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                All travellers reveal their <strong className="text-yellow-400">Character Card</strong>.
              </p>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                In return for safe passage, the Woods demand one of the party's lives — perhaps more — as payment. Travelers who have earned the Blessings of spirits can claim their protection, but nobody is completely safe.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-yellow-400/20">
              <h3 
                className="text-xl sm:text-2xl font-bold text-yellow-400"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Converting Bargains to Blessings
              </h3>
              
              <div className="space-y-6">
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  If any traveler at the table holds a Bargain, discuss now whether they have observed its restrictions faithfully. These decisions may be somewhat ambiguous, in which case it is up to the party to figure out what they will and won't allow.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  So long as a traveler has not directly broken the Bargain, the spirit is pleased. The Bargain becomes a Blessing, and the spirit will speak on your behalf.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  If a traveler has directly broken their Bargain's rules, the relevant spirit is displeased. The traveler must discard the Bargain.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  If it is difficult to reach a consensus, call a simultaneous vote from all the travelers. Ties are decided by the Reader.
                </p>
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t border-yellow-400/20">
              <h3 
                className="text-xl sm:text-2xl font-bold text-yellow-400"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Chapter 5 Bargains
              </h3>
              
              <div className="space-y-6">
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  If any traveler holds the <strong className="text-yellow-400">Raven's Bargain</strong>, that rule should be observed and resolved now with the Bargains above.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  If any travelers hold the Bargain of the <strong className="text-yellow-400">Triplets</strong>, the <strong className="text-yellow-400">Sovereign</strong>, the <strong className="text-yellow-400">Moon</strong>, the <strong className="text-yellow-400">Assassin</strong> or the <strong className="text-yellow-400">Mystic</strong>, they may also convert these cards to Blessings now. However, the Bargain rules will continue to have an effect, as the next section will reveal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hourglass Separator */}
        <div className="text-center pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 sm:w-32 h-px bg-yellow-400/40"></div>
            <div className="text-yellow-400/70 text-lg sm:text-xl lg:text-2xl tracking-wider">
              <span className="block sm:hidden">⧖ ⧖ ⧖ ⧖ ⧖</span>
              <span className="hidden sm:block lg:hidden">⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖</span>
              <span className="hidden lg:block">⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖</span>
            </div>
            <div className="w-24 sm:w-32 h-px bg-yellow-400/40"></div>
          </div>
        </div>

        {/* Final Confrontation Section */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
            >
              It is time to face the Woods.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
            >
              As in Chapter 1, each traveller individually scans their <strong className="text-yellow-400">Character Card</strong>.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
            >
              Select '<strong className="text-yellow-400">Chapter 5</strong>'.
            </p>
          </div>
        </div>

        {/* Reader Rotation */}
        <div className="max-w-2xl mx-auto text-center pt-8">
          <div className="text-center py-4">
            <span className="text-yellow-400 text-2xl">⇐ 📖</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chapter5Heart;
