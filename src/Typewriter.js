import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); // Adjust typing speed here (in milliseconds)
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
