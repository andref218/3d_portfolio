import * as THREE from "three";
import { Computer } from "./Computer";
import { OrbitControls, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import { Suspense, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileInteractionHintContact from "./MobileInteractionHintContact";

const ContactExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const [showHint, setShowHint] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const showMobileHint = (isMobile || isTablet) && showHint;

  const handleInteraction = () => {
    if (!fadeOut) {
      setFadeOut(true);

      setTimeout(() => setShowHint(false), 500);
    }
  };

  const Loader = () => {
    return (
      <Html center>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        </div>
      </Html>
    );
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      onPointerDown={handleInteraction}
      onWheel={handleInteraction}
    >
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false} // disable panning
        enableZoom={true} // allow zoom
        minDistance={5} // zoom min
        maxDistance={15} // zoom max
      />
      <Suspense fallback={<Loader />}>
        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.2} />
          </mesh>
        </group>

        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
        {showHint && (
          <MobileInteractionHintContact
            fadeOut={fadeOut}
            isMobile={isMobile || isTablet}
          />
        )}
      </Suspense>
      <Particles count={100} />
    </Canvas>
  );
};

export default ContactExperience;
