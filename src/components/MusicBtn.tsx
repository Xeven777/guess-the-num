"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import triangle from "../../public/triangle-svgrepo-com.svg";
import square from "../../public/square-svgrepo-com.svg";

const MusicBtn = () => {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (playing) {
      setPlaying(false);
      audioRef.current?.pause();
    } else {
      setPlaying(true);
      audioRef.current?.play();
    }
  };
  return (
    <div
      className="fixed top-6 right-4 md:right-12 bg-zinc-700 rounded-full flex items-center justify-center p-2 cursor-pointer hover:scale-105 transition-all active:scale-95 active:rotate-90"
      onClick={handleClick}
    >
      {playing ? (
        <Image src={square} alt="O" width={24} height={24} />
      ) : (
        <Image src={triangle} alt="P" width={24} height={24} />
      )}
      <audio src="/music sg.m4a" ref={audioRef} autoPlay loop />
    </div>
  );
};

export default MusicBtn;
