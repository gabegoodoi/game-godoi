import InnTemplate from '../InnTemplate';

export default function BarkeepInn() {
  const prompt = (
    <div className="mb-6 p-6 rounded-lg border border-emerald-800 bg-emerald-900/70 text-emerald-100">
      <p className="font-semibold">Barkeep prompt</p>
      <p className="mt-3">...placeholder prompt for Barkeep...</p>
    </div>
  );

  const intro = (
    <p style={{ fontFamily: "'League Spartan', sans-serif" }} className="text-yellow-250 text-lg sm:text-xl leading-relaxed italic">
      ...existing Barkeep intro goes here...
    </p>
  );

  return <InnTemplate title="Character creation" intro={intro} prompt={prompt} />;
}
