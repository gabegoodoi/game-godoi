import { Link } from 'react-router-dom';

function Epilogue2() {
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
                  Days pass. For a long time, our minds are robbed from us, and the world with it. We no longer know where we walk, with whom, or toward what end. We know only the shadows of the Woods, and horrors that haunt them.
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
                  But even as we celebrate our good fortune, we notice that we are missing one of our number. One traveler no longer walks among us. As the stories warned, the Woods have claimed their due. We do not linger to grieve. Wordlessly, we set our boots to the road before us. It is best to let the dead remain so. And yet…
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  As we walk from the Woods, we cannot help but glance back. There, from the trees' shadow, a pale figure watches us. For a moment, its features seem sharp — familiar, somehow. Then the sun crests the horizon, and the phantom is gone.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed font-semibold italic"
                >
                  We walk on.
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

            {/* Perished Section */}
            <div className="space-y-6">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 text-xl sm:text-2xl leading-relaxed font-bold italic"
              >
                To the perished:
              </p>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Commiserations… and yet, congratulations. Though your soul has been claimed, your fellow travelers will not be rid of you so easily…
              </p>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Pick another traveler whose 'ending' you just heard about.
              </p>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                You haunt this traveler for the rest of their life. Describe what that haunting looks and feels like to the haunted traveler.
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

            {/* End Section */}
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

export default Epilogue2;
