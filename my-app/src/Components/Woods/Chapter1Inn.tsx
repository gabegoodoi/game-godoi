import { useState } from 'react';
import { Link } from 'react-router-dom';

function Chapter1Inn() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 sm:mb-6">Chapter 1.<br></br>The Inn</h1>
        <h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          The forest calls…
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
                  Travelers. For many days now, you have walked the long road alone. Now you are weary and the day grows late. You come upon a vast landscape of shrouded treetops, spread beneath a dark sky. You have reached the Woods, the mysterious forest through which you must each pass.
                </p>
                
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  At the edge of the trees stands a lonely inn. You will rest here for the night, gathering strength for the journey ahead. Perhaps here you will find companions for the road ahead — travelers also bound for the Woods. This would be a blessing indeed, for in these Woods, safety is found in numbers.
                </p>

                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  Ducking under the inn's low door, you enter a common room that is barely heated by a sputtering fire. The sickly innkeeper asks you to sit at the dinner table, where even now you see other travelers gathering. But before you can eat, the innkeeper must know your name and business.
                </p>
              </div>
            </div>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
            >
              Each player should individually scan the QR code on their <strong className="text-yellow-400">Character Card</strong>.
            </p>
          </div>
        </div>

        {/* Reader Rotation */}
        <div className="max-w-2xl mx-auto text-center pt-8">
          <div className="text-center py-4">
            <span className="text-yellow-400 text-2xl">⇐ 📖</span>
          </div>
        </div>

        {/* QR Code Alternative Accordion */}
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
                If anyone doesn't have a QR-enabled device, click here.
              </span>
              <span className="text-yellow-400 text-2xl font-light">
                {isAccordionOpen ? '−' : '+'}
              </span>
            </button>
            
            {isAccordionOpen && (
              <div className="px-8 py-6 bg-black/20">
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg leading-relaxed"
                >
                  If a player doesn't have a QR-enabled phone, they can find all <Link to="/woods/cards" className="text-yellow-400 underline hover:text-yellow-300 transition-colors">Woods Cards here</Link> and all <Link to="/woods/chapters" className="text-yellow-400 underline hover:text-yellow-300 transition-colors">Chapter Cards here</Link>.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chapter1Inn;
