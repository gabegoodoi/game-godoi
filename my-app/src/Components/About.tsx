// About.tsx
import RotStar from '../assets/RotStar.gif';
import fireSound from '../assets/fireSound.m4a';
import splash from '../assets/splash.mp3';
import sizzle from '../assets/sizzle.mp3';
import bucket from '../assets/bucket.gif';
import profile from '../assets/profile.png';
import ouch from '../assets/ouch.m4a';
import ouch2 from '../assets/ouch2.m4a';
import ouch3 from '../assets/ouch3.m4a';
import ouch4 from '../assets/ouch4.m4a';
import { useEffect, useState } from 'react';


function About() {
  const [showCursor, setShowCursor] = useState(false); // State to control custom cursor visibility
  const [showResetImage, setShowResetImage] = useState(false); // State to control reset image visibility
  const [hideImage, setHideImage] = useState(false); // State to control the animation for hiding the image
  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement | null>(null); // State to store the audio instance

  useEffect(() => {
    if (!showCursor) return;

    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.position = 'absolute';
    cursor.style.pointerEvents = 'none';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.pageX}px`; // Use pageX to account for scroll
      cursor.style.top = `${e.pageY}px`; // Use pageY to account for scroll
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, [showCursor]);

  const handleRotStarClick = () => {
    setShowCursor(true); // Show the custom cursor when the rotStar image is clicked
    setShowResetImage(true); // Show the reset image
    setHideImage(false); // Ensure the image is visible
    const audio = new Audio(fireSound);
    audio.volume = 0.3;
    audio.loop = true; // Enable looping
    audio.play();
    setAudioInstance(audio); // Store the audio instance in state
  };

  const handlePicClick = () => {
    const sounds = [ouch, ouch2, ouch3, ouch4];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.volume = 0.3;
    audio.playbackRate = 0.9;
    audio.play();
  };

  const handleResetCursor = () => {
    const audioSplash = new Audio(splash);
    audioSplash.volume = 0.3;
    audioSplash.play();

    const audioSizzle = new Audio(sizzle);
    audioSizzle.volume = 0.1;
    audioSizzle.playbackRate = 12;
    audioSizzle.play();

    setShowCursor(false); // Reset the custom cursor
    setHideImage(true); // Trigger the animation to move the image off-screen
    if (audioInstance) {
      audioInstance.pause(); // Stop the audio
      audioInstance.currentTime = 0; // Reset the audio to the beginning
    }
    setTimeout(() => {
      setShowResetImage(false); // Hide the reset image after the animation completes
    }, 500); // Match the duration of the CSS transition
  };
  return (
    <div className="w-full min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <div className="text-left">
        <h2 className="text-5xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={profile} alt="Gabe pic" className="w-24 h-24 mr-4 cursor-pointer" onClick={handlePicClick}/>
            My Story
          </div>
        </h2>
        <div>
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-2xl pt-4 text-yellow-250"
          >
            I am a board game designer and software developer with a passion for bringing people together through interactive experiences to make lasting memories.
            <br></br>
            <br></br>
            <div>
            Before transitioning into tech and games, I worked as a documentary producer — with credits on two Oscar-winning short films: 
              <a href="https://www.youtube.com/watch?v=vPFkcoTfr7g"> The Queen of Basketball</a> and 
              <a href="https://www.youtube.com/watch?v=xttrkgKXtZ4"> The Last Repair Shop</a>. 
            </div>
          </p>
        </div>
      </div>

      

      <div className="text-left">
        <h3 className="text-2xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" onClick={handleRotStarClick}/>
            Worked @ Breakwater Studios for 5 years
          </div>
        </h3>
        <div>
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-2xl pt-4 text-yellow-250"
          >
            I got my start at Breakwater Studios, where I wore many hats — producing, coordinating, and managing 
  award-winning documentary and commercial projects.
  <br /><br />
  One highlight was our <a href="https://www.youtube.com/watch?v=GB1IMeZBRMs">UNICEF documentary</a> on the COVAX initiative, celebrating 75 years of UNICEF’s global impact during the COVID-19 crisis. 
  It was an honor to help tell such an important story. 
  (<a href="https://help.unicef.org/">Support UNICEF</a> if you can — always a good cause.)
          </p>
        </div>
      </div>


      <div className="text-left">
        <h3 className="text-2xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" style={{ transform: 'scaleX(-1)' }} onClick={handleRotStarClick}/>
            Freelance Producer & Project Manager for 3 years
          </div>
        </h3>
        <div>
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-2xl pt-4 text-yellow-250"
          >
            After five years at Breakwater Studios, I moved into freelance producing and project management. 
  I’ve collaborated with a range of clients across film and digital media, including the recent Emmy-winning, 
  Tribeca-selected short film <a href="https://www.imdb.com/title/tt34219099/">The Hicks Happy Hour</a>.
          </p>
        </div>
      </div>

      <div className="text-left">
        <h3 className="text-2xl font-bold pt-4 text-teal-400">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" style={{ transform: 'scaleX(-1)' }} onClick={handleRotStarClick}/>
            <p>Check out my <a href="https://www.linkedin.com/in/gabegodoi/">LinkedIn</a> for more info.</p>
          </div>
        </h3>
      </div>

      {/* Conditionally render the reset cursor image */}
      {showResetImage && (
        <img
          src={bucket} // Replace with your desired image
          alt="Reset Cursor"
          className={`fixed bottom-4 right-4 w-16 h-16 cursor-pointer transition-transform duration-1000 ${
            hideImage ? 'translate-x-full' : ''
          }`}
          onMouseEnter={handleResetCursor}
        />
      )}
    </div>
  );
}

export default About;