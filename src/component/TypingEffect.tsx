/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";

interface CharData {
  original: string;
  display: string;
  revealed: boolean;
  showSpecial: boolean;
}

const TypingEffect = ({ word, speedd }: { word: string; speedd?: number }) => {
  const text = word;
  const specialChars = "@#$%&*!?+=()^%}{[]/><";
  const speed = speedd || 50;
  const [chars, setChars] = useState<CharData[]>([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const splitText = text.split("");
    const charArray: CharData[] = splitText.map((char) => ({
      original: char,
      display: specialChars[Math.floor(Math.random() * specialChars.length)],
      revealed: false,
      showSpecial: false,
    }));
    setChars(charArray);

    splitText.forEach((_, index) => {
      setTimeout(() => {
        setChars((prevChars) => {
          const newChars = [...prevChars];
          newChars[index] = { ...newChars[index], showSpecial: true };
          return newChars;
        });

        setTimeout(() => {
          setChars((prevChars) => {
            const newChars = [...prevChars];
            newChars[index] = {
              ...newChars[index],
              revealed: true,
              showSpecial: false,
            };
            return newChars;
          });
          if (index === splitText.length - 1) {
            setTimeout(() => setAnimationComplete(true), speed);
          }
        }, speed);
      }, speed * index * 2);
    });
    console.log(chars, "chall");
  }, []);

  const handleHover = () => {
    if (!animationComplete) return;

    chars.forEach((_, index) => {
      setTimeout(() => {
        setChars((prevChars) => {
          const newChars = [...prevChars];
          newChars[index] = {
            ...newChars[index],
            showSpecial: true,
            display:
              specialChars[Math.floor(Math.random() * specialChars.length)],
          };
          return newChars;
        });

        setTimeout(() => {
          setChars((prevChars) => {
            const newChars = [...prevChars];
            newChars[index] = {
              ...newChars[index],
              showSpecial: false,
            };
            return newChars;
          });
        }, speed);
      }, speed * index);
    });
  };

  return (
    <div className="flex" onMouseEnter={handleHover}>
      {chars.length > 0 &&
        chars.map((char, index) => (
          <span
            key={index}
            className={`inline-block text-inherit transition-all duration-100 ${
              char.showSpecial
                ? "bg-black text-white"
                : "bg-transparent text-black"
            }`}
          >
            {char.revealed
              ? char.original === " "
                ? "\u00A0"
                : char.original
              : char.showSpecial
              ? char.display
              : " "}
          </span>
        ))}
    </div>
  );
};

export default TypingEffect;
