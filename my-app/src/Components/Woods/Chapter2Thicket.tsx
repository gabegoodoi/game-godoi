import { useState } from 'react';
import { Link } from 'react-router-dom';

function Chapter2Thicket() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 sm:mb-6">Chapter 2:<br></br>The Thicket</h1>
        <h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          Into the darkness…
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
                  At dawn, we set out. The morning is misted, the sky yet dark. We leave behind us the safety of respite, the warmth of the inn's fireplace and the comfort of the known road. Before us lie only the trees, the moss, the soil, the restless dead — and whatever rules them.
                </p>
                
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-250 text-lg sm:text-xl leading-relaxed"
                >
                  But our path is set. We cannot turn back. So, as the pale sun rises, we enter these Woods.
                </p>
              </div>
            </div>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
            >
              Turn over the first <strong className="text-yellow-400">Woods Card</strong> in the Path.
            </p>

            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic"
            >
              Remember — from this point forward, only the current <strong className="text-yellow-400">Reader</strong> scans QR codes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter2Thicket;
