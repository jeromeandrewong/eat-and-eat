import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 pb-10 text-2xl md:h-screen   md:flex-row  md:pb-0 md:text-2xl lg:text-3xl">
      <div className=" text-center font-bold  tracking-tight md:text-start ">
        Reviews of places I&rsquo;ve gone to {` `}
        <div
          id="title"
          className="text-4xl tracking-tight text-secondary/75 underline decoration-wavy underline-offset-8 hover:text-secondary md:text-3xl lg:text-5xl"
        >
          eat and eat
        </div>
      </div>
      <div className="rounded-xl bg-secondary/20 p-3">
        <Image
          src={`/eatandeat.png`}
          alt="hero"
          className="select-none"
          width="380"
          height="100"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
