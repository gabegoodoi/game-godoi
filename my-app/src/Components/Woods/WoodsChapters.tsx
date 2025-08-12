import { Link } from 'react-router-dom';

function WoodsChapters() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-6 py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-8 text-yellow-400 text-center">Chapter Cards</h1>
      
      {/* Description */}
      <div className="max-w-4xl mx-auto mb-12">
        <p
          style={{ fontFamily: "'League Spartan', sans-serif" }}
          className="text-[1.3rem] text-center leading-relaxed text-yellow-250"
        >
          Select a chapter card below to view detailed information and story elements for <i>We're Probably Gonna Die In These Woods</i>.
        </p>
      </div>

      {/* Chapter Cards Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Set Up */}
          <Link to="/woods/chapters/setup" className="group">
            <div className="bg-gradient-to-br from-black/30 to-black/50 rounded-lg p-6 text-center hover:from-black/40 hover:to-black/60 transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 
                className="text-lg font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Set Up
              </h3>
            </div>
          </Link>

          {/* Set Up (Quick Start) */}
          <Link to="/woods/chapters/setup-quick" className="group">
            <div className="bg-gradient-to-br from-black/30 to-black/50 rounded-lg p-6 text-center hover:from-black/40 hover:to-black/60 transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 
                className="text-lg font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Set Up (Quick Start)
              </h3>
            </div>
          </Link>

          {/* Chapter 1: The Inn */}
          <Link to="/woods/chapters/chapter1-inn" className="group">
            <div className="bg-gradient-to-br from-black/30 to-black/50 rounded-lg p-6 text-center hover:from-black/40 hover:to-black/60 transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 
                className="text-lg font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Chapter 1: The Inn
              </h3>
            </div>
          </Link>

          {/* Chapter 2: The Thicket */}
          <Link to="/woods/chapters/chapter2-thicket" className="group">
            <div className="bg-gradient-to-br from-black/30 to-black/50 rounded-lg p-6 text-center hover:from-black/40 hover:to-black/60 transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 
                className="text-lg font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Chapter 2: The Thicket
              </h3>
            </div>
          </Link>

          {/* Chapter 3: The Mire */}
          <Link to="/woods/chapters/chapter3-mire" className="group">
            <div className="bg-gradient-to-br from-black/30 to-black/50 rounded-lg p-6 text-center hover:from-black/40 hover:to-black/60 transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 
                className="text-lg font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Chapter 3: The Mire
              </h3>
            </div>
          </Link>

          {/* Chapter 4: The Gorge */}
          <Link to="/woods/chapters/chapter4-gorge" className="group">
            <div className="bg-gradient-to-br from-black/30 to-black/50 rounded-lg p-6 text-center hover:from-black/40 hover:to-black/60 transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 
                className="text-lg font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Chapter 4: The Gorge
              </h3>
            </div>
          </Link>

          {/* Chapter 5: The Heart of the Woods */}
          <Link to="/woods/chapters/chapter5-heart" className="group">
            <div className="bg-gradient-to-br from-black/30 to-black/50 rounded-lg p-6 text-center hover:from-black/40 hover:to-black/60 transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 
                className="text-lg font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                Chapter 5: The Heart of the Woods
              </h3>
            </div>
          </Link>

          {/* The Epilogue */}
          <Link to="/woods/chapters/epilogue" className="group">
            <div className="bg-gradient-to-br from-black/30 to-black/50 rounded-lg p-6 text-center hover:from-black/40 hover:to-black/60 transition-all duration-300 group-hover:scale-105 transform shadow-lg hover:shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 
                className="text-lg font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Dm Serif Display', serif" }}
              >
                The Epilogue
              </h3>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default WoodsChapters;
