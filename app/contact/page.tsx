import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const contact = () => {
  return (
    <div className="relative flex  h-screen w-full flex-col items-center justify-center p-8">
      <section className="mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
        <div className="text-lg leading-relaxed gap-5 flex flex-col">
          <h1 className="font-railway mb-6 text-center text-3xl font-bold text-secondary underline decoration-wavy underline-offset-8;">
            Contact
          </h1>
          <p>
            Whether you have a question, suggestion, or simply want to chat
            about all things cafe/coffee/food-related, I&apos;m thrilled to hear
            from you.
          </p>
          <p>
            Feel free to reach out using the contact information provided below,
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-flow-col grid-rows-4 gap-y-5 text-secondary sm:grid-rows-2">
          <Link
            target="_blank"
            className="flex w-fit gap-2 text-2xl duration-200  hover:scale-[105%] hover:text-secondary/75"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL as string}`}
          >
            <FiMail />{" "}
            <span className="flex items-center justify-center text-xl ">
              Email
            </span>
          </Link>
          <Link
            target="_b_blank"
            className="flex w-fit gap-2 text-2xl duration-200  hover:scale-[105%] hover:text-secondary/75"
            href={process.env.NEXT_PUBLIC_INSTAGRAM as string}
          >
            <FiInstagram />{" "}
            <span className="flex items-center justify-center text-xl ">
              Instagram
            </span>
          </Link>
          <Link
            target="_b_blank"
            className="flex w-fit gap-2 text-2xl duration-200  hover:scale-[105%] hover:text-secondary/75"
            href={process.env.NEXT_PUBLIC_GITHUB as string}
          >
            <FiGithub />{" "}
            <span className="flex items-center justify-center text-xl ">
              Github
            </span>
          </Link>
          <Link
            target="_b_blank"
            className="flex w-fit gap-2 text-2xl duration-200  hover:scale-[105%] hover:text-secondary/75"
            href={process.env.NEXT_PUBLIC_LINKEDIN as string}
          >
            <FiLinkedin />{" "}
            <span className="flex items-center justify-center text-xl ">
              Linkedin
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default contact;
