import React from "react";

const Animator = ({ children, motion, dalay, easing, duration }) => {
  return (
    <div
      data-sal={motion}
      data-sal-dalay={dalay}
      data-sal-easing={easing}
      data-sal-duration={duration}
    >
      {children}
    </div>
  );
};

export default Animator;
