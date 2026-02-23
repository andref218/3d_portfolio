import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getAsset } from "../utils/paths";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase scroll-mt-5">
      <div className="w-full xl:mb-10">
        <h2 className="text-center mb-20 text-2xl md:text-3xl lg:text-4xl text-white-50">
          Some of my Projects:
        </h2>
        <div className="showcaselayout">
          {/* LEFT SIDE*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="">
              <a
                href="https://github.com/andref218/movieStreamApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={getAsset("/images/movieStreamApp1.png")}
                  alt="CineFlow"
                ></img>
              </a>
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://cineflow-movie-stream-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  CineFlow - A Powerful, User-Friendly Streaming Platform
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                An app that allows users to explore movies and watch trailers,
                built with React and TailwindCSS.
              </p>
            </div>
          </div>
          {/* RIGHT SIDE*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div>
                <a
                  href="https://github.com/andref218/mern_user_management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src={getAsset("/images/mernUserManagementApp1.png")}
                    alt="MERN User Management"
                  />
                </a>
              </div>

              <h2>
                <a
                  href="https://mern-user-management-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  User Management System
                </a>
              </h2>
              <p className="text-white-50 md:text-xl mt-2">
                A MERN full-stack application for managing users with create,
                read, update, and delete functionality with a clean and
                responsive interface.
              </p>
            </div>
            <div className="project" ref={project3Ref}>
              <div>
                <a
                  href="https://github.com/andref218/ai_image_generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src={getAsset("/images/aiImageGenerator1.png")}
                    alt="AI Image Generator Project"
                  />
                </a>
              </div>
              <h2>
                <a
                  href="https://github.com/andref218/ai_image_generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  AI Image Generator
                </a>
              </h2>
              <p className="text-white-50 md:text-xl  mt-2">
                An AI-powered app that generates images from text prompts with a
                clean and intuitive interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
