import * as THREE from "three";
import { Computer } from "./Computer";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

const ContactExperience = () => {
  const minAzimuth = -1.5;
  const maxAzimuth = 0.6;
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
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
      <Particles count={100} />
    </Canvas>
  );
};

export default ContactExperience;
