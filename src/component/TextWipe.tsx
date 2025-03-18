"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface TextAnimationProps {
  text: string;
  randomSpecialChars?: string[];
  delay?: number;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  randomSpecialChars = ["#", "*", "$", "@", "%"],
  delay = 0.2,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const originalText = textRef.current.textContent || "";
    const splitText = new SplitType(textRef.current, { types: "chars" });
    const chars = splitText.chars;

    const getRandomChar = () => {
      return randomSpecialChars[
        Math.floor(Math.random() * randomSpecialChars.length)
      ];
    };

    const animateText = () => {
      const timeline = gsap.timeline();

      chars!.forEach((char: HTMLElement, index: number) => {
        const selector = gsap.utils.selector(char);
        const before = selector("::before")[0] as HTMLElement; // Correctly target the ::before pseudo-element

        timeline.to(
          before,
          {
            width: "100%",
            duration: 0.1,
            ease: "power2.inOut",
            delay: delay * index,
            onStart: () => {
              char.textContent = getRandomChar();
            },
            onComplete: () => {
              char.textContent = originalText[index];
            },
          },
          0
        );

        timeline.to(
          before,
          {
            width: "0%",
            duration: 0.3,
            ease: "power2.inOut",
            delay: delay * index + 0.3,
          },
          0
        );
      });
    };

    animateText();

    return () => {
      splitText.revert();
      // timeline.kill();
    };
  }, [text, randomSpecialChars, delay]);

  return (
    <div
      style={{
        fontSize: "3em",
        fontWeight: "bold",
        position: "relative",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <span ref={textRef} style={{ display: "inline-block" }}>
        {text}
      </span>
      <style jsx>{`
        span {
          position: relative;
        }
        span::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: black;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default TextAnimation;
