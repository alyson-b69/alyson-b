import React, { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="topNav" style={{ display: showScroll ? "flex" : "none" }}>
      <FaAngleDoubleUp
        fontSize="3em"
        className="roundArrow"
        onClick={scrollTop}
      />
    </div>
  );
};

export default ScrollTopArrow;
