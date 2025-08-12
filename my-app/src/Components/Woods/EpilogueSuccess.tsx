import { Link } from 'react-router-dom';

function EpilogueSuccess() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-4 sm:px-6 py-6 sm:py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Instructions and Options */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <p 
              style={{ fontFamily: "'League Spartan', sans-serif" }}
              className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic text-center"
            >
              Choose the ending appropriate to your party, as determined in Chapter 5:
            </p>

            <div className="space-y-4">
              <Link 
                to="/woods/epilogue/1"
                className="block w-full bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-lg p-4 transition-all duration-200"
              >
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-400 text-lg sm:text-xl leading-relaxed text-center hover:text-yellow-300"
                >
                  All travelers survive.
                </p>
              </Link>

              <Link 
                to="/woods/epilogue/2"
                className="block w-full bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-lg p-4 transition-all duration-200"
              >
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-400 text-lg sm:text-xl leading-relaxed text-center hover:text-yellow-300"
                >
                  One traveler perishes. The rest survive.
                </p>
              </Link>

              <Link 
                to="/woods/epilogue/3"
                className="block w-full bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-lg p-4 transition-all duration-200"
              >
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-400 text-lg sm:text-xl leading-relaxed text-center hover:text-yellow-300"
                >
                  Multiple travelers survive. Multiple travelers perish.
                </p>
              </Link>

              <Link 
                to="/woods/epilogue/4"
                className="block w-full bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-lg p-4 transition-all duration-200"
              >
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-400 text-lg sm:text-xl leading-relaxed text-center hover:text-yellow-300"
                >
                  One traveler survives. The rest perish.
                </p>
              </Link>

              <Link 
                to="/woods/epilogue/5"
                className="block w-full bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-lg p-4 transition-all duration-200"
              >
                <p 
                  style={{ fontFamily: "'League Spartan', sans-serif" }}
                  className="text-yellow-400 text-lg sm:text-xl leading-relaxed text-center hover:text-yellow-300"
                >
                  All travelers perish.
                </p>
              </Link>
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

export default EpilogueSuccess;
