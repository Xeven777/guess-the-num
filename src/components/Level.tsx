"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Level = () => {
  const router = useRouter();

  const [level, setLevel] = useState(3);

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLevel = parseInt(e.target.value, 10);
    console.log("Selected Level:", selectedLevel);
    setLevel(selectedLevel);
  };

  return (
    <div className="flex flex-col mt-4">
      <select
        title="levels"
        className="bg-zinc-800/50 rounded py-2 px-3"
        value={level}
        onChange={handleLevelChange}
      >
        <option value="3">Easy Peasy (3)</option>
        <option value="5">Umm Medium (5)</option>
        <option value="7">Damn Hard (7)</option>
      </select>

      <button
        type="button"
        className="btn"
        onClick={() => {
          router.push(`/game/${level}`);
        }}
      >
        play
      </button>
    </div>
  );
};

export default Level;
