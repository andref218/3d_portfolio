import React from "react";
import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-10 mb-25">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, itemIndex) => {
          return (
            <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
              <div className="text-white-50 text-lg">{item.label}</div>
              <div
                key={counterItems.label}
                className=" text-white text-5xl font-bold mb-2"
              >
                <CountUp
                  // Kept for potential future use
                  //suffix={item.suffix}
                  end={item.value}
                  //The animation of the numbers only starts when user enter in viewport
                  enableScrollSpy
                  //Only happens one time
                  scrollSpyOnce
                />
                {item.suffix && (
                  <span className="text-3xl font-medium text-white/50 ml-1">
                    {item.suffix}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCounter;
