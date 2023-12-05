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
    <div className="flex flex-col">
      <select
        title="levels"
        className="bg-zinc-800 rounded-md py-1 px-3"
        value={level}
        onChange={handleLevelChange}
      >
        <option value="3">Easy Peasy (3)</option>
        <option value="5">Umm Medium (5)</option>
        <option value="7">Damn Hard (7)</option>
      </select>

      <button
        type="button"
        className="bg-rose-600 mt-3 rounded-md uppercase active:scale-95 hover:bg-rose-500 py-2 font-medium"
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
