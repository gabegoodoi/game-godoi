import { Link } from 'react-router-dom';

function Epilogue() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-6 py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-8 text-yellow-400 text-center">The Epilogue</h1>
      
      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Story Text Section */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="bg-black/20 rounded-lg p-6 border-4 border-yellow-400/50">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed text-center"
              >
                A new day dawns. One way or another, we have come to the end of our journey.
              </p>
            </div>

            <div className="space-y-6">
              <p 
                style={{ fontFamily: "'League Spartan', sans-serif" }}
                className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic text-center"
              >
                Choose from the below:
              </p>

              <div className="space-y-6">
                <Link 
                  to="/woods/epilogue/success"
                  className="block w-full bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-lg p-4 transition-all duration-200"
                >
                  <p 
                    style={{ fontFamily: "'League Spartan', sans-serif" }}
                    className="text-yellow-400 text-lg sm:text-xl leading-relaxed text-center hover:text-yellow-300"
                  >
                    If the party made it to the Heart of the Woods, click here.
                  </p>
                </Link>

                <Link 
                  to="/woods/epilogue/6"
                  className="block w-full bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 hover:border-yellow-400 rounded-lg p-4 transition-all duration-200"
                >
                  <p 
                    style={{ fontFamily: "'League Spartan', sans-serif" }}
                    className="text-yellow-400 text-lg sm:text-xl leading-relaxed text-center hover:text-yellow-300"
                  >
                    If the party was forced to flee before Chapter 5, click here.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Epilogue;
