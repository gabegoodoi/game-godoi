import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import UnderConstruction from './Components/UnderConstruction';


function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#1f0b06] to-[#120603]" style={{ fontFamily: "'Dm Serif Display', serif" }}>
     <nav className="w-full fixed top-0 left-0 p-4 flex gap-6 bg-[#0a0503]/60 backdrop-blur-md shadow-md border-b border-[#2e0c04]">
        <Link to="/" className="relative text-2xl !text-teal-400 hover:text-amber-300 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-300 after:transition-all after:duration-300">
          Home
        </Link>
        <Link to="/about" className="relative text-2xl !text-teal-400 hover:text-amber-300 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-300 after:transition-all after:duration-300">
          About
        </Link>
        <Link to="/blog" className="relative text-2xl !text-teal-400 hover:text-amber-300 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-300 after:transition-all after:duration-300">
          Blog
        </Link>
        <Link to="/resources" className="relative text-2xl !text-teal-400 hover:text-amber-300 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-300 after:transition-all after:duration-300">
          Design Resources
        </Link>
      </nav>

      <div className="pt-20 w-full flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

