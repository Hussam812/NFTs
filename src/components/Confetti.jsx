import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function ConfettiComponent() {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height * 1.1}
      numberOfPieces={150}
      gravity={0.03}
    />
  );
}

export default ConfettiComponent;
