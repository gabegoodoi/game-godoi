import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

function Woods() {
  return (
    <div className="w-full min-h-screen text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-4 text-yellow-400">We're Probably Gonna Die In These Woods</h1>
      <div className="text-left">
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-[1.3rem] text-center pt-4 text-yellow-250"
          >
            <i>We're Probably Gonna Die In These Woods</i> is a card-based roleplaying game for 4-6 players. Together, you play a group of travelers lost in the woods. This place is haunted by the ghosts of travelers past. By the end of your journey, it's likely one or all of you will be lost forever… 
            <br></br>
            <br></br>
            So, which of you will be claimed by the wood, and who will live to tell their tale? You — and the cards — decide.
          </p>
        </div>
        
        {/* Creator Credits */}
        <div className="text-center mt-12 mb-8">
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-[1.1rem] text-yellow-250 mb-4"
          >
            This game was originally created by
          </p>
          <div
            
            className="text-pink-400 space-y-1"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            <p >Gabe Godoi</p>
            <p >Sabrina Brennan Godoi</p>
            <p>Zu Quirke</p>
            <p>Mitchell Winkie</p>

          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/woods/learn">
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-lg transition-colors cursor-pointer"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              Learn to Play
            </Button>
          </Link>
        </div>
    </div>
  );
}
export default Woods;
