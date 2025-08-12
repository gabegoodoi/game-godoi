function SetUpQuickStart() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 sm:mb-6">Quick Start</h1>
        <h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          We meet again…
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Atmosphere Section */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed mb-8 italic"
            >
              If you have not already done so, we suggest that players take a moment to commit to the game's atmosphere. You could:
            </p>
            
            <div className="space-y-4 mb-8">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                Put on some music <span className="text-pink-300">(perhaps <a href="https://open.spotify.com/playlist/2b2CdDwgM4C8b5RtDUASEP?si=3f9b2c01c0614950&nd=1&dlsi=1fa70eeeae1c40ca" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-200 transition-colors">this playlist</a>)</span>.
              </p>
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                Burn a candle.
              </p>
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                Turn down the lights.
              </p>
            </div>
            
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
            >
              When the atmosphere is adjusted, follow the steps below. You do not need to read aloud; you know how this game goes.
            </p>
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

        {/* Build the Path Section */}
        <div className="max-w-2xl mx-auto">
          <h3 
            className="text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-8"
            style={{ fontFamily: "'Dm Serif Display', serif" }}
          >
            Build the Path
          </h3>
          
          <div className="space-y-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Remove the <strong className="text-yellow-400">Set-Up</strong> and the <strong className="text-yellow-400">Tutorial</strong> from the game. Then build the Path as below:
            </p>

            {/* Path Structure */}
            <div className="space-y-3 sm:space-y-4">
              {/* Epilogue */}
              <div className="py-3 px-4 bg-gradient-to-r from-pink-300/10 to-transparent border-l-4 border-pink-300/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-pink-300">The Epilogue</span> <span className="text-yellow-400/70 text-sm block sm:inline">(bottom card)</span>
                </div>
              </div>
              
              {/* Chapter 5 */}
              <div className="py-3 px-4 bg-gradient-to-r from-pink-300/10 to-transparent border-l-4 border-pink-300/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-pink-300">Chapter 5: <br></br>The Heart of the Wood</span>
                </div>
              </div>
              
              {/* Woods Card 1 for Chapter 5 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span><br></br><span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Woods Card 2 for Chapter 5 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span><br></br> <span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Woods Card 3 for Chapter 5 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span><br></br> <span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Chapter 4 */}
              <div className="py-3 px-4 bg-gradient-to-r from-pink-300/10 to-transparent border-l-4 border-pink-300/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-pink-300">Chapter 4:<br></br>The Gorge</span>
                </div>
              </div>
              
              {/* Woods Card 1 for Chapter 4 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span> <br></br><span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Woods Card 2 for Chapter 4 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span><br></br> <span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Woods Card 3 for Chapter 4 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span><br></br><span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Chapter 3 */}
              <div className="py-3 px-4 bg-gradient-to-r from-pink-300/10 to-transparent border-l-4 border-pink-300/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-pink-300">Chapter 3:<br></br>The Mire</span>
                </div>
              </div>
              
              {/* Woods Card 1 for Chapter 3 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span> <br></br><span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Woods Card 2 for Chapter 3 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span><br></br> <span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Woods Card 3 for Chapter 3 */}
              <div className="py-3 px-4 bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-yellow-400">Woods Card</span> <br></br><span className="text-yellow-400/70 text-sm">(facedown, randomly drawn)</span>
                </div>
              </div>
              
              {/* Chapter 2 */}
              <div className="py-3 px-4 bg-gradient-to-r from-pink-300/10 to-transparent border-l-4 border-pink-300/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-pink-300">Chapter 2:<br></br>The Thicket</span>
                </div>
              </div>
              
              {/* Chapter 1 */}
              <div className="py-3 px-4 bg-gradient-to-r from-pink-300/10 to-transparent border-l-4 border-pink-300/50 rounded-r-lg">
                <div 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg italic"
                >
                  <span className="text-pink-300">Chapter 1:<br></br>The Inn</span> <span className="text-yellow-400/70 text-sm block sm:inline">(top card)</span>
                </div>
              </div>
            </div>

            {/* When Path is Built */}
            <div className="mt-8 pt-6 border-t border-yellow-400/20">
              <h4 
                className="text-xl font-bold text-yellow-400 mb-4"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                When the Path is built:
              </h4>
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                Gather all remaining <strong className="text-yellow-400">Woods Cards</strong> (those not dealt into the Path) and form a facedown deck
              </p>
            </div>
          </div>
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

        {/* Assign Character Cards Section */}
        <div className="max-w-2xl mx-auto">
          <h3 
            className="text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-8"
            style={{ fontFamily: "'Dm Serif Display', serif" }}
          >
            Assign Character Cards
          </h3>
          
          <div className="space-y-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Once the Path is built, assign Character Cards.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Take the deck. Deal a single random <strong className="text-yellow-400">Woods Card</strong> face-down to each player.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              When everyone has a Character Card and the deck is reformed, continue.
            </p>
          </div>
        </div>

        {/* Third Hourglass Separator */}
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

        {/* Reader Rotation */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-center py-4">
            <span className="text-yellow-400 text-2xl">⇐ 📖</span>
          </div>
        </div>

        {/* Final Instructions */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              When all travelers are settled, the <strong className="text-yellow-400">eldest player</strong> should flip over and scan the first card in the Path (Chapter 1: The Inn). They are the first Reader.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              From now on, only the current Reader should flip and scan cards from the Path.
            </p>

            <h3 
              style={{ fontFamily: "'Dm Serif Display', serif" }}
              className="text-yellow-400 text-2xl sm:text-3xl font-bold text-center pt-8"
            >
              Good luck…
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SetUpQuickStart;
