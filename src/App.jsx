import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import NavBar from "./components/NavBar";
import AnimatedCounter from "./components/AnimatedCounter";
import Journey from "./sections/Journey";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AnimatedCounter />
      <Showcase />
      <Journey />
      <TechStack />
    </>
  );
}

export default App;
