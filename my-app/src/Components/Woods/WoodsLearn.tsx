import { Link } from 'react-router-dom';

function WoodsLearn() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-6 py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-8 text-yellow-400 text-center">Learn to Play</h1>
      
      {/* Game Description */}
      <div className="max-w-4xl mx-auto mb-12">
        <p
          style={{ fontFamily: "'League Spartan', sans-serif" }}
          className="text-[1.3rem] text-center leading-relaxed text-yellow-250"
        >
          <strong>WE'RE PROBABLY GONNA DIE IN THESE WOODS</strong> is a storytelling game of improvisation, cooperation and imagination. The cards lead the narrative; the players respond.
        </p>
      </div>

      {/* What You Need Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 
          className="text-3xl font-bold text-yellow-400 text-center mb-6"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          What You Need
        </h2>
        <div 
          style={{ fontFamily: "'League Spartan', sans-serif" }}
          className="text-[1.2rem] text-center space-y-4"
        >
          <p className="text-yellow-250">Ready to brave these woods? All you need are:</p>
          
          <div className="bg-black/20 rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-center">
              <Link to="/woods/print" className="text-yellow-400 hover:text-yellow-300 underline cursor-pointer transition-colors">
                A deck of WE'RE PROBABLY GONNA DIE IN THESE WOODS cards
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-yellow-250">A QR-enabled phone for each player</span>
            </div>
          </div>
        </div>
      </div>

      {/* Print & Play Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <div 
          style={{ fontFamily: "'League Spartan', sans-serif" }}
          className="text-[1.1rem] text-center bg-yellow-400/10 rounded-lg p-6"
        >
          <p className="text-yellow-250">
            You can print-and-play with the cards yourself via the link above.
          </p>
        </div>
      </div>

      {/* Important Note */}
      <div className="max-w-3xl mx-auto mb-12">
        <div 
          style={{ fontFamily: "'League Spartan', sans-serif" }}
          className="text-[1rem] text-center bg-pink-400/10 rounded-lg p-6 border-l-4 border-pink-400"
        >
          <p className="text-pink-300">
            <strong>NOTE:</strong> WE'RE PROBABLY GONNA DIE IN THESE WOODS is designed to be played using a QR-enabled phone. For those who don't have access to one, you can look up Chapter and Woods Cards using the references on this page.
          </p>
        </div>
      </div>

      {/* Rules and References Section */}
      <div className="max-w-3xl mx-auto">
        <h2 
          className="text-3xl font-bold text-yellow-400 text-center mb-6"
          style={{ fontFamily: "'Dm Serif Display', serif" }}
        >
          Rules and References
        </h2>
        <div 
          style={{ fontFamily: "'League Spartan', sans-serif" }}
          className="text-[1.1rem] space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Core Rules */}
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <a 
                href="/woods-reference.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline cursor-pointer transition-colors block"
              >
                Core Rules (PDF)
              </a>
            </div>

            {/* Card Print-out */}
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <Link 
                to="/woods/print" 
                className="text-yellow-400 hover:text-yellow-300 underline cursor-pointer transition-colors block"
              >
                Card Print-out (PDFs)
              </Link>
            </div>

            {/* Chapter Card Reference */}
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <Link 
                to="/woods/chapters" 
                className="text-yellow-400 hover:text-yellow-300 underline cursor-pointer transition-colors block"
              >
                Chapter Card Reference
              </Link>
            </div>

            {/* Woods Card Reference */}
            <div className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors">
              <Link 
                to="/woods/cards" 
                className="text-yellow-400 hover:text-yellow-300 underline cursor-pointer transition-colors block"
              >
                Woods Card Reference
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WoodsLearn;
