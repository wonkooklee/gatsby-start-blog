import React from "react";

const Animator = ({ children, motion, delay, easing, duration }) => {
  return (
    <div
      data-sal={motion}
      data-sal-delay={delay}
      data-sal-easing={easing}
      data-sal-duration={duration}
    >
      {children}
    </div>
  );
};

export default Animator;
