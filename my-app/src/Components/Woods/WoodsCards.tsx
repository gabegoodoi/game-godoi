import { Link } from 'react-router-dom';

function WoodsCards() {
  return (
    <div className="w-full min-h-screen text-pink-400 px-6 py-8" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-5xl sm:text-6xl font-bold pb-8 text-yellow-400 text-center">Which card dost thou seek?</h1>

      <div className="max-w-3xl mx-auto space-y-10">
        {/* Scrolls Section */}
        <div className="bg-black/20 rounded-lg p-6 border-2 border-yellow-400/30">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-4" style={{ fontFamily: "'Dm Serif Display', serif" }}>Scrolls</h2>
              <ol className="list-decimal pl-6 text-yellow-250 text-lg sm:text-xl space-y-1" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                {[
                  'The Helpless', 'The Wet Nurse', 'The Bride', 'The Groom', 'The Devoted', 'The Peddler', 'The Scholar', 'The Blacksmith', 'The Strongman', 'The Courier', 'The Warden', 'The Butcher', 'The Sovereign'
                ].map(card => (
                  <li key={card}>
                    <Link to={`/woods/${card.toLowerCase().replace(/^the /, '').replace(/ /g, '-')}/crossroads`} className="hover:underline text-yellow-250 hover:text-yellow-400">
                      {card}
                    </Link>
                  </li>
                ))}
              </ol>
        </div>

        {/* Moons Section */}
        <div className="bg-black/20 rounded-lg p-6 border-2 border-yellow-400/30">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-4" style={{ fontFamily: "'Dm Serif Display', serif" }}>Moons</h2>
              <ol className="list-decimal pl-6 text-yellow-250 text-lg sm:text-xl space-y-1" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                {[
                  'The Forgotten', 'The Sacrifice', 'The Nymph', 'The Mystic', 'The Cultist', 'The Crone', 'The Raven', 'The Wildman', 'The Trees', 'The Waters', 'The Stones', 'The Wind', 'The Moon'
                ].map(card => (
                  <li key={card}>
                    <Link to={`/woods/${card.toLowerCase().replace(/^the /, '').replace(/ /g, '-')}/crossroads`} className="hover:underline text-yellow-250 hover:text-yellow-400">
                      {card}
                    </Link>
                  </li>
                ))}
              </ol>
        </div>

        {/* Cups Section */}
        <div className="bg-black/20 rounded-lg p-6 border-2 border-yellow-400/30">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-4" style={{ fontFamily: "'Dm Serif Display', serif" }}>Cups</h2>
              <ol className="list-decimal pl-6 text-yellow-250 text-lg sm:text-xl space-y-1" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                {[
                  'The Fool', 'The Bard', 'The Lovers', 'The Barkeep', 'The Swindler', 'The Convict', 'The Hanged Man', 'The Starved', 'The Infected', 'The Drowned', 'The Thief', 'The Torturer', 'The Assassin'
                ].map(card => (
                  <li key={card}>
                    <Link to={`/woods/${card.toLowerCase().replace(/^the /, '').replace(/ /g, '-')}/crossroads`} className="hover:underline text-yellow-250 hover:text-yellow-400">
                      {card}
                    </Link>
                  </li>
                ))}
              </ol>
        </div>

        {/* Wildcard Section */}
        <div className="bg-black/20 rounded-lg p-6 border-2 border-yellow-400/30">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-4" style={{ fontFamily: "'Dm Serif Display', serif" }}>Wildcard</h2>
              <ol className="list-decimal pl-6 text-yellow-250 text-lg sm:text-xl space-y-1" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                {[{num:0,card:'The Tutorial'},{num:13,card:'The Triplets'}].map(({num,card}) => (
                  <li key={card}>
                    <Link to={`/woods/${card.toLowerCase().replace(/^the /, '').replace(/ /g, '-')}/crossroads`} className="hover:underline text-yellow-250 hover:text-yellow-400">
                      {num}. {card}
                    </Link>
                  </li>
                ))}
              </ol>
        </div>
      </div>
    </div>
  );
}

export default WoodsCards;
