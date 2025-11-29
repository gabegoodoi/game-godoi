import { ReactNode } from 'react';

type Props = {
  title?: string;
  intro?: ReactNode;
  prompt: ReactNode;
};

export default function InnTemplate({ title, intro, prompt }: Props) {
  return (
    <div className="w-full min-h-screen p-8 text-yellow-400" style={{ fontFamily: "'Dm Serif Display', serif" }}>
      <h2 className="text-2xl font-semibold mb-3">{title ?? 'Character creation'}</h2>

      <div className="mb-4 space-y-4">
        {intro}
      </div>

  {prompt}

      <div className="mb-6 text-center text-sm text-yellow-300">————</div>

      <div className="mb-6 text-center text-sm text-yellow-300">⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖ ⧖</div>

      <div className="mb-6 text-center text-sm text-yellow-300">————</div>

      <div className="mb-4">
        <p className="text-lg">⇐ 📖</p>

        <h3 className="mt-4 font-semibold">Night falls…</h3>

        <p className="mt-2">When dinner is done, we strike the pact: tomorrow, together, we will set out on the long road through the Elder Wood.</p>

        <p className="mt-2">One by one, we retreat to our beds. Here, in the inn, the night is warm. But out there lurks the Wood, cold and dark. As we drift from consciousness, we shudder to think of the road ahead. Though none of us will speak them aloud, we have all heard the tales — stories of the demon-god who dwells at the Elder Wood’s very heart. It is said that this Lord of the Wood demands a toll from those who pass through His domain — a tribute wrought of bone, and sealed in blood. For while all of us may enter the Wood, not all of us will be permitted to leave it.</p>

        <p className="mt-2">We sleep like the dead.</p>

        <p className="mt-4">From now on, unless otherwise indicated, only the current Reader should flip and scan cards from the Path. It is the Reader’s responsibility to communicate rules fairly and in their entirety. If any traveller has trouble following the rules then they may also scan cards along with the Reader. However, this is not recommended, and may detract from the interpersonal element of the game.</p>

        <p className="mt-3">⇐ 📖</p>

        <p className="mt-4">When the party is ready to begin their journey, only the new Reader should flip over and scan the next card on the Path (in this case, Chapter II).</p>
      </div>
    </div>
  );
}
