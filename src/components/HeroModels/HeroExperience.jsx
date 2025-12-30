import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import * as THREE from "three";
import Particles from "./Particles";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const [showHint, setShowHint] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 3500); // starts fade at 3.5s
    const timer2 = setTimeout(() => setShowHint(false), 5000); // remove at 5s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-dvh">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <spotLight
          position={[2, 5, 6]}
          angle={0.15}
          intensity={100}
          penumbra={0.2}
          color="white"
        />
        <spotLight
          position={[4, 5, 4]}
          angle={0.3}
          intensity={40}
          penumbra={0.5}
          color="#4cc9f0"
        />

        <spotLight
          position={[-3, 5, 5]}
          angle={0.4}
          intensity={60}
          penumbra={1}
          color="#9d4edd"
        />
        <primitive
          object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
          position={[1, 3, 4]}
          intensity={15}
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />
        <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
        <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
        <Particles count={100} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={15}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          onStart={() => setShowHint(false)}
        />

        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, Math.PI / -2.6, 0]}
        >
          <Room />
        </group>
      </Canvas>
      {showHint && (
        <div
          className={`absolute bottom-14 left-1/2 -translate-x-1/2
    text-white-50 text-sm pointer-events-none
    px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm
    transition-opacity duration-1500 ease-out
      ${fadeOut ? "opacity-0" : "opacity-100"}
  `}
        >
          Drag or Scroll to interact
        </div>
      )}
    </div>
  );
};

export default HeroExperience;
