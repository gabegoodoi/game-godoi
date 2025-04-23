import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import UnderConstruction from './Components/UnderConstruction';
import Unsigned from './Components/Unsigned';
import gabelogo from './assets/gabelogo.svg';


function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#1f0b06] to-[#120603]" style={{ fontFamily: "'Dm Serif Display', serif" }}>
     <nav className="w-full fixed top-0 left-0 p-4 flex gap-6 bg-[#0a0503]/60 backdrop-blur-md shadow-md border-b border-[#2e0c04] z-50">
        <Link to="/" className="relative text-2xl !text-teal-400 hover:text-amber-300 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-300 after:transition-all after:duration-300">
        <img src={gabelogo} className="w-10 h-10" alt="Logo" />
        </Link>
        <Link to="/about" className="relative text-2xl !text-teal-400 hover:text-amber-300 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-300 after:transition-all after:duration-300">
          About
        </Link>
        <Link to="/unsigned" className="relative text-2xl !text-teal-400 hover:text-amber-300 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-300 after:transition-all after:duration-300">
          Unsigned Games
        </Link>
        <Link to="/resources" className="relative text-2xl !text-teal-400 hover:text-amber-300 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-300 after:transition-all after:duration-300">
          Designer Resources
        </Link>
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

