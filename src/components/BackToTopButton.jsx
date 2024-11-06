import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <Button
          varient="ghost"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 z-50 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaArrowUp className="" />
        </Button>
      )}
    </div>
  );
}
