"use client";
import React, { useState, useEffect } from 'react';

const AnimatedText = ({ headingText }) => {
  const [animatedText, setAnimatedText] = useState(headingText);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let interval = null;

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setAnimatedText((prevText) =>
        prevText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return animatedText[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join('')
      );

      if (iteration >= animatedText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
    if (animatedText !== headingText) {
      clearInterval(interval);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1 className={`font-medium text-xl z-20`} onMouseOver={handleMouseOver}>
      {animatedText}
    </h1>
  );
};

export default AnimatedText;