import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import UnderConstruction from './Components/UnderConstruction';
import Unsigned from './Components/Unsigned';
import gabelogo from './assets/gabelogo.svg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#1f0b06] to-[#120603] px-4 sm:px-2" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <nav className="w-full fixed top-0 left-0 p-4 sm:p-2 bg-[#0a0503]/60 backdrop-blur-md shadow-md border-b border-[#2e0c04] z-50">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={gabelogo} className="w-10 h-10 sm:w-8 sm:h-8" alt="Logo" />
          </Link>
          <button
            className="text-teal-400 sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
          <div className="hidden sm:flex gap-6">
            <Link to="/about" className="text-lg !text-teal-400 hover:!text-amber-300 transition-colors">
              About
            </Link>
            <Link to="/unsigned" className="text-lg !text-teal-400 hover:!text-amber-300 transition-colors">
              Unsigned Games
            </Link>
            <Link to="/resources" className="text-lg !text-teal-400 hover:!text-amber-300 transition-colors">
              Designer Resources
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div className="flex flex-col mt-4 gap-4 sm:hidden z-50 bg-[#0a0503] p-4 rounded-md shadow-lg">
            <Link to="/about" className="text-lg !text-teal-400 hover:!text-amber-300 transition-colors">
              About
            </Link>
            <Link to="/unsigned" className="text-lg !text-teal-400 hover:!text-amber-300 transition-colors">
              Unsigned Games
            </Link>
            <Link to="/resources" className="text-lg !text-teal-400 hover:!text-amber-300 transition-colors">
              Designer Resources
            </Link>
          </div>
        )}
      </nav>

      <div className="pt-20 w-full flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/unsigned" element={<Unsigned />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

