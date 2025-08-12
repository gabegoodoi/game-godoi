import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import Unsigned from './Components/Unsigned';
import SiteInfo from './Components/SiteInfo';
import gabelogoPINK from './assets/gabelogoPINK.svg';
import Contact from './Components/Contact';
import diceRollSound from './assets/diceRollSound.mp3';
import pageTurnSound from './assets/pageTurnSound.mp3';
import Woods from './Components/Woods/Woods';
import WoodsLearn from './Components/Woods/WoodsLearn';
import WoodsPrint from './Components/Woods/WoodsPrint';
import WoodsCards from './Components/Woods/WoodsCards';
import WoodsChapters from './Components/Woods/WoodsChapters';
import SetUp from './Components/Woods/SetUp';
import SetUpQuickStart from './Components/Woods/SetUpQuickStart';
import Chapter1Inn from './Components/Woods/Chapter1Inn';
import Chapter2Thicket from './Components/Woods/Chapter2Thicket';
import Chapter3Mire from './Components/Woods/Chapter3Mire';
import Chapter4Gorge from './Components/Woods/Chapter4Gorge';
import Chapter5Heart from './Components/Woods/Chapter5Heart';
import Epilogue from './Components/Woods/Epilogue';
import EpilogueSuccess from './Components/Woods/EpilogueSuccess';
import Epilogue6 from './Components/Woods/Epilogue6';
import Epilogue1 from './Components/Woods/Epilogue1';
import Epilogue2 from './Components/Woods/Epilogue2';
import Epilogue3 from './Components/Woods/Epilogue3';
import Epilogue4 from './Components/Woods/Epilogue4';
import Epilogue5 from './Components/Woods/Epilogue5';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'party'>(() => {
    // Retrieve the theme from localStorage or default to 'dark'
    return (localStorage.getItem('theme') as 'light' | 'dark' | 'party') || 'dark';
  });
  

  useEffect(() => {
    // Set the body class to the current theme
    document.body.className = theme;

    // Store the current theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleLogoClick = () => {
    setRotate(true);

    const audio = new Audio(diceRollSound);
    audio.volume = 0.3;
    audio.play();

    setTimeout(() => setRotate(false), 1000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageClick = () => {
    const audio = new Audio(pageTurnSound);
    audio.volume = 0.2;
    audio.playbackRate = 2;
    audio.play();
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'light' | 'dark' | 'party');
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-2 ${
        theme === 'dark' || theme === 'party'
          ? 'text-white'
          : 'text-[#6e2614]'
      }`}
      style={{ fontFamily: "'Dm Serif Display', serif" }}
    >
      <nav
        className={`w-full fixed top-0 left-0 p-4 sm:p-2 ${
          theme === 'dark' || theme === 'party'
            ? 'bg-[#0a0503]/60'
            : 'bg-white/80'
        } backdrop-blur-md shadow-md ${
          theme === 'dark' || theme === 'party'
            ? 'border-[#2e0c04]'
            : 'border-gray-300'
        } z-50`}
      >
        <div className="px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={gabelogoPINK}
              className={`w-10 h-10 sm:w-8 sm:h-8 ${rotate ? 'rotate-animation' : ''}`}
              alt="Logo"
              onClick={handleLogoClick}
            />
          </Link>
          <div className="flex items-center gap-6 overflow-hidden">
            {/* Hamburger Menu for Small Screens */}
            <button
              className="sm:hidden text-teal-400 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* Links for Larger Screens */}
            <div className={`hidden sm:flex gap-6`}>
              <Link
                to="/resources"
                className="text-lg transition-colors whitespace-nowrap"
                onClick={handlePageClick}
              >
                Designer Resources
              </Link>
              <Link
                to="/available"
                className="text-lg transition-colors whitespace-nowrap"
                onClick={handlePageClick}
              >
                Available Games
              </Link>
              <Link
                to="/about"
                className="text-lg transition-colors whitespace-nowrap"
                onClick={handlePageClick}
              >
                About Me
              </Link>
              <Link
                to="/contact"
                className="text-lg transition-colors whitespace-nowrap"
                onClick={handlePageClick}
              >
                Contact
              </Link>
            </div>

            {/* Theme Dropdown */}
            <select
              value={theme}
              onChange={handleThemeChange}
              className="text-lg bg-transparent border border-teal-400 rounded-md px-2 py-1 text-teal-400 hover:border-amber-300 focus:outline-none"
            >
              <option value="dark">Dark Mode</option>
              <option value="light">Light Mode</option>
              <option value="party">Party Mode</option>
            </select>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col gap-4 mt-4">
            <Link
              to="/about"
              className="text-lg text-teal-400 hover:text-amber-300 transition-colors"
              onClick={() => {
                handlePageClick();
                setMenuOpen(false);
              }}
            >
              About
            </Link>
            <Link
              to="/available"
              className="text-lg text-teal-400 hover:text-amber-300 transition-colors"
              onClick={() => {
                handlePageClick();
                setMenuOpen(false);
              }}
            >
              Available Games
            </Link>
            <Link
              to="/resources"
              className="text-lg text-teal-400 hover:text-amber-300 transition-colors"
              onClick={() => {
                handlePageClick();
                setMenuOpen(false);
              }}
            >
              Designer Resources
            </Link>
            <Link
              to="/contact"
              className="text-lg text-teal-400 hover:text-amber-300 transition-colors"
              onClick={() => {
                handlePageClick();
                setMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      <div className="pt-20 w-full flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/available" element={<Unsigned />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/site-info" element={<SiteInfo />} />
          <Route path="/woods" element={<Woods />} />
          <Route path="/woods/learn" element={<WoodsLearn />} />
          <Route path="/woods/print" element={<WoodsPrint />} />
          <Route path="/woods/cards" element={<WoodsCards />} />
          <Route path="/woods/chapters" element={<WoodsChapters />} />
          <Route path="/woods/chapters/setup" element={<SetUp />} />
          <Route path="/woods/chapters/setup-quick" element={<SetUpQuickStart />} />
          <Route path="/woods/chapters/chapter1-inn" element={<Chapter1Inn />} />
          <Route path="/woods/chapters/chapter2-thicket" element={<Chapter2Thicket />} />
          <Route path="/woods/chapters/chapter3-mire" element={<Chapter3Mire />} />
          <Route path="/woods/chapters/chapter4-gorge" element={<Chapter4Gorge />} />
          <Route path="/woods/chapters/chapter5-heart" element={<Chapter5Heart />} />
          <Route path="/woods/chapters/epilogue" element={<Epilogue />} />
          <Route path="/woods/epilogue/success" element={<EpilogueSuccess />} />
          <Route path="/woods/epilogue/6" element={<Epilogue6 />} />
          <Route path="/woods/epilogue/1" element={<Epilogue1 />} />
          <Route path="/woods/epilogue/2" element={<Epilogue2 />} />
          <Route path="/woods/epilogue/3" element={<Epilogue3 />} />
          <Route path="/woods/epilogue/4" element={<Epilogue4 />} />
          <Route path="/woods/epilogue/5" element={<Epilogue5 />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

