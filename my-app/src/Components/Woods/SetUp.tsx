import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useState } from 'react';

function SetUp() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 sm:mb-6">Set Up</h1>
        <h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          Hello, traveler…
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Experience Check Section */}
        <div className="text-center">
          <p 
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-yellow-250 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10"
          >
            All players should be reading this section from their devices. If <strong className="text-yellow-400">ALL players</strong> are familiar with the Woods and have played before, click the button below.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Link to="/woods/chapters/setup-quick" className="w-full sm:w-auto max-w-md">
              <Button 
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{ fontFamily: "'League Spartan', sans-serif" }}
              >
                We have all played this before
              </Button>
            </Link>
          </div>
        </div>

        {/* Visual Separator */}
        <div className="flex items-center justify-center py-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          <span 
            className="px-6 text-yellow-400/70 text-sm font-medium uppercase tracking-wider"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            OR
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
        </div>

        {/* Alternative Path Section */}
        <div className="text-center">
          <div className="mb-6">
            <span 
              className="text-pink-300 text-base sm:text-lg font-semibold uppercase tracking-wider"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              New Players?
            </span>
          </div>
          <p 
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
          >
            If any players are unfamiliar with the game, <strong className="text-yellow-400">scroll down instead</strong>. The eldest member of the group should read aloud. They are the first <em className="text-pink-300">Reader</em>.
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

        {/* Reader Introduction Section */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-pink-300 text-base sm:text-lg font-medium italic text-center mb-8"
            >
              (The Reader reads aloud:)
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 text-center leading-tight"
              style={{ fontFamily: "'Dm Serif Display', serif" }}
            >
              Welcome to the Woods!
            </h3>
            
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
            >
              In this game, you will play a group of travelers who must pass through the terrifying Woods. But be warned; the Woods almost always claim their price. In the end, only the cards — and your actions — will determine who perishes and who survives.
            </p>
            
            <div className="pt-4">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
              >
                <strong className="text-yellow-400">Roleplay.</strong> This is a roleplaying and storytelling game. It can be dark, dramatic and also — at times — silly.
              </p>
            </div>
          </div>
        </div>

        {/* Roleplay Tips Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="border border-yellow-400/30 rounded-lg overflow-hidden">
            <button
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className="w-full px-6 py-5 bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors duration-200 text-left flex items-center justify-between"
            >
              <span 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-400 font-semibold text-lg sm:text-xl"
              >
                Unfamiliar with improv & roleplay? Here are some tips
              </span>
              <span className="text-yellow-400 text-2xl font-light">
                {isAccordionOpen ? '−' : '+'}
              </span>
            </button>
            
            {isAccordionOpen && (
              <div className="px-8 py-10 bg-black/20">
                <div className="max-w-4xl mx-auto space-y-10">
                  {/* Tip 1 */}
                  <div className="pb-8 border-b border-yellow-400/20">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0 self-center sm:self-start">
                        <div className="w-12 h-12 bg-pink-300 text-black rounded-full flex items-center justify-center font-bold text-lg">
                          1
                        </div>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h4 
                          style={{ fontFamily: "'Dm Serif Display', serif" }}
                          className="text-pink-300 font-bold text-2xl sm:text-3xl mb-6"
                        >
                          "Yes, and…"
                        </h4>
                        <div className="space-y-4">
                          <p 
                            style={{ fontFamily: "'League Spartan', sans-serif" }}
                            className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                          >
                            Agree with any details that your fellow players are establishing. This does not mean your character has to like it, only that they acknowledge its truth.
                          </p>
                          <p 
                            style={{ fontFamily: "'League Spartan', sans-serif" }}
                            className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                          >
                            <strong className="text-yellow-400">Good roleplay is additive</strong> — go beyond agreeing with established details and add your own on top.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 2 */}
                  <div className="pb-8 border-b border-yellow-400/20">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0 self-center sm:self-start">
                        <div className="w-12 h-12 bg-pink-300 text-black rounded-full flex items-center justify-center font-bold text-lg">
                          2
                        </div>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h4 
                          style={{ fontFamily: "'Dm Serif Display', serif" }}
                          className="text-pink-300 font-bold text-2xl sm:text-3xl mb-6"
                        >
                          Be a Good Team Player
                        </h4>
                        <div className="space-y-4">
                          <p 
                            style={{ fontFamily: "'League Spartan', sans-serif" }}
                            className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                          >
                            Create opportunities for other players to play into the traits they want their character to have. If they want to be the kindest person on the journey, set them up to do so; if they want to be evil, set them up that way.
                          </p>
                          <p 
                            style={{ fontFamily: "'League Spartan', sans-serif" }}
                            className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                          >
                            <strong className="text-yellow-400">Make other players look and feel good</strong> through your actions by supporting their ideas and being an active listener.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 3 - The Don'ts */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0 self-center sm:self-start">
                        <div className="w-12 h-12 bg-pink-300 text-black rounded-full flex items-center justify-center font-bold text-lg">
                          3
                        </div>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h4 
                          style={{ fontFamily: "'Dm Serif Display', serif" }}
                          className="text-pink-300 font-bold text-2xl sm:text-3xl mb-8"
                        >
                          The Don'ts
                        </h4>
                        <div className="space-y-8">
                          <div className="bg-black/30 rounded-lg p-6 border-l-4 border-red-400/50">
                            <h5 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-red-300 font-bold text-xl mb-3"
                            >
                              Don't go for the joke
                            </h5>
                            <p 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-yellow-250 text-lg leading-relaxed"
                            >
                              We all love a pun, euphemism, or pop culture reference, but leaning into those can keep players at arm's length from the fantasy you're creating.
                            </p>
                          </div>
                          
                          <div className="bg-black/30 rounded-lg p-6 border-l-4 border-red-400/50">
                            <h5 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-red-300 font-bold text-xl mb-3"
                            >
                              Don't go to Crazy Town
                            </h5>
                            <p 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-yellow-250 text-lg leading-relaxed"
                            >
                              It's okay to have a strange or unusual thing, but too many unrelated strange and unusual things breaks any sense of group logic being built.
                            </p>
                          </div>
                          
                          <div className="bg-black/30 rounded-lg p-6 border-l-4 border-red-400/50">
                            <h5 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-red-300 font-bold text-xl mb-3"
                            >
                              Don't make others uncomfortable
                            </h5>
                            <p 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-yellow-250 text-lg leading-relaxed mb-4"
                            >
                              If you insist that your character NEEDS to be racist or sexist, we recommend discarding your Character Card, packing up your things, and going home.
                            </p>
                            <p 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-yellow-400 text-base italic"
                            >
                              It's a good idea to set up ground rules before a session. Are people comfortable having romance featured in the session? Violence? Gore?
                            </p>
                          </div>
                          
                          <div className="bg-black/30 rounded-lg p-6 border-l-4 border-green-400/50">
                            <h5 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-green-300 font-bold text-xl mb-3"
                            >
                              Don't feel pressure to always know the answer
                            </h5>
                            <p 
                              style={{ fontFamily: "'League Spartan', sans-serif" }}
                              className="text-yellow-250 text-lg leading-relaxed"
                            >
                              If you don't know what to say, just blurt something out. <strong className="text-yellow-400">You literally cannot be wrong.</strong> If your fellow players are playing with the above guidelines in mind, they will be eager to support what you say and add to it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Atmosphere Section */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <h4 
              style={{ fontFamily: "'Dm Serif Display', serif" }}
              className="text-yellow-400 font-bold text-2xl sm:text-3xl mb-6"
            >
              Atmosphere
            </h4>
            
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed mb-8"
            >
              If you have not already done so, we suggest that you now take a moment to commit to the game's atmosphere. You could:
            </p>
            
            <div className="space-y-4 mb-8">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed"
              >
                Put on some music <span className="text-pink-300">(perhaps <a href="https://open.spotify.com/playlist/2b2CdDwgM4C8b5RtDUASEP?si=3f9b2c01c0614950&nd=1&dlsi=1fa70eeeae1c40ca" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-200 transition-colors">this playlist</a>)</span>.
              </p>
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed"
              >
                Burn a candle.
              </p>
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed"
              >
                Turn down the lights.
              </p>
            </div>
            
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
            >
              When the atmosphere is adjusted, <strong className="text-yellow-400">scroll past the hourglass symbols below</strong>.
            </p>
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

        {/* How to Read These Pages Section */}
        <div className="max-w-2xl mx-auto">
          <h3 
            className="text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-8"
            style={{ fontFamily: "'Dm Serif Display', serif" }}
          >
            How to read these pages
          </h3>
          
          <div className="space-y-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Over the course of the game, you will be reading a lot of text from pages like this one. To ensure this process goes smoothly, every traveler should know the below rules:
            </p>

            <div className="space-y-6">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                Text in italics, <em className="text-pink-300">like this</em>, is <strong className="text-yellow-400">RULES TEXT</strong>. It is the current Reader's job to communicate this text to the rest of the group in whatever way they wish. You can do this by reading the text aloud, by paraphrasing it, or by any other method — just get the message across to your fellow travelers!
              </p>

              <div className="bg-black/20 rounded-lg p-6 border-4 border-yellow-400/50">
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg leading-relaxed"
                >
                  When text has a box around it, <strong className="text-yellow-400">like this</strong>, that means it's <strong className="text-yellow-400">STORY TEXT!</strong> Story text must be read aloud to the group.
                </p>
              </div>

              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed"
              >
                When you see a line of hourglasses as below…
              </p>
              
              {/* Third Hourglass Separator */}
              <div className="text-center py-6">
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
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                … stop reading immediately. Wait for the above action to finish before continuing.
              </p>
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                Finally, when you see a book symbol as below…
              </p>
              
              <div className="text-center py-4">
                <span className="text-yellow-400 text-2xl">⇐ 📖</span>
              </div>
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                … this means that the role of Reader rotates left. The person to the current Reader's left becomes the new Reader.
              </p>
              
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg leading-relaxed italic"
              >
                When everyone is clear on these rules, continue to the next section.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Hourglass Separator */}
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
          
          <p 
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-pink-300 text-lg italic"
          >
            (This means the Reader rotates left, remember?)
          </p>
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

        {/* Fifth Hourglass Separator */}
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

        {/* Reader Rotation 2 */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-center py-4">
            <span className="text-yellow-400 text-2xl">⇐ 📖</span>
          </div>
        </div>

        {/* Character Cards Section */}
        <div className="max-w-2xl mx-auto">
          <h3 
            className="text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-8"
            style={{ fontFamily: "'Dm Serif Display', serif" }}
          >
            Assigning Character Cards
          </h3>
          
          <div className="space-y-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Throughout this game, you will roleplay as travelers on the road. You will create those characters from randomly-dealt cards. This is a fun moment!
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Gather the rest of the Woods Cards that have not been dealt into the Path.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Deal a single random Woods Card facedown to each player. These are your Character Cards. These cards represent each traveler at the table and cannot be discarded. travelers should <strong className="text-yellow-400">DISREGARD</strong> the Bargain rule written on their Character Card; it is not relevant to you.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Finally, place the rest of the Woods Cards that have not been dealt into the Path or as Character Cards into the centre of the table. This is the Deck. the Deck is distinct from the Path and is sometimes used in encounters. Discarded cards are shuffled back into the Deck.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Once the above is complete, continue below.
            </p>
          </div>
        </div>

        {/* Sixth Hourglass Separator */}
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

        {/* Reader Rotation 3 */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-center py-4">
            <span className="text-yellow-400 text-2xl">⇐ 📖</span>
          </div>
        </div>

        {/* Game Start Section */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              You are now ready to begin the game. When all players are settled:
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Flip over the first card in the Path (Chapter 1).
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg leading-relaxed italic"
            >
              Place the Chapter 1 card face-up next to the Path, so that the current Chapter 1s always on display (this is important). Discards from the Path should go here, to distinguish them from the Deck.
            </p>
          </div>
        </div>

        {/* Final Reader Rotation */}
        <div className="max-w-2xl mx-auto text-center pt-8">
          <div className="text-center py-4">
            <span className="text-yellow-400 text-2xl">⇐ 📖</span>
          </div>
        </div>

        {/* Final Instructions */}
        <div className="max-w-2xl mx-auto">
          <p 
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-yellow-250 text-lg leading-relaxed italic"
          >
            To begin, <strong className="text-yellow-400">ONLY the new Reader</strong> scans and reads the Chapter 1 QR code!
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
  );
}

export default SetUp;
