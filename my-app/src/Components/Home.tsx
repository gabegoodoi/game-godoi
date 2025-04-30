import Resources from './Resources';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="w-full min-h-screen text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-4 text-yellow-400">Welcome To Here!</h1>
      <div className="text-left">
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-[1.3rem] text-center pt-4 text-yellow-250"
          >
            This site has two purposes:
            <br></br>
            <br></br>
            First, to serve as a personal <Link to="/resources">Designer Resources</Link> hub for new board game designers.
            <br></br>
            <br></br>
            Second, to showcase a <Link to="/available">selection</Link> of my available designs. 
          </p>
        </div>
      <Resources />
    </div>
  );
}
export default Home;