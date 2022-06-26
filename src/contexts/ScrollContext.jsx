import React, { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext({
  isScrollTop: undefined,
});

export const ScrollProvider = ({ children }) => {
  const [isScrollTop, setIsScrollTop] = useState(true);

  const currentScrollPos = (offset) => {
    if (offset > 0) {
      setIsScrollTop(false);
    } else {
      setIsScrollTop(true);
    }
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        currentScrollPos(window.pageYOffset);
      };
    }

    return currentScrollPos;
  }, []);

  const value = { isScrollTop };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
