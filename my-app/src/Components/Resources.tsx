import { useState } from 'react';
import RotStar from '../assets/RotStar.gif';

function Resources() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-4 text-yellow-400">Resources</h1>

      {/* Dropdown menu */}
      <div
        className="bg-[#0a0503]/60 border border-white/10 rounded-lg mb-5 pb-3"
        style={{
          fontFamily: "'League Spartan', sans-serif",
        }}
      >
        <button
          onClick={handleDropdownToggle}
          className="w-full pt-4 text-2xl font-semibold text-pink-300 rounded-lg shadow-lg"
        >
          {isDropdownOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {isDropdownOpen && (
          <ul className="mt-2 rounded-lg shadow-lg text-yellow-300 text-2xl">
            <li className="p-2">
              <a href="#learning-games" className="block !text-teal-400 hover:!text-teal-400/70">
                Playing
              </a>
            </li>
            <li className="p-2">
              <a href="#learning-jargon" className="block !text-teal-400 hover:!text-teal-400/70">
                Terminology
              </a>
            </li>
            <li className="p-2">
              <a href="#looking-to_learn" className="block !text-teal-400 hover:!text-teal-400/70">
                Podcasts
              </a>
            </li>
            <li className="p-2">
              <a href="#learning-by-listening" className="block !text-teal-400 hover:!text-teal-400/70">
                Reading
              </a>
            </li>
            <li className="p-2">
              <a href="#gathering-components" className="block !text-teal-400 hover:!text-teal-400/70">
                Components
              </a>
            </li>
            <li className="p-2">
              <a href="#making-prototypes" className="block !text-teal-400 hover:!text-teal-400/70">
                Prototyping
              </a>
            </li>
            <li className="p-2">
              <a href="#documentation" className="block !text-teal-400 hover:!text-teal-400/70">
                Documentation
              </a>
            </li>
            <li className="p-2">
              <a href="#structuring-playtests" className="block !text-teal-400 hover:!text-teal-400/70">
                Playtesting
              </a>
            </li>
            <li className="p-2">
              <a href="#finding-playtesters" className="block !text-teal-400 hover:!text-teal-400/70">
                Playtesters
              </a>
            </li>
            <li className="p-2">
              <a href="#finding-communities" className="block !text-teal-400 hover:!text-teal-400/70">
                Communities
              </a>
            </li>
            <li className="p-2">
              <a href="#digitizing" className="block !text-teal-400 hover:!text-teal-400/70">
                Digitizing
              </a>
            </li>
            <li className="p-2">
              <a href="#contests" className="block !text-teal-400 hover:!text-teal-400/70">
                Contests
              </a>
            </li>
            <li className="p-2">
              <a href="#conventions" className="block !text-teal-400 hover:!text-teal-400/70">
                Conventions
              </a>
            </li>
            <li className="p-2">
              <a href="#publishers" className="block !text-teal-400 hover:!text-teal-400/70">
                Publishers
              </a>
            </li>
            <li className="p-2">
              <a href="#more" className="block !text-teal-400 hover:!text-teal-400/70">
                More
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Content sections */}
      <div id="what-is-this-page" className="text-left">
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar" />
            What is this page?
          </div>
        </h2>
        <p className="text-2xl text-left" style={{ fontFamily: "'League Spartan', sans-serif" }}>
          If you want to design games, you should try! If you're just getting started and don't know what to do there are a lot of great resources out there. Below are some that helped me.
        </p>
      </div>

      <div id="learning-games" className="text-left" style={{ scrollMarginTop: '100px' }}>
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rot-star-flipped rotstar" />
            Learning Games
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left"> 
            As a designer, playing lots of board games is super helpful. It teaches me new ideas, shows me what works and what doesn’t, and helps me grow my skills. I recommend checking out games at local board game cafes or stores—just dive into any rulebook you find. If that’s not possible, there are online ways to do it too.
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.youtube.com/channel/UCGK9n7svoIjuaQfRIBJXkqQ", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Watch It Played</span> - Quickly and clearly learning the rules to games in through learn-to-play video.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://boardgamearena.com/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Board Game Arena</span> - Play a vast library of digitized board games, most of which include tutorials.
          </li>
        </ul>
      </div>

      <div id="learning-jargon" className="text-left" style={{ scrollMarginTop: '100px' }}>
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar"/>
            Learning Jargon
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left"> 
            Games are full of terminology that can be confusing at first but can also serve as a great shorthand for communicating more complex concepts, mechanisms, systems, and ideas.
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://www.doalg.co.uk/post/the-abc-of-board-gaming-terms", "_blank")}
            >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>ABCs of Board Game Terms</span> - A comprehensive list of board game terminology.
            </li>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://boardgamegeek.com/browse/boardgamemechanic", "_blank")}
            >
                <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Board Game Geek - Mechanics List</span> - A list of board game mechanics.
            </li>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://entrogames.com/board-game-glossary/", "_blank")}
            >
                <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Entro Games - Board Game Glossary</span> - A glossary of board game vocabulary definitions.
            </li>
        </ul>
      </div>

      <div id="looking-to-learn" className="text-left" style={{ scrollMarginTop: '100px' }}>
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rot-star-flipped rotstar" />
            Looking to Learn
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left"> 
            I love reading about game design. Here are some of my favorite musings.
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://koboldpress.com/kpstore/product/complete-kobold-guide-to-game-design/", "_blank")}
            >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Kobold's Guide to Game Design</span> - A collection of essays from some of the best game designers in the industry. It covers a wide range of topics, from game mechanics to storytelling.
            </li>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://daniel.games/", "_blank")}
            >
                <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Daniel Piechnick Articles</span> - Piechnick's thoughts on how to design board games that people will love, or that a publisher would want to publish.
            </li>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://mitpress.mit.edu/9780262542692/characteristics-of-games/", "_blank")}
            >
                <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Characteristics of Games</span> - A book that explores the nature of games and what makes them fun.
            </li>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://objectionable.net/games-agency-as-art/", "_blank")}
            >
                <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Games: Agency As Art</span> - An article and book by philosopher C. Thi Nguyen that explores the concept of agency in games.
            </li>
        </ul>
      </div>

      <div id="learning-by-listening" className="text-left" style={{ scrollMarginTop: '100px' }}>
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar"/>
            Learning by Listening
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left"> 
            I've learned a lot just from throwing on a podcast on a commute or while I do the dishes. Here are some of my favorites.
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://jellybean.games/funproblems/", "_blank")}
            >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Fun Problems</span> - A podcast about game design and the challenges that come with it. Super accessible, straightforward, insightful, and fun.
            </li>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://podcasts.apple.com/us/podcast/magic-the-gathering-drive-to-work-podcast/id580709168", "_blank")}
            >
                <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Drive To Work</span> - A podcast by game designer Mark Rosewater, who has been designing Magic: The Gathering for over 20 years. He shares his insights and experiences in the industry.
            </li>
            <li
                className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
                onClick={() => window.open("https://ludology.libsyn.com/", "_blank")}
            >
                <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Ludology</span> - A podcast about game design and the theory behind it. 
            </li>
        </ul>
      </div>


      <div id="gathering-components" className="text-left" style={{ scrollMarginTop: '100px' }}>
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
          <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rot-star-flipped rotstar" />
          Gathering Components
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left"> 
           The most fun way to get those components you're looking to build your prototype out of is a good old fashioned trip to Good Will or a local thrift store. Second-hand board games are often extremely cheap and can be pilfered for their components. THat being said, some of my key direct suppliers might seem pretty straightforward but worth mentioning.
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://locations.michaels.com/", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Michaels</span> - A craft store that has a wide range of materials for prototyping, honestly I get inspired seeing all the potential components and remembering that games are a tactile medium.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.officedepot.com/storelocator/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Office Depot</span> - has a wide range of materials useful for prototyping. Don't sleep on laminent and expo markers.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://ultrapro.com/collections/card-sleeves?srsltid=AfmBOoqnZoVC2qlfzq6C2oZL9oiNxs7YAB7oSrT1VRR8rJqB8JOExMlN", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Ultra Pro</span> - Not the cheapest, but I just like the quality of their sleeves. I use them for my prototypes and they have a wide range of sizes.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.diceemporium.com/product-category/6-sided-dice/?orderby=price&min_price=0&max_price=10", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Dice Emporium</span> - A great place to get dice for your prototypes. They have a wide range of colors and sizes.
          </li>
        </ul>
      </div>

      <div id="making-prototypes" className="text-left" style={{ scrollMarginTop: '100px' }}>
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar"/>
            Making Prototypes
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left"> 
            Graphic design and layout time. Get that prototype to the table as quickly as possible with these tools.
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://canva.com/", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Canva Pro</span> - A graphic design tool that allows you to create professional-looking designs quickly and easily. I use it for all my prototypes, it also offers a huge assortment of graphics, photos, fonts, and backgrounds.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://game-icons.net/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Game Icons</span> - A site that offers a wide range of icons that are perfect for prototype usage.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://component.studio/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Component Studio</span> - Sort of a cross between a cloud-drive of spreadsheets and a design tool. I use it to iterate rapidly and create print and play files containing my component designs. 
          </li>
        </ul>
      </div>

      <div id="documentation" className="text-left" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-4xl font-bold pt-4 text-yellow-300">
            <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rot-star-flipped rotstar" />
            Making Documentation
            </div>
            </h2>
            <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
                In order to make a game, you'll want to have documents for rules, components, and other things. Here are some templates.
            </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://docs.google.com/document/d/1k1Pa6A4Sf7BtzZMuWeao5ODVKo9xiX_KJGXRmlgf4Ak/edit?usp=sharing", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Template Rulebook
            </span> - A sparse and useful Google Doc template for a rulebook.
          </li>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://docs.google.com/spreadsheets/d/1392V1P-DE9o9Ye3vGKcNHzmp_ZzS6pn2RHVPMGYY8Vw/edit?usp=sharing", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Template To Do List
            </span> - A simple Google Doc template for a board game to-do list.
          </li>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://docs.google.com/spreadsheets/d/1L6fQAuLOggd4tPwzpzXnWSmJkBMl75ZMTudf6OFu3c8/edit?usp=sharing ", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Template Research Sheet
            </span> - A simple Google Doc template for a board game research sheet.
          </li>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://docs.google.com/spreadsheets/d/16qDVGorWqkvMcOfi9Nyoa0eGfiH8j3Su8ZVt68K05X4/edit?usp=sharing", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Template Playtest Tracking Sheet
            </span> - A simple Google Doc template for a board game playtest tracking sheet.
          </li>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://docs.google.com/forms/d/12DlO-7YF4-y2fw5CDN0kqepcLj7jN7PyOvX_AqVs79c/copy", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Template Playtest Feedback Google Form
            </span> -  A simple template for a board game playtest feedback form.
          </li>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://docs.google.com/spreadsheets/d/1HpQK4JFZnQSaPFcSM10LYsLLa0Z95rEE9C30F7RWFpA/edit?usp=sharing", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Template Design Tracking Sheet
            </span> -  Once you have many designs up and running simultaneously it's useful to have a way to track the status of each and where all of their other documentation is stored. I use something like this to keep track of my designs and ideas.
          </li>
        </ul>
      </div> 


      <div id="structuring-playtests" className="text-left" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-4xl font-bold pt-4 text-yellow-300">
            <div className="flex items-center justify-start">
                <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar"/>
                Structuring Playtests
            </div>
            </h2>
            <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
                Playtesting is a crucial part of the game design process. It allows you to see how your game works in practice and identify areas for improvement. There are a lot of ways to structure playtests, but I have found that the best way is to have a clear goal for each playtest and to be open to feedback. Here are some guides that I have found helpful:
            </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.thegamespeople.co.uk/resources-for-game-designers/graphical-playtest-feedback-form", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
                The Games People - Graphical Playtest Feedback Form
            </span> - A template that allows you to collect feedback from playtesters in a structured way.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://www.reddit.com/r/tabletopgamedesign/comments/4ddx4d/ludology_podcast_game_design_checklist/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Ludology Podcast - Game Design Checklist
            </span> - A checklist of questions to ask yourself before and after playtesting.
          </li>
        </ul>
      </div>  

        <div id="finding-playtesters" className="text-left" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-4xl font-bold pt-4 text-yellow-300">
            <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rot-star-flipped rotstar" />
            Finding Playtesters
            </div>
            </h2>
            <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
                The conventional wisdom is to playtest your prototypes as early as possible and as often as possible. I'm based in Los Angeles so I attend our local designer events at <a href="https://www.meetup.com/first-to-play-los-angeles-board-game-playtesters/" target="_blank" rel="noopener noreferrer" >First Play LA</a>. Beyond that, finding or building groups of folks who are willing to regularly play unfinished, rough, or sometimes untested designs is part of the process and has proven incredibly valuable to the iteration of my games and growth as a designer.
            </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.breakmygame.com/weekly-online-playtesting", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Break My Game
            </span> - Discord driven community that primarilly organizes digital playtests.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://cardboardedison.com/playtest-groups", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Cardboard Edison - Calendar
            </span> - Site with tons of useful tools for designers, including a calendar of ongoing digital playtesting events and local playtests by region.
          </li>
        </ul>
      </div>       

      <div id="finding-communities" className="text-left" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-4xl font-bold pt-4 text-yellow-300">
            <div className="flex items-center justify-start">
                <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar"/>
                Finding Communities
            </div>
            </h2>
            <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
                Connecting with other designers and learning about what problems they're looking to solve daily is a fast-track to understanding the process. Here in LA I like the <a href="https://discord.gg/n8k2n5qH" target="_blank" rel="noopener noreferrer">LA Playtest Exchange Discord group</a>.
            </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
            <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.ttgda.org/", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Tabletop Game Designer Association - The TTGDA
            </span> - A organization dedicated to supporting and promoting tabletop game designers. They offer resources and events. It is a paid membership, but worth it down the line - for instance they aided me in contract review as a member.
          </li>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.facebook.com/groups/tabletop.game.designer.guild/", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Tabletop Game Designer Guild
            </span> - Facebook group dedicated to questions related specifically to designing the tabletop game prototypes and initial game concepts.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://www.reddit.com/r/tabletopgamedesign/", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Tabletop Game Design Subreddit
            </span> - Reddit community dedicated to tabletop game design.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://www.reddit.com/r/BoardgameDesign/", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Board Game Design Subreddit
            </span> - It's not a typo, both this Reddit community and the one above exist. This one is a bit smaller (25k members compared to the 80k plus above).
          </li>
        </ul>
      </div>   

      <div id="digitizing" className="text-left" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-4xl font-bold pt-4 text-yellow-300">
            <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rot-star-flipped rotstar" />
            Digitizing Your Prototype
            </div>
            </h2>
            <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
                If you want to send your game to far-off playtesters, publishers or maybe just many people at one time, you may want to make it digital. There are a lot of ways to do this  <a href="https://cardboardedison.com/virtual-tabletops" target="_blank" rel="noopener noreferrer">(see Cardboard Edison's list here )</a>, but for me there's only been two I use regularly.
            </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://screentop.gg/ ", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Screentop
            </span> - A free and open-source virtual tabletop platform that allows you to digitize and playtest your game online with others. It has a user-friendly interface and supports a wide range of games. It doesn't have physics however.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://www.tabletopsimulator.com/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Tabletop Simulator
            </span> - Not going to sugarcoat it, I have a lot of gripes with this paid virtual tabletop platform that allows you to create and playtest your game online with others. It does have a physics engine so it's got that going for it, but most  importantly, it's the industry standard for digital playtesting so best get accustomed to it.
          </li>
        </ul>
      </div>    

      <div id="contests" className="text-left" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-4xl font-bold pt-4 text-yellow-300">
            <div className="flex items-center justify-start">
                <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar" />
                Making a Game of It
            </div>
            </h2>
            <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
                There are a number of competitions that you can submit to that can help you get your game in front of publishers and other designers. They also often have fun prompts if you're looking for that extra motivation to get your idea juices going.
            </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
            <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://boardgamegeek.com/forum/974620/bgg/design-contests", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Board Game Geek Contests
            </span> - A list of ongoing and past contests on BGG.
          </li>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://cardboardedison.com/contests", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Cardboard Edison Contests
            </span> - A list of ongoing and past contests that Cardboard Edison tracks.
          </li>
        </ul>
      </div>   

      <div id="conventions" className="text-left" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-4xl font-bold pt-4 text-yellow-300">
            <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rot-star-flipped rotstar" />
            Going To Conventions
            </div>
            </h2>
            <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
                If you want to get your game in front of publishers, conventions are a great way to do it. There are a lot of conventions out there, but There's a couple of important ones in the US worth mentioning.
            </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.gencon.com/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              Gen Con
            </span> - The largest tabletop gaming convention in the US, held annually in Indianapolis. It can be overwhelming, but it's a good place to meet publishers and playtest your game.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://unplugged.paxsite.com/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            PAX Unplugged
            </span> - Held annually in Philadelphia, this convention is focused on tabletop gaming and is a great place to meet publishers and playtest your game. This is my personal favorite and the one I have had the most success at.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://www.originsgamefair.com/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Origins Game Fair
            </span> - Held annually in Columbus. I have yet to attend, conventions are an expensive endeavor, choosing your spots and being strategic is part of the process.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://www.unpub.org/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Unpub Events
            </span> - A series of events held throughout the year (at all of the conventions above and more) where designers can playtest their games with the public. These events are a great way to get feedback on your game and meet other designers.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://tabletop.events/protospiel/home", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            Protospiel Events
            </span> - I hear great things about this series of events held throughout the year where designers can playtest their games with other designers, have yet to attend though.
          </li>
        </ul>
      </div>   

      <div id="publishers" className="text-left" style={{ scrollMarginTop: '100px' }}>
            <h2 className="text-4xl font-bold pt-4 text-yellow-300">
            <div className="flex items-center justify-start">
                <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar" />
                Finding Publishers
            </div>
            </h2>
            <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left">
                If the goal is to get the game on shelves and in the hands of players, finding a publisher is the next step. From cold emailing to finding connections through a friend of a friend to randomly bumping into inventor relations folks at conventions - there's a lot of ways you could meet the right person to pitch your game, but a good starting place was through these heavy-duty directories.
            </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li 
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://cardboardedison.com/directoryinfo", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
              The Compendium
            </span> - A directory of publishers in the tabletop industry put together by the Cardboard Edison team. Pay to use, but worth it.
          </li>
          <li 
          className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
          onClick={() => window.open("https://tabletoppublishers.com/ ", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>
            The Dossier
            </span> - A directory of publishers in the tabletop industry put together by Chris Backe in the UK. Also pay to use, but worth it.
          </li>
        </ul>
      </div> 

      <div id="more" className="text-left" style={{ scrollMarginTop: '100px' }}>
        <h2 className="text-4xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
          <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rot-star-flipped rotstar" />
          Missing something?
          </div>
        </h2>
        <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-2xl text-left"> 
            Thanks for reading! I must admit this whole great big scroll you find yourself nearing the end of has not been comprehensive rather personal. Others in the community have put in a lot of work to centralize information though, so if you want more than I can offer, I would love to point you in the direction of some of the best resources out there.
        </p>
        <ul className="mt-4 border border-white rounded-lg divide-y divide-white text-2xl text-pink-200" style={{ backgroundColor: '#021631', fontFamily: "'League Spartan', sans-serif" }}>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://cardboardedison.com/about", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Cardboard Edison</span> - An educational resource hub offering industry news and the annual Cardboard Edison Award for unpublished game prototypes. Run by the tireless married, blogging, designing, duo Chris and Suzanne Zinsli.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://entrogames.com/how-to-create-amazing-ideas-for-future-board-games/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Entro Games</span> - Provides extensive and detailed free resources to onboard new and veteran game designers alike from the designer perspective of Chris Backe.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://stonemaiergames.com/kickstarter/how-to-design-a-tabletop-game/", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Stonemaier Games</span> - Guide to designing a game from the perrspective of highly respected independent publishing company, Stonemaier Games.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.youtube.com/@AdaminWales/playlists", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Adam In Wales</span> - Designer & vlogger, Adam Porter, walks you through many many many aspects of game design through his youtube channel.
          </li>

          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://boardgamedesignlab.com/getting-started/", "_blank")}
          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Board Game Design Lab</span> - This is really a community, exploring the site you'll find a resource-forward blog and podcast run by designer Gabe Barrett, as well as a welcoming facebook group dedicated to board game design.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://inspirationtopublication.wordpress.com/the-steps-for-board-games/", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>The Steps</span> - A comprehensive list of steps to take when designing a board game with the intention of reaching publication written by the design duo of Sen Foong Lim & Jay Cormier.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://www.breakmygame.com/designer-resources", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Break My Game</span> - A Discord community dedicated to playtesting (mostly digitally) with a great starter guide for incoming designers.
          </li>
          <li
            className="p-4 rounded-lg hover:bg-[#032e2b] transition cursor-pointer"
            onClick={() => window.open("https://boardgamegeek.com/forum/1530031/bgg/design-theory", "_blank")}

          >
            <span className="text-blue-500 font-bold hover:text-teal-400" style={{ transition: 'color 0.3s ease-in-out' }}>Board Game Geek</span> - I really don't know how you could have gotten here without knowing BGG, but if you don't know it is the central site of all things board games. It's forums are slightly tricky to navigate but there's valuable info at every corner.
          </li>

        </ul>
      </div>  
      
    </div>
  );
}

export default Resources;