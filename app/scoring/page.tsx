import React from "react";

const scoring = (props: { html: string }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center p-8">
      <section className="mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
        <div className=" text-lg leading-relaxed">
          <h1 className="font-railway mb-6 text-center text-3xl font-bold text-secondary underline decoration-wavy underline-offset-8">
            Scoring System
          </h1>
          <h2 className="mb-4 mt-12 text-3xl leading-snug">
            My Opinionated System
          </h2>
          <p>
            There has to be a system in place to justify the scores I give to
            each cafe/restaurant. It also serves to provide consistency and
            transparency of my reviews. I chose 6 factors that mattered most to
            me.
          </p>
          <p>
            Coffee/Food, Aesthetic, Location, Seating, Price and Wifi/Outlets.
            Each of these factors have a different weightage, each corresponding
            to their importance.
          </p>
          <h2 className="mb-4 mt-12 text-3xl leading-snug">
            Total Score (100%)
          </h2>
          The Total Score is calculated by adding the individual points awarded
          for each aforementioned factor. The highest score is <span>100</span>.
          <h2 className="mb-4 mt-12 text-3xl leading-snug">
            Coffee/Food (30%)
          </h2>
          <p>
            The taste of coffee and food, without a doubt, should be given the
            highest rating. After all, we are looking for good food to{" "}
            <span>eat and eat</span>. A 5/5 score means that the full 30% is
            awarded, 4/5 = 24%. You do the math.
          </p>
          <h2 className="mb-4 mt-12 text-3xl leading-snug">Aesthetics (20%)</h2>
          <p>
            To me, the dining experience encompasses more than just food. A
            well-designed and thoughtfully curated space can elevate the overall
            dining experience. It sets the <span>initial impression</span> and
            creates anticipation for diners.
          </p>
          <h2 className="mb-4 mt-12 text-3xl leading-snug">Location (20%)</h2>
          <p>
            With the ridiculous COE prices in Singapore, not everyone can afford
            a car, especially if we are paying for overpriced cafe food... So
            Cafes <span>near MRTs</span> will get a higher score. I&apos;ve also
            factored in availability of <span>parking lots</span> for those with
            fat stacks.
          </p>
          <h2 className="mb-4 mt-12 text-3xl leading-snug">Seating (15%)</h2>
          <p>
            Knowing a cafe/restaurant&apos;s seating{" "}
            <span>availability or capacity</span> beforehand is helpful to make
            arrangements to book or come before peak hours.
          </p>
          <h2 className="mb-4 mt-12 text-3xl leading-snug">Price (10%)</h2>
          <p>
            As foodies, does price really matter that much? All we want to do is
            eat and eat. Grading for this factor is based on{" "}
            <span>3 price tiers</span>.<p>{`$ =  <$15 per pax (10%)`}</p>
            <p>{`$$ =  <$40 per pax (7%)`}</p>
            <p>{`$$$ = >$40 per pax (4%)`}</p>
          </p>
          <h2 className="mb-4 mt-12 text-3xl leading-snug">
            Wifi and Outlets (5%)
          </h2>
          <p>
            Wifi and Outlets are not that crucial for my dining experience,
            however it might be beneficial for people or students like myself to
            work at cafes. 5% awarded if theres wifi or outlets, 0% if none.
          </p>
        </div>
      </section>
    </div>
  );
};

export default scoring;
