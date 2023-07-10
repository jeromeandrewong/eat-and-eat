import React from "react";
export const metadata = {
  title: {
    default: "About",
  },
};
const about = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center p-8">
      <section className="mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
        <h1 className=" font-railway  mb-6 text-center text-3xl font-bold text-secondary underline decoration-wavy underline-offset-8">
          About
        </h1>
        <div className="text-lg leading-relaxed gap-5 flex flex-col">
          <p>
            Welcome to eat and eat! If you can&apos;t already tell, this is my{" "}
            personal food blog. Here, I not only document my culinary adventures
            at various cafes and restaurants in Singapore, but also share these
            experiences with you.
          </p>
          <p>
            Through my blog, I aim to provide a platform where fellow food
            enthusiasts can discover new dining spots, explore diverse cuisines,
            and embark on gastronomic journeys.
          </p>{" "}
          <p>
            As a passionate foodie, I believe that food is more than just
            sustenance. It is a gateway to culture, a means of connection, and a
            source of pure enjoyment. I seek out hidden gems, sample
            mouthwatering dishes, and savor the flavors that make each dining
            experience unique.
          </p>
          <p>
            From trendy cafes serving Instagram-worthy treats to cozy
            neighborhood eateries dishing out comforting classics, I strive to
            capture the essence of every establishment I visit. I will share
            honest and detailed reviews, highlight standout dishes, and provide
            insights into the overall dining ambiance.{" "}
          </p>
          <p>
            Join me as we embark on a culinary exploration uncovering the best
            places to eat, and indulging in the diverse culinary tapestry that
            Singapore has to offer. Let&apos;s celebrate food together and make
            every dining experience a memorable one.{" "}
          </p>
          <p>
            Stay tuned for delicious content, helpful recommendations, and a
            delightful journey through the vibrant food scene of Singapore!
          </p>
          <p>Let&apos;s eat and eat! </p>
        </div>
      </section>
    </div>
  );
};

export default about;
