// About.tsx
import RotStar from '../assets/RotStar.gif';

function About() {
  return (
    <div className="w-full min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <div className="text-left">
        <h2 className="text-5xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-24 h-24 mr-4 rotstar" />
            My Story
          </div>
        </h2>
        <div>
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-2xl pt-4 text-yellow-250"
          >
            I am a board game designer and software developer with a passion for creating unique, intuitive user experiences.
            <br></br>
            <br></br>
            I have a background in producing documentaries (having produced two Academy Award-winning short documentaries; <a href="https://www.youtube.com/watch?v=vPFkcoTfr7g">The Queen of Basketball</a> and <a href="https://www.youtube.com/watch?v=xttrkgKXtZ4">The Last Repair Shop</a>). I love to combine my technical skills with my creative problem-solving to bring projects to life.
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
            After my time at Breakwater Studios, I transitioned into freelance producing, line-producing, and project management, where I had the opportunity to work with a diverse range of clients and projects, including this recent Emmy-winning Tribeca-selected short film <a href="https://www.imdb.com/title/tt34219099/">The Hicks Happy Hour</a>.
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
            I started my career at Breakwater Studios, where I produced, project managed, and coordinated a variety of documentary and commercial projects. We created acclaimed films that resonated with audiences worldwide, and I honed my skills in storytelling, team collaboration, and delivering high-quality productions under tight deadlines.

            One of my proudest achievements was being part of the team that brought forth this <a href="https://www.youtube.com/watch?v=GB1IMeZBRMs">UNICEF documentary</a>, highlighting the COVAX initiative and the 75 year history of UNICEF amid the COIV-19 crisis. It was a humbling experience to contribute to a project that aimed to make a positive impact on global health and well-being. <a href="https://help.unicef.org/">Never a bad time to contribute to a good cause</a>!
          </p>
        </div>
      </div>

      <div className="text-left">
        <h3 className="text-2xl font-bold pt-4 text-yellow-300">
          <div className="flex items-center justify-start">
            <img src={RotStar} alt="Rotating Star" className="w-10 h-10 mr-4 rotstar" style={{ transform: 'scaleX(-1)' }} />
            <p >Check out my <a href="https://www.linkedin.com/in/gabegodoi/">LinkedIn</a> for more info.</p>
          </div>
        </h3>
      </div>
      
    </div>
  );
}
export default About;