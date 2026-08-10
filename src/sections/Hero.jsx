import Button from "../components/Button";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      },
    );
  });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div
        className="hero-layout mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 
      lg:grid-cols-2"
      >
        {/* LEFT: HERO CONTENT */}
        <header className="relative z-10 flex w-full flex-col justify-center">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, wordIndex) => {
                      return (
                        <span
                          key={word.text}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />

                          <span>{word.text}</span>
                        </span>
                      );
                    })}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl max-w-xl md:max-w-2xl relative z-10">
              My name is André Fonseca, I'm a Software Developer passionate
              about AI Engineering and Full-Stack Development.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my work"
            />
          </div>
        </header>

        {/* RIGHT: MODERN ABSTRACT VISUAL */}
        <figure className="relative flex h-[350px] w-full items-center justify-center overflow-hidden sm:h-[400px] lg:h-[560px]  lg:-translate-y-10">
          {/* Glow */}
          <div className="absolute h-48 w-48 rounded-full bg-blue-500/20 blur-[80px] sm:h-56 sm:w-56 lg:h-72 lg:w-72" />

          {/* Outer orbit */}
          <div className="absolute h-[230px] w-[230px] animate-[spin_18s_linear_infinite] rounded-full border border-white/[0.07] border-dashed sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.9)]" />
          </div>

          {/* Inner orbit */}
          <div className="absolute h-[170px] w-[170px] animate-[spin_12s_linear_infinite_reverse] rounded-full border border-blue-400/20 sm:h-[230px] sm:w-[230px] lg:h-[300px] lg:w-[300px]">
            <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300" />
          </div>

          {/* Main element */}
          <div
            className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[1.75rem] border border-white/10 
          bg-zinc-950/70 shadow-[0_0_80px_rgba(59,130,246,0.12)] backdrop-blur-xl sm:h-52 sm:w-52 sm:rounded-[2rem] 
            lg:h-60 lg:w-60"
          >
            <div className="text-center">
              <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)] sm:mb-4" />

              <h2 className="text-lg font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
                André Fonseca
              </h2>

              <p className="mt-2 text-[8px] uppercase tracking-[0.18em] text-zinc-500 sm:text-[10px] sm:tracking-[0.25em] lg:text-xs lg:tracking-[0.3em]">
                Full Stack & AI Developer
              </p>
            </div>
          </div>

          {/* AI Engineering */}
          <div className="absolute left-3 top-8 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 backdrop-blur-md sm:left-6 sm:top-12 sm:px-4 sm:py-2 lg:left-6 lg:top-20">
            <span className="text-[10px] text-zinc-300 sm:text-xs">
              AI Engineering
            </span>
          </div>

          {/* Full-Stack */}
          <div className="absolute right-3 top-12 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 backdrop-blur-md sm:right-6 sm:top-20 sm:px-4 sm:py-2 lg:right-6 lg:top-28">
            <span className="text-[10px] text-zinc-300 sm:text-xs">
              Full Stack
            </span>
          </div>

          {/*  Next js & React  */}
          <div className="absolute bottom-8 left-4 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 backdrop-blur-md sm:bottom-12 sm:left-8 sm:px-4 sm:py-2 lg:bottom-20 lg:left-10">
            <span className="text-[10px] text-zinc-300 sm:text-xs">
              Next js · React
            </span>
          </div>

          {/* LLMs */}
          <div className="absolute bottom-5 right-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 backdrop-blur-md sm:bottom-8 sm:right-6 sm:px-4 sm:py-2 lg:bottom-12 lg:right-8">
            <span className="text-[10px] text-blue-300 sm:text-xs">
              LLMs · RAG
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
