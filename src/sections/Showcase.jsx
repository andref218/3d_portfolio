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
          Some of my Work:
        </h2>
        <div className="showcaselayout">
          {/* LEFT SIDE*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div>
              <a
                href="https://www.vynilz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={getAsset("/images/vynilz_collection.png")}
                  alt="Vynilz"
                ></img>
              </a>
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://github.com/andref218/vynilz-showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  Vynilz - Build your collection, unlock achievements, and
                  showcase your records.
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack web application that helps vinyl collectors build,
                organize, and showcase their collections online, featuring
                public profiles, achievements and much more.
              </p>
            </div>
          </div>
          {/* RIGHT SIDE*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div>
                <a
                  href="https://github.com/andref218/rag_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src={getAsset("/images/rag_studio_home_page.png")}
                    alt="MERN User Management"
                  />
                </a>
              </div>

              <h2>
                <a
                  href="https://github.com/andref218/rag_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  RAG Studio - AI assistant powered by your own documents.
                </a>
              </h2>
              <p className="text-white-50 md:text-xl mt-2">
                A Retrieval-Augmented Generation (RAG) application that
                retrieves relevant information from custom documents to generate
                accurate, context-aware responses using a local LLM.
              </p>
            </div>
            <div className="project" ref={project3Ref}>
              <div>
                <a
                  href="https://github.com/andref218/llama3.2-customer-support-qlora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src={getAsset(
                      "/images/llama3_2_customer_support_qlora_hugging_face.png",
                    )}
                    alt="MERN User Management"
                  />
                </a>
              </div>
              <h2>
                <a
                  href="https://github.com/andref218/llama3.2-customer-support-qlora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:opacity-80 transition-opacity duration-300"
                >
                  Llama 3.2 Customer Support Fine-Tuning
                </a>
              </h2>
              <p className="text-white-50 md:text-xl  mt-2">
                Fine-tuned the Meta Llama 3.2 Instruct model for customer
                support using QLoRA and PEFT, publishing the trained LoRA
                adapter on the Hugging Face Hub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
