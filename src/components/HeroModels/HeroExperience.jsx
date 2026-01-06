import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import * as THREE from "three";
import Particles from "./Particles";
import AutoRotateRoom from "./AutoRotateRoom";

const HeroExperience = () => {
  const [loading, setLoading] = useState(true);
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const [showHint, setShowHint] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleInteraction = () => {
    if (!fadeOut) {
      setFadeOut(true);

      setTimeout(() => setShowHint(false), 500);
    }
  };

  return (
    <div className="relative w-full h-[80vh] md:h-dvh">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        onPointerDown={handleInteraction}
        onWheel={handleInteraction}
      >
        // scroll
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
        <AutoRotateRoom
          isMobile={isMobile}
          onLoaded={() => setLoading(false)}
        />
        <Particles count={100} />
      </Canvas>
      {showHint && (
        <div
          className={`absolute bottom-14 left-1/2 -translate-x-1/2
      text-white-50 text-sm pointer-events-none
      px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm
      transition-opacity duration-500 ease-out
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
          <span className="subtleBlink">Drag or Scroll to interact</span>
        </div>
      )}
    </div>
  );
};

export default HeroExperience;
