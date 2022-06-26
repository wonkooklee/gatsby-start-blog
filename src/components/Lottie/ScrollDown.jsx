import React, { useContext } from "react";
import Lottie from "react-lottie";
import * as animationData from "./scroll-down.json";
import { ScrollContext } from "../../contexts/ScrollContext";

const ScrollDown = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };

  const { isScrollTop } = useContext(ScrollContext);

  return isScrollTop ? (
    <Lottie options={defaultOptions} width={36} height={36}>
      ScrollDown
    </Lottie>
  ) : null;
};

export default ScrollDown;
