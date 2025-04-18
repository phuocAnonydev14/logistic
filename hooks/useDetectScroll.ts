import * as React from "react";
import { useState } from "react";

const THRESHOLD = 0;

const useScrollDirection = (headerScroll?: boolean) => {
  const [scrollDirection, setScrollDirection] = React.useState("up");

  const blocking = React.useRef(false);
  const prevScrollY = React.useRef(0);
  const [detectOnTop, setDetechOnTop] = useState(false);

  React.useEffect(() => {
    prevScrollY.current = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? "down" : "up";

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
        setDetechOnTop(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDirection]);

  return headerScroll ? detectOnTop : scrollDirection;
};

export { useScrollDirection };
