/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

interface CharData {
  original: string;
  display: string;
  revealed: boolean;
  showSpecial: boolean;
}

const TypingEffect = ({ word }: { word: string }) => {
  const text = word;
  const specialChars = "@#$%&*!?+=()^%}{[]/><";
  const speed = 100; // Adjust speed in milliseconds
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
    console.log(charArray);

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
  }, []);

  const handleHover = () => {
    if (!animationComplete) return; // Ensure hover effect happens after the typing animation

    // Start the hover effect on each character
    chars.forEach((_, index) => {
      setTimeout(() => {
        // Show special character with black background
        setChars((prevChars) => {
          const newChars = [...prevChars];
          newChars[index] = {
            ...newChars[index],
            showSpecial: true, // Show special character
            display:
              specialChars[Math.floor(Math.random() * specialChars.length)], // Set random special character
          };
          return newChars;
        });

        // After the special character shows, transition to the original text with black background
        setTimeout(() => {
          setChars((prevChars) => {
            const newChars = [...prevChars];
            newChars[index] = {
              ...newChars[index],
              showSpecial: false, // Revert back to the original text
            };
            return newChars;
          });
        }, speed); // Speed at which the text changes back to original
      }, speed * index); // Delay to ensure each character appears sequentially
    });
  };

  return (
    <div
      className="flex justify-center items-center"
      onMouseEnter={handleHover}
    >
      {chars.length > 0 &&
        chars.map((char, index) => (
          <span
            key={index}
            className={`inline-block text-center text-inherit transition-all duration-100 ${
              char.showSpecial
                ? "bg-black text-white"
                : "bg-transparent text-black"
            }`}
          >
            {char.revealed
              ? char.original
              : char.showSpecial
              ? char.display
              : " "}
          </span>
        ))}
    </div>
  );
};

export default TypingEffect;
