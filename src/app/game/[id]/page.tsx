"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import prize from "../../../../public/prize.jpg";
import die from "../../../../public/die.webp";
import Logo from "@/components/Logo";

type Props = {
  params: { id: string };
};

const Page = ({ params: { id } }: Props) => {
  const router = useRouter();
  const [guessesTaken, setGuessesTaken] = useState<number>(0);
  const level = Number(id);
  const [gameResult, setGameResult] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [num, setNum] = useState<number>();
  const guessTotal = level;
  const [gamePlay, setGamePlay] = useState(true);
  const [guessList, setGuessList] = useState<number[]>([]);
  const [remarkList, setRemarkList] = useState<string[]>([]);
  const highLimit = level === 3 ? 10 : level === 5 ? 50 : 120;
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * (highLimit + 1))
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
          setGameResult(
            `Congratulations! You guessed the number in ${
              guessList.length + 1
            } attempts. Your score is ${100 - guessList.length * 10}`
          );
          setGameWon(true);
          setGamePlay(false);
        } else if (guessesTaken < guessTotal - 1) {
          setRemarkList([
            ...remarkList,
            num < randomNumber
              ? `${num} is lower than the number`
              : `${num} is higher than the number`,
          ]);
        } else {
          setGameResult(
            "Game over, you lost! The correct number was " + randomNumber + "."
          );
          setGamePlay(false);
        }
      }
    }

    setNum(undefined);
  };

  return (
    <div className="w-full min-h-[620px] flex-col flex items-center px-4">
      <div className="border-rose-600 relative border mt-24 mb-6 px-8 pt-14 pb-6 rounded-lg text-center w-full md:w-96 neu">
        <Logo />
        <h1 className="md:text-6xl mt-2 text-4xl mb-8 font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-zinc-200 via-zinc-100 to-transparent tracking-tight">
          Level: {level}
        </h1>
        <p className="text-zinc-100 my-3 mx-auto">
          Guess a number between 0 and {highLimit}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            inputMode="numeric"
            placeholder="Enter your guess"
            className="text-zinc-100 bg-stone-900/70 border border-rose-700 rounded px-3 py-2 mr-3 focus:ring-2 focus:outline-none focus:ring-rose-500 mb-4"
            type="number"
            value={num || ""}
            onChange={handleChange}
          />
          {gamePlay ? (
            <div className="text-left md:px-6 px-0 text-stone-200">
              <button type="submit" className="btn px-4 mb-4">
                Submit
              </button>
              <p>
                Guesses Available :{" "}
                <span className="txt-span">{guessTotal - guessesTaken}</span>
              </p>
              <p>
                Used : <span className="txt-span">{guessList.join(", ")}</span>
              </p>
              <p>
                <span className="txt-span">{gameResult}</span>
              </p>
              <p>Remarks:</p>
              {remarkList.map((remark, index) => (
                <p key={index}>
                  <span className="txt-span">{remark}</span>
                </p>
              ))}
            </div>
          ) : (
            <>
              <button
                type="button"
                className="btn px-3 mb-4"
                onClick={() => {
                  router.refresh;
                  router.push("/");
                }}
              >
                Play Again
              </button>
              <p>{gameResult}</p>
              <Image
                src={gameWon ? prize : die}
                alt="end"
                width={100}
                className="mx-auto my-6 w-3/4"
              />
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Page;
