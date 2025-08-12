function WoodsCards() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-6 py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-8 text-yellow-400 text-center">Card References</h1>
      
      {/* Coming Soon Message */}
      <div className="max-w-4xl mx-auto mb-12">
        <p
          style={{ fontFamily: "'League Spartan', sans-serif" }}
          className="text-[1.3rem] text-center leading-relaxed text-yellow-250"
        >
          Chapter and Woods Card references will be available here soon! This page will contain detailed information about all the cards in <i>We're Probably Gonna Die In These Woods</i>.
        </p>
      </div>

      {/* Placeholder Sections */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-black/20 rounded-lg p-6">
          <h2 
            className="text-2xl font-bold text-yellow-400 text-center mb-4"
            style={{ fontFamily: "'Dm Serif Display', serif" }}
          >
            Chapter Cards
          </h2>
          <p 
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-center text-yellow-250"
          >
            Reference guide for Chapter Cards coming soon...
          </p>
        </div>

        <div className="bg-black/20 rounded-lg p-6">
          <h2 
            className="text-2xl font-bold text-yellow-400 text-center mb-4"
            style={{ fontFamily: "'Dm Serif Display', serif" }}
          >
            Woods Cards
          </h2>
          <p 
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-center text-yellow-250"
          >
            Reference guide for Woods Cards coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

export default WoodsCards;
