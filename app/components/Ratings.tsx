import { calculateScore } from "@/lib/calculateScore";
import { PostType } from "@/types/types";
import React from "react";

const Ratings = ({ breakdown }: { breakdown: string }) => {
  const breakdownArr = breakdown.split("").map(Number);
  return (
    <div className="w-full mb-2 rounded-lg bg-accent/10 p-1 shadow-lg shadow-accent/10 duration-300 hover:scale-[102%] hover:shadow-xl hover:shadow-accent/10">
      <div className="flex h-full flex-col justify-between rounded-lg bg-accent/20 p-3 md:p-4">
        <div>
          <h3
            id="title"
            className="m-0 mb-2 w-full text-center text-2xl font-semibold tracking-tight text-accent "
          >
            Rating
          </h3>
          <div className="flex flex-col gap-y-5 sm:px-8 md:flex-row md:px-4">
            <div
              id="title"
              className="text flex flex-col items-center justify-center font-semibold capitalize md:w-[40%] "
            >
              total score
              <div className="text-4xl text-accent">
                {calculateScore(breakdownArr)}
              </div>
            </div>
            <div className="grid grid-flow-col grid-rows-3 gap-x-3 md:w-[60%]">
              {breakdownArr.map((factor, idx) => {
                const factorNames = [
                  "Food/Coffee",
                  "Aesthetic",
                  "Location",
                  "Seating",
                  "Price",
                  "Wifi/Outlets",
                ];
                return (
                  <div
                    key={factorNames[idx]}
                    className="text flex justify-between"
                  >
                    <div className="text-base tracking-tight">
                      {factorNames[idx]}:
                    </div>
                    <div className="text-base text-accent">
                      {idx === 4 ? (
                        "$".repeat(factor)
                      ) : idx === 5 ? (
                        <div>{factor === 5 ? "Yes" : "No"}</div>
                      ) : (
                        <div>{factor}/5</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
