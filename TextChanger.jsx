import React, { useEffect, useState } from 'react';

const TextChanger = () => {
  const texts = [
    "Hi, I am Manish Solanki.",
    "I am a Web Developer.",
    "Welcome to my portfolio."
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
        if (endValue > texts[index].length + 5) {
          setIsForward(false);
        }
      } else {
        setEndValue((prev) => prev - 1);
        if (endValue < 0) {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return (
    <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      {currentText}
      <span className="text-white animate-pulse">|</span>
    </h1>
  );
};

export default TextChanger;
