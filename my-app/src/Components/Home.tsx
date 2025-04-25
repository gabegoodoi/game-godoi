import About from './About';
import Resources from './Resources';
import Unsigned from './Unsigned';

function Home() {
  return (
    <div className="w-full min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-4 text-yellow-400">Welcome To Here!</h1>
      <div className="text-left">
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-2xl pt-4 text-yellow-250"
          >
            Hi, I'm Gabe Godoi and this is my board game website. I design games and this is a space I want to share some of my designs, thoughts, and updates with you.
          </p>
      </div>
      <About />
      <Unsigned />
      <Resources />
    </div>
  );
}
export default Home;