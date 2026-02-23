import { Html } from "@react-three/drei";
import Lottie from "lottie-react";
//import gestureHand from "../../assets/gesture_hand_mobile.json";
import dragMouse from "../../assets/hand_drag_desktop.json";

const MobileInteractionHintContact = ({ fadeOut }) => {
  const animationData = dragMouse;

  return (
    <Html fullscreen>
      <div
        className={`
          w-full h-full flex items-center justify-center bg-black/35
          transition-opacity duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="w-20 h-20"
        />
      </div>
    </Html>
  );
};

export default MobileInteractionHintContact;
