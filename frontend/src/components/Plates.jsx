import React, { useState } from "react";
import "./plates.css";

const PlatesAnimation = () => {
  const [step, setStep] = useState(0);

  const handleClick = () => setStep((prev) => (prev + 1) % 2);

  return (
    <div className="containers" onClick={handleClick}>
      <div className={`plate square ${step === 0 ? "center" : "bottom"}`}>
        {step === 0 && <span className="fade-text">Square Plate Fade In</span>}
      </div>
      <div
        className={`plate round ${
          step === 0 ? "bottom" : "center depth-animate"
        }`}
      >
        {step === 1 && <span className="fade-text">Round Plate Fade In</span>}
      </div>
    </div>
  );
};

export default PlatesAnimation;
