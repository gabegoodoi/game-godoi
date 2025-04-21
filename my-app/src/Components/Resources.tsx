import RotStar from '../assets/RotStar.gif';

function Resources() {
  return (
    <div className="w-full min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-4 text-yellow-400">Resources</h1>
      <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4" />
            What is this page?
          </div>
        </h2>
      <p className="text-2xl text-left" style={{ fontFamily: "'League Spartan', sans-serif" }}>
        If you want to design games, you should try! If you're just getting started and don't know what to do there are a lot of great resources out there. Below are some that helped me. This isn't comprehensive, so if you find some super helpful resource that I don't have listed here please reach out so I can check it out myself and possibly add it to this page.
      </p>
      
      
      <div className="text-left">
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4" style={{ transform: 'scaleX(-1)' }}/>
            Learning Games
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left"> 
            As a designer, I've found that it's important to play games on the market. It helps me expand my vocabulary as a designer, broadening my toolkit and learning from the successes and failures of others in the field. 
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.location.href = "https://www.youtube.com/channel/UCGK9n7svoIjuaQfRIBJXkqQ"}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Watch It Played</span> - Quickly and clearly learning the rules to games in through learn-to-play video.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.location.href = "https://boardgamearena.com/"}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Board Game Arena</span> - Play a vast library of digitized board games, most of which include tutorials.
          </li>
        </ul>
      </div>

            <div className="text-left">
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4" style={{ transform: 'scaleX(-1)' }}/>
            Playtesting Games
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
            The conventional wisdom is to playtest your prototypes as early as possible and as often as possible. I'm based in Los Angeles so I attend our local designer events at <a href="https://www.meetup.com/first-to-play-los-angeles-board-game-playtesters/">First Play LA</a>. Beyond that, finding or building groups of folks who are willing to regularly play unfinished, rough, or sometimes untested designs is part of the process and has proven incredibly valuable to the iteration of my games and growth as a designer.
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.location.href = "https://www.breakmygame.com/weekly-online-playtesting"}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Break My Game
            </span> - Discord driven community that primarilly organizes digital playtests.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.location.href = "https://cardboardedison.com/playtest-groups"}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Cardboard Edison - Calendar
            </span> - Site with tons of useful tools for designers, including a calendar of ongoing digital playtesting events and local playtests by region.
          </li>
        </ul>
      </div>       
    </div>
  );
}
export default Resources;