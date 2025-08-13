import { Link } from 'react-router-dom';

function Epilogue3() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 sm:mb-6">Epilogue 3:<br></br>Mixed Fates</h1>
        <h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          Multiple travelers survive. Multiple travelers perish
        </h2>
      </div>

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
                  Days pass. For a long time, our minds are robbed from us, and the world with it. We know only the shadows of the Woods — the cold that creeps through our bodies, the mind-rot that maddens us. The devouring darkness swallows us, until we know not the difference between ourselves and the phantoms we flee. We are the Woods, and the Woods are within us.
                </p>
                
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  Then… there is light. A thin, white light, blinking through leaves. At first we shudder to see it, thinking it another phantom. But when at last we stumble from the forest's edge, it is into the glow of a warm, golden dawn. Sunlight dapples the landscape before us: a road, swelling with promise. We can scarcely believe our luck. We have walked the Woods and lived to tell the tale.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  But even as we celebrate our good fortune, we perceive that not all have shared our happy fate. Our numbers have dwindled. The cost of our journey has been heavy; the Woods have claimed more than their fair share of victims. We do not linger to grieve. It is best to let the dead remain so. And yet as we set our boots to the road…
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  The breeze bears a sound behind us. It is the whistle of voices, high and strange — a parody of other voices, ones we heard once around a campfire. They call us by our names. Do not leave us, they beg. We are here. We did not die. For a moment, a dread descends upon us. But our hearts have been hardened by our trials. We will not be deceived.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed font-semibold italic"
                >
                  One by one, we put our backs to the trees and walk on. Behind us, the voices grow fainter — and fainter — and fainter still. Then, like those who once walked beside us, they are gone.
                </p>
              </div>
            </div>

            {/* Survivors Section */}
            <div className="space-y-6">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 text-xl sm:text-2xl leading-relaxed font-bold italic"
              >
                To all travelers who survived:
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
                  — How did their encounter with the Heart of the Woods change them?
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

            {/* Perished Section */}
            <div className="space-y-6">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 text-xl sm:text-2xl leading-relaxed font-bold italic"
              >
                To all the perished:
              </p>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Commiserations… and yet, congratulations. Though your souls has been claimed, your fellow travelers will not be rid of you so easily.
              </p>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Starting with the first perished traveler to the left of the Reader, each perished traveler takes it in turns to pick another traveler whose 'ending' they just heard about.
              </p>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                The perished traveler haunts their chosen traveler for the rest of their life. Describe what that haunting looks and feels like to the haunted traveler.
              </p>
            </div>

            {/* Second Hourglass Separator */}
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
            <div className="space-y-6">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 text-lg sm:text-xl leading-relaxed font-semibold text-center"
              >
                The game is over! Congratulations for making it to the end!
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

export default Epilogue3;
