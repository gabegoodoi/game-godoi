// About.tsx
import RotStar from '../assets/RotStar.gif';
import profile from '../assets/profile.png';
import ouch from '../assets/ouch.m4a';
import ouch2 from '../assets/ouch2.m4a';
import ouch3 from '../assets/ouch3.m4a';
import ouch4 from '../assets/ouch4.m4a';


function About() {
  
  const handlePicClick = () => {
    const sounds = [ouch, ouch2, ouch3, ouch4];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.volume = .3;
    audio.playbackRate = .9;
    audio.play();
  };

  return (
    <div className="w-full min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <div className="text-left">
        <h2 className="text-5xl font-bold pt-4 text-yellow-300">
          <div className="flex cursor-pointer items-center justify-start">
            <img src={profile} alt="Gabe pic" className="w-24 h-24 mr-4" onClick={handlePicClick}/>
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
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" />
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
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" style={{ transform: 'scaleX(-1)' }} />
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
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" style={{ transform: 'scaleX(-1)' }} />
            <p>Check out my <a href="https://www.linkedin.com/in/gabegodoi/">LinkedIn</a> for more info.</p>
          </div>
        </h3>
      </div>
      
    </div>
  );
}
export default About;