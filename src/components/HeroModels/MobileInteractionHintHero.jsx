import { Html } from "@react-three/drei";
import Lottie from "lottie-react";
import dragMouse from "../../assets/hand_drag_desktop.json";

const MobileInteractionHintHero = ({ fadeOut, isMobile }) => {
  const positionY = isMobile ? -2 : -1;

  return (
    <Html position={[0, positionY, 0]} center>
      <div
        className={`
          flex flex-col items-center gap-2 px-6 py-4 rounded-2xl
          transition-opacity duration-500
          ${fadeOut ? "opacity-0" : "opacity-100"}
        `}
      >
        <Lottie animationData={dragMouse} loop autoplay className="w-20 h-20" />
      </div>
    </Html>
  );
};

export default MobileInteractionHintHero;
