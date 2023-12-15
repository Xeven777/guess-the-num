import Level from "@/components/Level";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-[600px] mx-auto max-w-6xl flex-col items-center justify-between py-24 px-2">
      <div className="mx-auto border px-12 py-16 rounded-lg border-rose-500 bg-zinc-950/60 neu">
        <h1 className="md:text-6xl text-4xl mb-8 font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-zinc-200 via-zinc-100 to-transparent tracking-tight text-center ">
          Guess the Number !
        </h1>
        <div className="flex flex-col">
          <h2 className="text-xl">Choose Difficulty :</h2>
          <p className="text-zinc-400 mb-2">Number of rounds</p>
          <Level />
        </div>
      </div>
    </main>
  );
}
