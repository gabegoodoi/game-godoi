import { useState, useEffect } from 'react';
import drawSargeantSellSheet from '../assets/drawSargeantSellSheet.svg';
import trashTakesSellSheet from '../assets/trashTakesSellSheet.png';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint is 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  const handleModalOpen = (modalId: string) => {
    setOpenModal(modalId);
  };

  const handleModalClose = () => {
    setOpenModal(null);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="min-h-screen pt-4 text-pink-400"
      style={{
        fontFamily: "'Dm Serif Display', serif",
      }}
    >
      <h1 className="text-6xl font-bold pb-4 text-yellow-400">Unsigned Games</h1>

      <div>
        <div id="what-is-this-page" className="text-left">
          <h2 className="text-3xl font-bold">
            <div
              className="flex items-center justify-start mb-5 text-[#dea335]"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              If you're interested in learning more about any of these titles please feel free to reach out.
            </div>
          </h2>
        </div>

        {/* Dropdown menu as a button for all screen sizes */}
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
                <a href="#sarge" className="block !text-teal-400 hover:!text-teal-400/70">
                  Draw Sergeant
                </a>
              </li>
              <li className="p-2">
                <a href="#takes" className="block !text-teal-400 hover:!text-teal-400/70">
                  Trash Takes
                </a>
              </li>
              <li className="p-2">
                <a href="#elder" className="block !text-teal-400 hover:!text-teal-400/70">
                  Elder
                </a>
              </li>
              <li className="p-2">
                <a href="#frank" className="block !text-teal-400 hover:!text-teal-400/70">
                  Let's Be Frank
                </a>
              </li>
              <li className="p-2">
                <a href="#dog" className="block !text-teal-400 hover:!text-teal-400/70">
                  Dog Means Square
                </a>
              </li>
              <li className="p-2">
                <a href="#disasterpieces" className="block !text-teal-400 hover:!text-teal-400/70">
                  Disasterpieces
                </a>
              </li>
              <li className="p-2">
                <a href="#dishes" className="block !text-teal-400 hover:!text-teal-400/70">
                  Mrs. Witch's Sizzlin' Dishes
                </a>
              </li>
              <li className="p-2">
                <a href="#tea" className="block !text-teal-400 hover:!text-teal-400/70">
                  What's The Tea?
                </a>
              </li>
              <li className="p-2">
                <a href="#crocodile" className="block !text-teal-400 hover:!text-teal-400/70">
                  Crocodile Tiers
                </a>
              </li>
              <li className="p-2">
                <a href="#puppetiers" className="block !text-teal-400 hover:!text-teal-400/70">
                  Puppetiers
                </a>
              </li>
              <li className="p-2">
                <a href="#bricks" className="block !text-teal-400 hover:!text-teal-400/70">
                  Bricks & Tricks
                </a>
              </li>
              <li className="p-2">
                <a href="#pondcala" className="block !text-teal-400 hover:!text-teal-400/70">
                  Pondcala
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Sections for each game */}
      <div
        id="sarge"
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Draw Sergeant</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            A drawing party game with hilariously terrible art, where the worst artists can succeed as long as they're good at giving and taking instructions.
          </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={drawSargeantSellSheet}
              alt="Draw Sergeant Sell Sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              loading="lazy"
              onClick={() => handleModalOpen('drawSargeant')}
            />
          </div>

          {/* List Column */}
          <div
            className="pl-5 pr-5 divide-white sm:text-center text-center md:text-left text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
              <li className="pt-1 md:pt-4 sm:pt-1 lg:pt-1">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                3-8
              </li>
              <li className="pt-1 md:pt-4 sm:pt-1">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                10+
              </li>
              <li className="pt-1 md:pt-4 sm:pt-1">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                20-25 minutes
              </li>
              <li className="pt-1 md:pt-4 sm:pt-1">
                <span
                  className="font-bold cursor-pointer"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=T1DQNrswnVs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gameplay video
                  </a>
                </span>
              </li>
            </ul>
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Trash Takes</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            A pen & paper party game about fitting in by threading the needle between absurd and tame opinions in an ever-heightening spectrum.
          </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={trashTakesSellSheet}
              alt="Trash Takes Sell Sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              loading="lazy"
              onClick={() => handleModalOpen('trashTakes')}
            />
          </div>

          {/* List Column */}
          <div
            className="pl-5 pr-5 divide-white sm:text-center text-center md:text-left text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
              <li className="pt-1 md:pt-4 sm:pt-1 lg:pt-1">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                3-10
              </li>
              <li className="pt-1 md:pt-4 sm:pt-1">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                18+
              </li>
              <li className="pt-1 md:pt-4 sm:pt-1">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                25 minutes
              </li>
            </ul>
          </div>
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Elder</div>
          <span
              className="text-1x"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontWeight: 'normal', // Makes the text less bold
                fontSize: isMobile ? '.6em' : '1.4rem', // Adjusts the text size to be smaller
              }}
            >
              (co-design with Zu Quirke,{' '}
              <a
                href="https://www.sabrinabrennancomedy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sabrina Brennan
              </a>
              , & Mitchell Winkie)
            </span>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            A GM-less card-based one-shot TTRPG with QR-integration. Built for new players to jump in without ever opening a rulebook.{' '}
                <span className="text-yellow-300">D&D</span> meets{' '}
                <span className="text-yellow-300">Mario Party</span> with a{' '}
                <span className="text-yellow-300">Sleepy Hollow</span> atmosphere.          
            
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={elderSellSheet}
              alt="Elder rulebook"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('elder')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                4-6
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                13+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                90 minutes
              </li>
            </ul>
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Let's Be Frank</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
             Work together to communicate taking on the roles of the various body parts of Frankenstein's monster in this{' '}
                <span className="text-yellow-300">Charades</span> meets{' '}
                <span className="text-yellow-300">Telephone</span> family party game.       
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={frankSellSheet}
              alt="Frank sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('frank')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
            <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                3-18
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                8+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                10-25 minutes
              </li>
              <li className="pt-4">
                <span
                  className="font-bold cursor-pointer"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=gGMJDXE6VKI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gampeplay video
                  </a>
                </span>
              </li>
            </ul>
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Dog Means Square</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
             A family-friendly party game where language evolves, drawing gets weird, and communication is everything — can your team use the lingo to instruct the drawing before the time runs out?
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={dogSellSheet}
              alt="Dog Means Square sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('dog')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
            <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                2-8
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                10+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                25 minutes
              </li>
            </ul>
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Disasterpieces</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
             A cooperative party game where bad art makes great memories. Can you work as a team to give piece by piece instructions to your artist.
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={keepScrolling}
              alt="Disasterpieces sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('disasterpieces')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
            <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                2-10
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                8+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                20 minutes
              </li>
            </ul>
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Mrs. Witch's Sizzlin' Dishes</div>
          <span
              className="text-1x"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontWeight: 'normal', // Makes the text less bold
                fontSize: isMobile ? '.6em' : '1.4rem', // Adjusts the text size to be smaller
              }}
            >
              (co-design with{' '}
                <a href="https://philgrossauthor.com/" target="_blank" rel="noopener noreferrer">
                Phil Gross
              </a>)
            </span>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            A cooperative deduction game for your ears.
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={dishesSellSheet}
              alt="Mrs. Witch's Sizzlin' Dishes sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('dishes')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                2-5
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                6+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                15 minutes
              </li>
              <li className="pt-4">
                <span
                  className="font-bold cursor-pointer"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=beVfFxRu3rY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gampeplay video
                  </a>
                </span>
              </li>
            </ul>
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">What's The Tea?
          </div>
          <span
              className="text-1x"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontWeight: 'normal', // Makes the text less bold
                fontSize: isMobile ? '.6em' : '1.4rem', // Adjusts the text size to be smaller
              }}
            >
              (co-design with{' '}
                <a href="https://philgrossauthor.com/" target="_blank" rel="noopener noreferrer">
                Phil Gross
              </a>)
            </span>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            A real-time gossip party game built on answering questions with questions
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={teaSellSheet}
              alt="What's The Tea sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('tea')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                4-10
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                10+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                25 minutes
              </li>
              <li className="pt-4">
                <span
                  className="font-bold cursor-pointer"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=jLbHKsu1HI8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gampeplay video
                  </a>
                </span>
              </li>
            </ul>
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
        id="disasterpieces"
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Disasterpieces</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
             A cooperative party game where bad art makes great memories. Can you work as a team to give piece by piece instructions to your artist.
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={keepScrolling}
              alt="Disasterpieces sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('disasterpieces')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
            <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                2-10
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                8+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                20 minutes
              </li>
            </ul>
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
        id="crocodile"
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Crocodile Tiers</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            Party social deduction game where players make a tier list together and accuse eachother of making suspicious choices.
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={crocodileSellSheet}
              alt="Crocodile Tiers sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('crocodile')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
            <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                3-10
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                10+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                30 minutes
              </li>
            </ul>
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Puppetiers</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            <span className="text-yellow-300">Wavelength</span> meets{' '}
            <span className="text-yellow-300">So Clover</span> in this cooperative party game where players make a tier list with very specific groupings, then work together to get the groupings right.
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={puppetiersSellSheet}
              alt="Puppetiers sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('puppetiers')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
            <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                2-10
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                10+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                20 minutes
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Crocodile Tiers */}
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Bricks & Tricks</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            <span className="text-yellow-300">Jenga</span> meets{' '}
            <span className="text-yellow-300">trick-taking</span> in this tactical dexterity game where blocks act as your deck of cards.
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={bricksSellSheet}
              alt="Bricks & Tricks sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('bricks')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
            <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                2-5
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                7+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                15 minutes
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Crocodile Tiers */}
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
        className="text-left rounded-lg shadow-lg mt-5 pb-5 pt-5"
        style={{
          scrollMarginTop: '100px',
          marginBottom: '5vw',
        }}
      >
        <h2
          className="text-4xl font-bold text-amber-300 text-center pb-3"
          style={{
            borderRadius: '10px 10px 0 0',
          }}
        >
          <div className="flex items-center justify-center">Pondcala</div>
        </h2>
        <div
          className="mt-4 rounded-lg shadow-lg grid sm:grid-rows-[auto auto auto] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: isMobile ? `"text" "list" "image"` : `"text image list"`,
          }}
        >
          {/* Text Column */}
          <div
            className="pl-5 pr-5 flex-1 text-center md:text-left lg:text-left xl:text-left items-start text-2xl text-pink-400 font-semibold divide-white sm:text-[1.75rem] md:text-[1.5rem] lg:text-4xl text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'text',
            }}
          >
            Serene <span className="text-yellow-300">mancala-like</span> tactical game in a bowl of water.
            </div>

          {/* Image Column */}
          <div
            className="flex items-start justify-center"
            style={{
              gridArea: 'image',
            }}
          >
            <img
              src={pondcalaSellSheet}
              alt="Pondcala sell sheet"
              className="h-auto w-full max-w-[300px] rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleModalOpen('pondcala')}
            />
          </div>

          {/* List Column */}
          <div
            className="text-center md:text-left divide-white sm:text-center text-[1.3rem] sm:text-[1.6rem] md:text-[1.56rem] lg:text-[1.75rem] text-pink-200"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              gridArea: 'list',
            }}
          >
            <ul>
            <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Player Count:
                </span>{' '}
                2-4
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Age Range:
                </span>{' '}
                7+
              </li>
              <li className="pt-4">
                <span
                  className="font-bold text-pink-300"
                  style={{ transition: 'color 0.3s ease-in-out' }}
                >
                  Duration:
                </span>{' '}
                15 minutes
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Crocodile Tiers */}
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
};
export default Unsigned;