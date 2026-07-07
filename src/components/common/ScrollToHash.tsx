import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_HEIGHT = 80;

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.substring(1);

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (!element) {
        requestAnimationFrame(scrollToElement);
        return;
      }

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_HEIGHT;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    };

    scrollToElement();
  }, [location]);

  return null;
};

export default ScrollToHash;