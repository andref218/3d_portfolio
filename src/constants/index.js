import { FaCode, FaGraduationCap, FaVideo } from "react-icons/fa";

export const navLinks = [
  //{
  // name: "About",
  //link: "#about",
  //},
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Journey",
    link: "#journey",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

export const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

export const counterItems = [
  { value: 500, suffix: "+", label: "Hours of Coding" },
  { value: 50, suffix: "+", label: "Commits pushed" },
  { value: 99, suffix: "+", label: "Bugs Fixed" },
  { value: 24, suffix: "/7", label: "Learning Mode" },
];

export const expCards = [
  {
    logoPath: FaGraduationCap,
    title: "Bachelor's Degree in Computer Science",
    company: "Universidade da Maia (UMAIA)",
    date: "2018 - 2022",
    responsibilities: [
      "Learned Solid Foundations in Programming and Algorithms",
      "Studied Databases and Software Engineering Principles",
      "Developed Academic Projects focused on real-world scenarios",
    ],
  },
  {
    logoPath: FaCode,
    title: "Software Developer (FrontEnd)",
    company: "Nonius",
    situation: "Curricular Internship",
    date: "2021 - 2022",
    responsibilities: [
      "Development of a Mobile Application for the Hospitality Industry using Flutter.",
      "Delivered an intuitive and efficient user experience focused on real-world team workflows and productivity.",
    ],
  },
  {
    logoPath: FaVideo,
    title: "Video Editor",
    company: "Freelancer",
    date: "2023 - Present",
    responsibilities: [
      "Video Editing and Post-production for local clients.",
      "Using tools such as Adobe Premiere and Photoshop for editing and image processing.",
    ],
  },
];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Flutter Developer",
    modelPath: "/models/flutter_logo.glb",
    scale: 28,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
