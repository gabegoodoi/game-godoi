import { useState } from 'react';
import drawSargeantSellSheet from '../assets/drawSargeantSellSheet.svg';
import trashTakesSellSheet from '../assets/trashTakesSellSheet.svg';
import elderSellSheet from '../assets/elderSellSheet.svg';
import frankSellSheet from '../assets/frankSellSheet.png';
import dogSellSheet from '../assets/dogSellSheet.svg';
import dishesSellSheet from '../assets/dishesSellSheet.svg';
import teaSellSheet from '../assets/teaSellSheet.svg';
import crocodileSellSheet from '../assets/crocodileSellSheet.svg';
import puppetiersSellSheet from '../assets/puppetiersSellSheet.svg';
import bricksSellSheet from '../assets/bricksSellSheet.svg';
import pondcalaSellSheet from '../assets/pondcalaSellSheet.svg';

import keepScrolling from '../assets/keepScrolling.svg';

function Unsigned() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleModalOpen = (modalId: string) => {
    setOpenModal(modalId);
  };

  const handleModalClose = () => {
    setOpenModal(null);
  };

  return (
    <div
      className="min-h-screen p-4 text-pink-400"
      style={{
        fontFamily: "'Dm Serif Display', serif",
      }}
    >
      <h1 className="text-6xl font-bold pb-4 text-yellow-400">Unsigned Games</h1>

      <div>
        <nav className=" p-4 rounded-lg shadow-lg">
          <ul className="flex flex-wrap justify-center gap-5 text-2xl font-semibold text-yellow-300">
            <li className="flex-1 text-center md:flex-none">
              <a href="#sarge" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Draw Sergeant</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#takes" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Trash Takes</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#elder" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Elder</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#frank" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Let's Be Frank</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#dog" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Dog Means Square</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#disasterpieces" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Disasterpieces</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#dishes" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Mrs. Witch's Sizzlin' Dishes</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#tea" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">What's The Tea?</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#crocodile" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Crocodile Tiers</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#puppetiers" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Puppetiers</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#bricks" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Bricks & Tricks</a>
            </li>
            <li className="flex-1 text-center md:flex-none">
              <a href="#pondcala" className="!text-teal-400 hover:!text-teal-600 !transition !duration-300">Pondcala</a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div id="what-is-this-page" className="text-left">
        <h2 className="text-3xl font-bold pb-4">
            <div className="flex items-center justify-start" style={{ fontFamily: "'League Spartan', sans-serif" }}>
            If you're interested in learning more about any of these titles please feel free to reach out.
            </div>
        </h2>
      </div>

      <div
        id="sarge"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'
          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div className="flex items-center justify-center">
            Draw Sergeant
          </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                    A drawing party game with hilariously terrible art, where the worst artists can succeed as long as they're good at giving and taking instructions. 
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 3-8
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 10+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 20-25 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={drawSargeantSellSheet}
              alt="Draw Sergeant Sell Sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              loading="lazy"
              onClick={() => handleModalOpen('drawSargeant')}
            />
          </div>

          {/* Video Column */}
          <div className="flex-1 flex justify-center">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/T1DQNrswnVs"
              title="Draw Sergeant Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal for Draw Sergeant */}
      {openModal === 'drawSargeant' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={drawSargeantSellSheet}
            alt="Draw Sergeant Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}

<div
        id="takes"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div className="flex items-center justify-center">
            Trash Takes
          </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                    A pen & paper party game about fitting in by threading the needle between absurd and tame opinions in an ever-heightening spectrum.
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 3-10
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 18+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 25 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={trashTakesSellSheet}
              alt="Trash Takes Sell Sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('trashTakes')}
            />
          </div>

          {/* Third Column */}
        </div>
      </div>

      {/* Modal for Trash Takes */}
      {openModal === 'trashTakes' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={trashTakesSellSheet}
            alt="Trash Takes Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}

<div
        id="elder"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div
            className="flex items-baseline justify-center"
            style={{
              display: 'flex',
              alignItems: 'baseline', // Aligns text to the same bottom line
            }}
          >
            Elder&nbsp;
            <span
              className="text-1x"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontWeight: 'normal', // Makes the text less bold
                fontSize: '1.4rem', // Adjusts the text size to be smaller
              }}
            >
              (co-design with Zu Quirke, <a href="https://www.sabrinabrennancomedy.com/"target="_blank" rel="noopener noreferrer">Sabrina Brennan</a>, & Mitchell Winkie)
            </span>
          </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                    A GM-less card-based one-shot TTRPG with QR-integration. Built for new players to jump in without ever opening a rulebook. <span className="text-yellow-300">D&D</span> meets <span className="text-yellow-300">Mario Party</span> with a <span className="text-yellow-300">Sleepy Hollow</span> atmosphere. 
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 4-6
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 13+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 90 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={elderSellSheet}
              alt="Elder rulebook"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('elder')}
            />
          </div>

        </div>
      </div>

      {/* Modal for Elder */}
      {openModal === 'elder' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={elderSellSheet}
            alt="Elder Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}



<div
        id="frank"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div className="flex items-center justify-center">
            Let's Be Frank
          </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                Work together to communicate taking on the roles of the various body parts of Frankenstein's monster in this <span className="text-yellow-300">Charades</span> meets <span className="text-yellow-300">Telephone</span> family party game. 
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 3-18
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 8+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 10-25 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={frankSellSheet}
              alt="Frank sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('frank')}
            />
          </div>

          <div className="flex-1 flex justify-center">

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/gGMJDXE6VKI?si=PigObjVJaSuUnSiy"
              title="Let's Be Frank Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

        </div>
      </div>

      {/* Modal for Let's Be Frank */}
      {openModal === 'frank' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={frankSellSheet}
            alt="Frank Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}


<div
        id="dog"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div className="flex items-center justify-center">
            Dog Means Square
          </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                A family-friendly party game where language evolves, drawing gets weird, and communication is everything — can your team use the lingo to instruct the drawing before the time runs out?
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 2-8
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 10+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 25 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={dogSellSheet}
              alt="Dog Means Square sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('dog')}
            />
          </div>

        </div>
      </div>

      {/* Modal for Dog Means Square */}
      {openModal === 'dog' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={dogSellSheet}
            alt="Dog Means Square Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      
      <div
        id="disasterpieces"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div className="flex items-center justify-center">
            Disasterpieces
          </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                The cooperative party game where bad art makes great memories. Can you work as a team to give piece by piece instructions to your artist.
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 2-10
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 8+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 20 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={keepScrolling}
              alt="Disasterpieces sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('disasterpieces')}
            />
          </div>

        </div>
      </div>

      {/* Modal for Disasterpieces */}
      {openModal === 'disasterpieces' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={keepScrolling}
            alt="Disasterpieces Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}

<div
        id="dishes"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div
            className="flex items-baseline justify-center"
            style={{
              display: 'flex',
              alignItems: 'baseline', // Aligns text to the same bottom line
            }}
          >
            Mrs. Witch's Sizzlin' Dishes&nbsp;
            <span
              className="text-1x"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontWeight: 'normal', // Makes the text less bold
                fontSize: '1.4rem', // Adjusts the text size to be smaller
              }}
            >
              (co-design with <a href="https://philgrossauthor.com/" target="_blank" rel="noopener noreferrer">Phil Gross</a>)
            </span>
          </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                A cooperative deduction game for your ears.
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 2-5
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 6+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 15 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={dishesSellSheet}
              alt="Mrs. Witch's Sizzlin' Dishes sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('dishes')}
            />
          </div>

          <div className="flex-1 flex justify-center">
  <a
    href="https://www.youtube.com/watch?v=beVfFxRu3rY"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full max-w-xl"
  >
    <div className="relative rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://img.youtube.com/vi/beVfFxRu3rY/hqdefault.jpg"
        alt="Mrs. Witch's Sizzlin' Dishes Video"
        className="w-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <span className="text-white text-lg font-semibold" style={{ fontFamily: "'League Spartan', sans-serif" }}>
          Watch 3-minute video on Youtube.
        </span>
      </div>
    </div>
  </a>
</div>


        </div>
      </div>

      {/* Modal for Mrs. Witch's Sizzlin' Dishes */}
      {openModal === 'dishes' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={dishesSellSheet}
            alt="Mrs. Witch's Sizzlin' Dishes Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}

<div
        id="tea"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div
            className="flex items-baseline justify-center"
            style={{
              display: 'flex',
              alignItems: 'baseline', // Aligns text to the same bottom line
            }}
          >
            What's The Tea?&nbsp;
            <span
              className="text-1x"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontWeight: 'normal', // Makes the text less bold
                fontSize: '1.4rem', // Adjusts the text size to be smaller
              }}
            >
              (co-design with <a href="https://philgrossauthor.com/">Phil Gross</a>)
            </span>
          </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                A real-time gossip party game built on answering questions with questions
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 4-10
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 10+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 25 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={teaSellSheet}
              alt="What's The Tea sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('tea')}
            />
          </div>

          <div className="flex-1 flex justify-center">
            <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/jLbHKsu1HI8?si=qroq9J5TVRv4fiT3"
            title="Let's Be Frank Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
            ></iframe>
        </div>


        </div>
      </div>

      {/* Modal for What's The Tea */}
      {openModal === 'tea' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={teaSellSheet}
            alt="What's The Tea Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}

<div
        id="crocodile"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div
            className="flex items-baseline justify-center"
            style={{
              display: 'flex',
              alignItems: 'baseline', // Aligns text to the same bottom line
            }}
          >
            Crocodile Tiers
        </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                Party social deduction game where players make a tier list together and accuse eachother of making suspicious choices.
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 3-10
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 10+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 30 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={crocodileSellSheet}
              alt="Crocodile Tiers sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('crocodile')}
            />
          </div>

        </div>
      </div>

      {/* Modal for Crocodile Tiers */}
      {openModal === 'crocodile' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={crocodileSellSheet}
            alt="Crocodile Tiers Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}

      
<div
        id="puppetiers"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div
            className="flex items-baseline justify-center"
            style={{
              display: 'flex',
              alignItems: 'baseline', // Aligns text to the same bottom line
            }}
          >
            Puppetiers
        </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                <span className="text-yellow-300">Wavelength</span> meets <span className="text-yellow-300">So Clover</span> in this cooperative party game where players make a tier list with very specific groupings, then work together to get the groupings right.
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 2-10
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 10+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 20 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={puppetiersSellSheet}
              alt="Puppetiers sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('puppetiers')}
            />
          </div>

        </div>
      </div>

      {/* Modal for Puppetiers */}
      {openModal === 'puppetiers' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={puppetiersSellSheet}
            alt="Puppetiers Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}

<div
        id="bricks"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div
            className="flex items-baseline justify-center"
            style={{
              display: 'flex',
              alignItems: 'baseline', // Aligns text to the same bottom line
            }}
          >
            Bricks & Tricks
        </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                <span className="text-yellow-300">Jenga</span> meets <span className="text-yellow-300">trick-taking</span> in this tactical dexterity game where blocks act as your deck of cards.
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 2-5
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 7+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 15 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={bricksSellSheet}
              alt="Bricks & Tricks sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('bricks')}
            />
          </div>

        </div>
      </div>

      {/* Modal for Bricks & Tricks */}
      {openModal === 'bricks' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={bricksSellSheet}
            alt="Bricks & Tricks Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}


<div
        id="pondcala"
        className="text-left rounded-lg shadow-lg m-5"
        style={{
            scrollMarginTop: '100px',
            background: 'linear-gradient(to bottom, #021631,rgb(1, 41, 47)',
            marginBottom: '5vw'

          }}
      >
        <h2 className="text-4xl font-bold p-4 text-amber-300 text-center" style={{
          background: 'linear-gradient(to top right,black, rgb(34, 18, 1),rgb(68, 21, 27),  rgb(34, 18, 1), rgb(48, 8, 12))',
          borderRadius: '10px 10px 0 0'
        }}>
          <div
            className="flex items-baseline justify-center"
            style={{
              display: 'flex',
              alignItems: 'baseline', // Aligns text to the same bottom line
            }}
          >
            Pondcala
        </div>
        </h2>
        <div className="mt-4 p-6 rounded-lg shadow-lg flex flex-wrap gap-4" >
          {/* Text Column */}
          <div className="flex-1 text-lg text-pink-400">
            <ul className="divide-white text-2xl text-pink-200" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                <li className="p-4 text-pink-400 font-semibold">
                <span className="text-yellow-300">Mancala-like</span> game in a bowl of water.
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Player Count:</span> 2-4
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Age Range:</span> 7+
                </li>
                <li className="p-4">
                    <span className="font-bold text-pink-300" style={{ transition: 'color 0.3s ease-in-out' }}>Duration:</span> 15 minutes
                </li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center">
            <img
              src={pondcalaSellSheet}
              alt="Pondcala sell sheet"
              className="h-[50vh] w-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('pondcala')}
            />
          </div>

        </div>
      </div>

      {/* Modal for Pondcala */}
      {openModal === 'pondcala' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <img
            src={pondcalaSellSheet}
            alt="Pondcala Sell Sheet Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      
    </div>
  );
}
export default Unsigned;