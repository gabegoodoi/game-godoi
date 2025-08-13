import { Link } from 'react-router-dom';

function Epilogue5() {
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
                  How long have we waited in this place? It is hard to tell. From all sides, the Woods grow closer, darker, the air thick with whispers we cannot understand. There is someone here with us, but when we try to renounce it, we find that we no longer know its name. We know not our own names — not who we are, nor what we seek in this darkness. We are nothing. We belong to the Woods.
                </p>
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  There is a shadow — then a flash — then a terror, spreading like a stain. There is a darkness deeper than thought or dread.
                </p>
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  Then, at last, there is nothing at all.
                </p>
              </div>
            </div>

            {/* Unboxed Italic Section */}
            <div className="space-y-6 mt-8">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 text-lg sm:text-xl leading-relaxed font-bold italic text-center"
              >
                Our commiserations, travelers. The Woods are perilous and you have paid the ultimate price. You have all perished.
              </p>
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic text-center"
              >
                Somewhere, however, you are not forgotten. The news of the Woods' latest victims travels far and wide. And certain people are more interested to hear of them than others…
              </p>
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                Clockwise from the Reader, each traveler takes it in turns to describe someone who remembers their character in the outer world beyond the Woods. Give as much detail as you want; it's your world! Think about:
              </p>
              <div className="space-y-2 pl-2">
                <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic">— Who is that person? How did they know your traveler?</p>
                <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic">— How do they hear of your traveler’s demise?</p>
                <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic">— How does your traveler’s death affect this person? Do they mourn your traveler? Or are they glad to see them gone?</p>
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


            <div className="space-y-8 pt-8 border-t border-yellow-400/20">
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
              >
                The game is over! Although you didn't make it through the Woods, you can make another attempt — with new characters — any time. Although, knowing its secrets, perhaps it’s best that you never do… 
              </p>
            </div>

            <div className="text-center">
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

export default Epilogue5;
