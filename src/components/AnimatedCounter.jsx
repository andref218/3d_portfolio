import React from "react";
import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedCounter = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".counter-card",
      {
        x: -60,
        opacity: 0,
        rotationY: -12,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#counter",
          start: "top 80%",
        },
      },
    );
  });
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-0 mb-15">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, itemIndex) => {
          return (
            <div
              className="counter-card rounded-lg border border-blue-400/10 bg-blue-500/[0.04] p-10 flex flex-col justify-center backdrop-blur-sm 
            transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.06]"
            >
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
