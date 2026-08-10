import { FaCode, FaGraduationCap, FaVideo } from "react-icons/fa";
import { getAsset } from "../utils/paths";

export const navLinks = [
  {
    name: "About",
    link: "#about",
  },
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
  {
    name: "My AI Assistant",
    link: "#portfolio-ai",
  },
];

export const words = [
  { text: "Ideas", imgPath: getAsset("/images/ideas.svg") },
  { text: "Concepts", imgPath: getAsset("/images/concepts.svg") },
  { text: "Code", imgPath: getAsset("/images/code.svg") },
  { text: "Designs", imgPath: getAsset("/images/designs.svg") },
  { text: "Ideas", imgPath: getAsset("/images/ideas.svg") },
  { text: "Concepts", imgPath: getAsset("/images/concepts.svg") },
  { text: "Designs", imgPath: getAsset("/images/designs.svg") },
  { text: "Code", imgPath: getAsset("/images/code.svg") },
];

export const counterItems = [
  { value: 600, suffix: "+", label: "Hours of Coding" },
  { value: 400, suffix: "+", label: "Commits pushed" },
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
    title: "Software Developer (Frontend)",
    company: "Nonius",
    situation: "Curricular Internship",
    date: "2021 - 2022",
    responsibilities: [
      "Development of a Mobile Application for the Hospitality Industry using Flutter.",
      "Delivered an intuitive and efficient user experience focused on real-world team workflows and productivity.",
      "Collaborated with the development team using Git for version control and participated in the implementation of new features and bug fixes.",
    ],
  },
  {
    logoPath: FaVideo,
    title: "Video Editor",
    company: "Freelancer",
    date: "2023 - Present",
    responsibilities: [
      "Video Editing and Post-production for Local Clients.",
      "Using tools such as Adobe Premiere and Photoshop for editing and image processing.",
      "Manage the complete post-production workflow, including editing, color correction, audio enhancement, and final delivery.",
    ],
  },
];

export const techStackIcons = [
  {
    name: "Next.js",
    modelPath: getAsset("/models/next_js_logo.glb"),
    scale: 0.24,
    rotation: [0, 1.7, 0],
  },
  {
    name: "React",
    modelPath: getAsset("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: getAsset("/models/python_logo.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },

  {
    name: "Hugging Face",
    modelPath: getAsset("/models/hugging_face_logo.glb"),
    scale: 0.24,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: getAsset("/models/nodejs_logo.glb"),
    scale: 1.4,
    rotation: [0, 0, 0],
  },
];

export const socialImgs = [
  {
    name: "Github",
    url: "https://github.com/andref218",
    imgPath: getAsset("/images/github.png"),
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/andre-fonseca218",
    imgPath: getAsset("/images/linkedin.png"),
  },
];
