//
"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import AnimatedText from "@/component/TextWipe";

const Anima = () => {
  useEffect(() => {
    gsap.fromTo(
      ".f",
      { scaleY: 0, opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="cnt_sc">
      <AnimatedText text={"jjjjjj"} />
    </div>
  );
};

export default Anima;
