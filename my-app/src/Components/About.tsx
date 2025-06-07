// About.tsx

import profile from '../assets/profile.png';
import RotStar from '../assets/RotStar.gif';

import move from '../assets/move.m4a';
import move2 from '../assets/move2.m4a';
import move3 from '../assets/move3.m4a';
import move4 from '../assets/move4.m4a';

import ouch from '../assets/ouch.m4a';
import ouch2 from '../assets/ouch2.m4a';
import ouch3 from '../assets/ouch3.m4a';
import ouch4 from '../assets/ouch4.m4a';

import fireSound from '../assets/fireSound.m4a';
import splash from '../assets/splash.mp3';
import sizzle from '../assets/sizzle.mp3';
import bucket from '../assets/bucket.gif';
import hot from '../assets/hot.m4a';
import relief from '../assets/relief.m4a';

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
    if (audioInstance) {
        // If an audio instance is already playing, do nothing
        return;
    }
    setShowCursor(true); // Show the custom cursor when the rotStar image is clicked
    setShowResetImage(true); // Show the reset image
    setHideImage(false); // Ensure the image is visible
    const audio = new Audio(fireSound);
    audio.volume = 0.3;
    audio.loop = true; // Enable looping
    audio.play();
    setAudioInstance(audio); // Store the audio instance in state

    const hotAudio = new Audio(hot);
    hotAudio.volume = 0.3;
    hotAudio.playbackRate = 2;
    hotAudio.play();

    document.body.style.cursor = 'grab'; // Hide the default cursor
  
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

    const reliefAudio = new Audio(relief);
    reliefAudio.volume = 0.3;
    reliefAudio.playbackRate = 1;
    reliefAudio.play();

    setShowCursor(false); // Reset the custom cursor
    setHideImage(true); // Trigger the animation to move the image off-screen
    if (audioInstance) {
      audioInstance.pause(); // Stop the audio
      audioInstance.currentTime = 0; // Reset the audio to the beginning
      setAudioInstance(null); // Reset the audio instance to allow reactivation
    }
    setTimeout(() => {
      setShowResetImage(false); // Hide the reset image after the animation completes
    }, 500); // Match the duration of the CSS transition

    document.body.style.cursor = 'default'; // Hide the default cursor
  };


  return (
    <div className="w-full min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <div className="text-left">
        <h2 className="text-5xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img
              src={profile}
              alt="Gabe pic"
              className="w-24 h-24 mr-4 cursor-pointer"
              onClick={handlePicClick}
              draggable="true" // Enable dragging
              onDragStart={() => {
                const sounds = [move, move2, move3, move4];
                const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
                const audio = new Audio(randomSound);
                audio.volume = 0.3;
                audio.playbackRate = 1;
                audio.play();
              }}
            />
            My Story
          </div>
        </h2>
        <div>
        <h3 className="text-2xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" onClick={handleRotStarClick}/>
            Game Design & Development
          </div>
        </h3>
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-2xl pt-4 text-yellow-250"
          >
          I design games to to empower people to connect, make lasting memories, and have fun doing it. That's the mission; crafting play experiences that bring people closer together.
          <br /><br />
          Since 2022 I’ve designed and co-designed over 30 games, signed publishing deals, and won the Dice Tower West Design Championship. I build physical and digital prototypes, write rulebooks, and relentlessly seek out the fun through playtest and iteration cycles.
        <br /><br />
        I work with clients to create unique experiences—like a tarot-inspired bookless, GM-less tabletop roleplaying game built with only a deck of cards and QR technology.
        <br /><br />
        These days, alongside game design, I work as a software engineer—building full-stack web applications and digital tools that enhance interactivity.
        <br /><br />
        <div>
          Outside of interactive media, I’m also an accomplished documentary producer, with credits on two Oscar-winning short films:  
          <a href="https://www.youtube.com/watch?v=vPFkcoTfr7g"> The Queen of Basketball</a> and  
          <a href="https://www.youtube.com/watch?v=xttrkgKXtZ4"> The Last Repair Shop</a>.
          <br /><br />
          Traveling the world, meeting people, and helping share their stories was a privilege—and it ultimately led me to games. Games are more than entertainment; they invite people to shape their own narratives and share them with others around the table.
        </div>

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
  I collaborated with a range of clients across film and digital media, including the recent Emmy-winning, 
  Tribeca-selected short film <a href="https://www.imdb.com/title/tt34219099/">The Hicks Happy Hour</a>.
          </p>
        </div>
      </div>

      <div className="text-left">
        <h3 className="text-2xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" onClick={handleRotStarClick}/>
            Producer @ Breakwater Studios for 5 years
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
        <h3 className="text-2xl font-bold pt-4 text-teal-400">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" style={{ transform: 'scaleX(-1)' }} onClick={handleRotStarClick}/>
            <p>Check out my <a href="https://www.linkedin.com/in/gabegodoi/">LinkedIn</a> for more info.</p>
          </div>
        </h3>
      </div>

      <div className="text-left">
        <h3 className="text-2xl font-bold pt-4 text-teal-400">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" style={{ transform: 'scaleX(-1)' }} onClick={handleRotStarClick}/>
            <p>Learn how this site was built <a href="https://www.gamegodoi.com/site-info/">here</a>.</p>
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