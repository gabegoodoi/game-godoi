import InnTemplate from '../InnTemplate';

export default function MoonInn() {
  const prompt = (
    <div className="mb-6 p-6 rounded-lg border border-emerald-800 bg-emerald-900/70 text-emerald-100">
      <p className="font-semibold">Moon prompt</p>
      <p className="mt-3">...placeholder prompt for Moon...</p>
    </div>
  );

  const intro = (
    <div className="p-8 text-yellow-400">
      <h1 className="text-4xl font-bold mb-4">Moon: The Inn</h1>
      <p>Crossroads content for The Inn will go here.</p>
    </div>
  );

  return <InnTemplate title="Character creation" intro={intro} prompt={prompt} />;
}
