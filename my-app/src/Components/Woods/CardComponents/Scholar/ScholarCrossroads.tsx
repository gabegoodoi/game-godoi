import { Link } from 'react-router-dom';

const slug = 'scholar';
const title = 'Scholar';
const chapters = [
  { path: `/${slug}/inn`, label: 'Chapter 1', name: 'The Inn' },
  { path: `/${slug}/thicket`, label: 'Chapter 2', name: 'The Thicket' },
  { path: `/${slug}/mire`, label: 'Chapter 3', name: 'The Mire' },
  { path: `/${slug}/gorge`, label: 'Chapter 4', name: 'The Gorge' },
  { path: `/${slug}/heart`, label: 'Chapter 5', name: 'The Heart of the Woods' },
];

export default function ScholarCrossroads(){
  return (
    <div className="p-8 text-yellow-400">
      <h1 className="text-4xl font-bold mb-4">The {title}: Crossroads</h1>
      <p className="mb-8">Where have you encountered this card?</p>
      <div className="space-y-4">
        {chapters.map(chapter => (
          <Link
            key={chapter.path}
            to={chapter.path}
            className="block bg-emerald-900 !text-white rounded-xl px-8 py-6 shadow-md hover:bg-emerald-950 transition text-center"
          >
            <span className="text-2xl font-bold block !text-white">{chapter.label}</span>
            <span className="text-base block mt-2 !text-white">{chapter.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}