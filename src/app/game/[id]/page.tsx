"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: { id: string };
};

const Page = ({ params: { id } }: Props) => {
  const router = useRouter();
  const [guessesTaken, setGuessesTaken] = useState<number>(0);
  const level = Number(id);
  const [gameResult, setGameResult] = useState("");
  const [num, setNum] = useState<number>();
  const guessTotal = level;
  const [gamePlay, setGamePlay] = useState(true);
  const [guessList, setGuessList] = useState<number[]>([]);
  const [remarkList, setRemarkList] = useState<string[]>([]);
  const highLimit = level === 3 ? 10 : level === 5 ? 50 : 100;
  const [randomNumber, setRandomNumber] = useState(() =>
    Number((Math.random() * highLimit + 1).toFixed(0))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (num !== undefined) {
      if (num < 0 || num > highLimit) {
        alert("Please enter a valid number between 0 and " + highLimit);
      } else {
        setGuessesTaken(guessesTaken + 1);
        setGuessList([...guessList, num]);

        if (num === randomNumber) {
          setGameResult(`${num} is correct! You won!`);
          setGamePlay(false);
        } else if (guessesTaken < guessTotal - 1) {
          setRemarkList([
            ...remarkList,
            num < randomNumber
              ? `${num} is lower than the number`
              : `${num} is higher than the number`,
          ]);
        } else {
          setGameResult("Game over, u lost!");
          setGamePlay(false);
        }
      }
    }

    setNum(undefined);
  };

  return (
    <div className="w-full min-h-screen flex-col flex items-center justify-center">
      <p className="text-white">
        Level: {level} | High Limit: {highLimit} | Random Number: {randomNumber}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your guess"
          className="text-zinc-100 bg-zinc-900 border border-rose-700 rounded px-3 py-2 mr-3 focus:ring-2 focus:outline-none focus:ring-rose-500"
          type="number"
          value={num || ""}
          onChange={handleChange}
        />
        {gamePlay ? (
          <>
            <button type="submit" className="btn px-3">
              Submit
            </button>
            <p>Guesses Available: {guessTotal - guessesTaken}</p>
            <p>Used :{guessList.join(", ")}</p>
            <p>{gameResult}</p>
            <p>Remarks:</p>
            {remarkList.map((remark, index) => (
              <p key={index}>{remark}</p>
            ))}
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                router.push("/");
              }}
            >
              Play Again
            </button>
            <p>{gameResult}</p>
          </>
        )}
      </form>
    </div>
  );
};

export default Page;
