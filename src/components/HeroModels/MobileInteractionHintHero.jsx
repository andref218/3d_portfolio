import { Html } from "@react-three/drei";
import Lottie from "lottie-react";
import gestureHand from "../../assets/gesture_hand_mobile.json";

const MobileInteractionHintHero = ({ fadeOut }) => {
  const positionY = -2;
  return (
    <Html position={[0, positionY, 0]} center>
      <div
        className={`
          flex flex-col items-center gap-2 px-6 py-4 rounded-2xl
          transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}
        `}
      >
        <Lottie
          animationData={gestureHand}
          loop
          autoplay
          className="w-28 h-28"
        />
      </div>
    </Html>
  );
};

export default MobileInteractionHintHero;
