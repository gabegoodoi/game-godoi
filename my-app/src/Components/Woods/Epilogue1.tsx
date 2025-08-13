import { Link } from 'react-router-dom';

function Epilogue1() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Story Text Section */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="bg-black/20 rounded-lg p-6 border-4 border-yellow-400/50">
              <div className="space-y-6">
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  Days pass. How many, we could not say; we walk uncertain and unspeaking. But at last, in time, the darkness around us eases. We have reached the far side of the Woods.
                </p>
                
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  As the trees thin and dawn picks apart the branches overhead, we can scarcely believe it. We step from under the trees. A golden sun picks out the road before us; a well-made path that shoots from the forest like a blade, carving the green, green landscape into green, green hills. In the distance, bells toll upon the breeze. A merry sound, they sing of new chapters. New beginnings.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  We have returned, all of us, to the land of the living. Against all hope, we have walked the Woods and lived to tell the tale.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed font-semibold italic"
                >
                  Filled with hope for the future, we walk on.
                </p>
              </div>
            </div>

            {/* Congratulations Section - No Box, Italicized */}
            <div className="space-y-6">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 text-xl sm:text-2xl leading-relaxed font-bold text-center italic"
              >
                Congratulations! You have all survived the perilous Woods.
              </p>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Starting with the traveler to the left of the Reader, take it in turns to describe your character's life after their journey through the Woods. Think:
              </p>

              <div className="space-y-4 pl-2">
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  — Where do they go?
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  — How has their encounter with the Heart of the Woods changed them?
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
                >
                  — Do they ever find what they sought?
                </p>
              </div>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Provide as much or as little detail as you like; it's your ending, and it's up to you!
              </p>
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

            {/* Game Over Section */}
            <div className="space-y-6 pt-8 border-t border-yellow-400/20">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 text-lg sm:text-xl leading-relaxed font-semibold text-center"
              >
                The game is over. Thank you so much for playing!
              </p>
            </div>

            <div className="text-center pt-8">
              <Link 
                to="/woods/chapters"
                className="inline-block bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-lg px-6 py-3 transition-all duration-200"
              >
                <span 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  Return to Chapters
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Epilogue1;
