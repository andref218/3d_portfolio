import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Room } from "./Room";
import { OrbitControls } from "@react-three/drei";

const AutoRotateRoom = ({ isMobile }) => {
  const controlsRef = useRef();

  const minAzimuth = -1.5;
  const maxAzimuth = 0.6;

  const initialRotationY = Math.PI / -2.6;

  return (
    <group
      scale={isMobile ? 0.7 : 1} // responsive scale for mobile
      position={[0, -3.5, 0]} // model position
      rotation={[0, initialRotationY, 0]}
    >
      <Room />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        ref={controlsRef}
        enablePan={false} // disable panning
        enableZoom={true} // allow zoom
        minDistance={5} // zoom min
        maxDistance={15} // zoom max
        minPolarAngle={Math.PI / 5} // limit vertical rotation
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={minAzimuth}
        maxAzimuthAngle={maxAzimuth}
      />
    </group>
  );
};

export default AutoRotateRoom;
