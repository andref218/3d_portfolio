import React, { useEffect, useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scroll } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const timelineRef = useRef(null);

  useGSAP(() => {
    const timeline = document.querySelector(".timeline");

    // Starts invisible at the Top
    gsap.set(timeline, { scaleY: 0 });

    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "top top",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 80%",
        end: "bottom",
        scrub: true,
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(timeline, { scaleY: self.progress });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 70%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="journey"
      className="w-full section-padding xl:px-0 scroll-mt-25"
    >
      <div className="w-full h-full md:px-20 px-5 flex flex-col items-center">
        {/* Section title */}
        <TitleHeader
          title="Academic & Professional Journey"
          sub="💼 My Journey Overview "
        />

        {/* Timeline + cards container */}
        <div className="relative mt-15 mb-30 flex justify-center">
          <div className="max-w-6xl w-full flex relative">
            {/* Timeline vertical */}
            <div
              ref={timelineRef}
              className="
                timeline absolute h-full top-0 z-0
                left-12 sm:left-20 md:left-32 lg:left-16.5
              "
            />

            {/* Cards + icons */}
            <div
              className="
                flex flex-col gap-24 w-full z-10
                pl-6.5 sm:pl-14.5 md:pl-26.5 lg:pl-11
                max-w-full md:max-w-3xl lg:max-w-1xl
              "
            >
              {expCards.map((card) => (
                <div
                  key={card.title}
                  className="grid grid-cols-[80px_1fr] items-start gap-4"
                >
                  {/* Icon column */}
                  <div className="flex justify-center w-12">
                    <div className="timeline-logo">
                      <card.logoPath className="text-3xl text-white-50" />
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="min-w-0 expText break-words">
                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                    <h1 className="font-bold text-2xl">{card.company}</h1>
                    <p>{card.situation}</p>

                    <p className="my-4 text-white-50">{card.date}</p>

                    <p className="text-[#839cb5] italic">Responsibilities:</p>

                    <ul className="list-disc ms-5 mt-4 flex flex-col gap-3 text-white-50">
                      {card.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
