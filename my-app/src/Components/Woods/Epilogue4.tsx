import { Link } from 'react-router-dom';

function Epilogue4() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          The survivor reads
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
                  Days pass. For a time I cannot count, I wander the Woods alone. I know not where I walk, nor towards what destination; all I know are the trees, the endless shadows, and the darkness of my own thoughts.
                </p>
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  Then… light. When at last I emerge from the trees, it is into a shimmering, purpled sunrise. It paints the landscape before me like a jewel. I see, with relief, that no Woods stands before me, but freedom — freedom, and a road that will lead me far from this place. It swells with the promise of a new life, new friendships, and new enemies too. For I have escaped the Woods' clutches: I, and I alone.
                </p>
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  I rest only briefly at the forest's edge. I am weary, but it will not do to linger here, between the worlds of the living and the dead. Soon I set upon the road. I do not look back, though the voices of the dead follow me from among the trees.
                </p>
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed font-semibold italic"
                >
                  They will always follow me.
                </p>
              </div>
            </div>

            {/* Survivor Section */}
            <div className="space-y-6">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 text-xl sm:text-2xl leading-relaxed font-bold italic"
              >
                To the traveler who survived:
              </p>
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Describe your character’s life after their journey through the Wood. Think:
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
                  — Do they ever find what they seek?
                </p>
              </div>
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Provide as much or as little detail as you like; it’s your ending, and it’s up to you!
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
                To all who perished:
              </p>
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Commiserations… and yet, congratulations. Though your souls have been claimed, your surviving companion will not be rid of you so easily. If you wish, all of you may haunt the surviving traveler to the end of their days.
              </p>
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Starting with the first perished traveler to the left of the Reader, each perished traveler takes it in turns to describe how they haunt the survivor. Describe what your haunting looks and feels like.
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

            {/* Living on in the Woods Section */}
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

export default Epilogue4;
