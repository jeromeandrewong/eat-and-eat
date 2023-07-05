import React from "react";

const OpeningHours = ({ hours }: { hours: string }) => {
  return (
    <div className="w-full rounded-lg bg-secondary/10 p-1 shadow-lg shadow-secondary/10 duration-300 hover:scale-[102%] hover:shadow-xl hover:shadow-secondary/10">
      <div className="flex h-full flex-col justify-between rounded-lg bg-secondary/20 p-3 md:p-4">
        <div>
          <h3
            id="title"
            className="m-0 mb-2 w-full text-center text-xl font-semibold tracking-tight text-secondary "
          >
            Opening Hours
          </h3>
        </div>
        <div className="flex flex-grow flex-col items-center gap-0.5  text-sm font-bold text-primaryText lg:text-base">
          {hours.split(",").map((line) => {
            return (
              <p key={line} className="m-0">
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
