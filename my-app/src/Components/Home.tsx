import Resources from './Resources';

function Home() {
  return (
    <div className="w-full min-h-screen p-4 text-pink-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h1 className="text-6xl font-bold pb-4 text-yellow-400">Welcome To Here!</h1>
      <div className="text-left">
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-2xl pt-4 text-yellow-250"
          >
            This site showcases my collection of unsigned game designs and serves as a resource hub for new designers, 
            offering tools, links, and personal insights that I wish I had when starting out.
          </p>
        </div>
      <Resources />
    </div>
  );
}
export default Home;