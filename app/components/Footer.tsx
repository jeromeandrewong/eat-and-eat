import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="mt-10 flex w-screen justify-center bg-secondary/75 p-20">
      <div className="flex h-full w-full flex-col items-center justify-between gap-2 sm:flex-row md:w-4/5 lg:w-[60%]">
        <Link href={`/`}>
          <div className="text-xl ">©eatandeat</div>
        </Link>
        <div className="flex gap-3 text-3xl">
          <Link target="_blank" href={process.env.NEXT_PUBLIC_GITHUB as string}>
            <FiGithub className="hover:scale-[110%] hover:text-secondary" />
          </Link>
          <Link
            target="_blank"
            href={process.env.NEXT_PUBLIC_INSTAGRAM as string}
          >
            <FiInstagram className="hover:scale-[110%] hover:text-secondary" />
          </Link>
          <Link
            target="_blank"
            href={process.env.NEXT_PUBLIC_LINKEDIN as string}
          >
            <FiLinkedin className="hover:scale-[110%] hover:text-secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
