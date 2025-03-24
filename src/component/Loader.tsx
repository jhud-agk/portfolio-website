/* eslint-disable react-hooks/exhaustive-deps */
//
"use client";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TypingEffect from "./TypingEffect";

function Loader() {
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [counter, setCounter] = useState(0);

  function updateCounter() {
    if (counter === 100) {
      return;
    }
    setCounter(counter + Math.floor(Math.random() * 10) + 1);
    if (counter > 100) {
      setCounter(100);
    }
  }

  useEffect(() => {
    // updateCounter();
    // const delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, 100);
  }, [counter]);

  useGSAP(() => {
    if (counter >= 70) {
      gsap.to(boxesRef.current, {
        height: 0,
        // duration: 0.5,
        delay: 3,
        stagger: {
          amount: 0.1,
        },
        ease: "power4.inOut",
      });
    }

    gsap.to("#counter", {
      delay: 3.5,
      opacity: 0,
      display: "none",
    });
    gsap.to("#count", {
      delay: 3.5,
      opacity: 0,
      display: "none",
    });
  }, [counter]);
  return (
    <main className="fixed top-0 left-0 w-screen flex h-screen">
      <div
        id="counter"
        className="absolute font-roboto-mono text-white top-[20px] left-[55px]"
      >
        <TypingEffect word="JUDE EJIKE USER EXPERIENCE DESIGNER" />
        <TypingEffect word="PORTFOLIO_20/25" />
      </div>
      <p
        id="count"
        className="absolute font-roboto-mono text-white phone:text-[160px] text-[60px] bottom-[30px] left-[55px] tracking-wide"
      >
        {counter}%
      </p>
      {[...Array(6)].map((_, i) => (
        <div
          ref={(el) => {
            if (el) boxesRef.current[i] = el;
          }}
          key={i}
          className="show h-screen w-1/6 bg-[#0A0A0A]"
        ></div>
      ))}
    </main>
  );
}

export default Loader;
