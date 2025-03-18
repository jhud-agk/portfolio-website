//
"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const AnimatedText = () => {
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
      <h4
        className="Awrite inview stview okF"
        data-params="1.6"
        data-bucle="1"
        style={{ opacity: 1 }}
      >
        <div
          className="iO iO-std"
          data-io="2"
          style={{ visibility: "visible" }}
        ></div>
        <div className="word" style={{ display: "inline-block" }}>
          {[
            "$",
            "*",
            "[",
            "9",
            "€",
            "s",
            "|",
            "+",
            "c",
            "{",
            "]",
            "r",
            "{",
            "%",
            "o",
            "+",
            "{",
            "l",
            "{",
            "+",
            "l",
          ].map((char, index) => (
            <div
              key={index}
              className="char"
              style={{ display: "inline-block", opacity: 1 }}
            >
              <span
                className="f"
                aria-hidden="true"
                style={{ display: "block" }}
              >
                {char}
              </span>
              <span className="n" style={{ opacity: 1 }}>
                {char}
              </span>
            </div>
          ))}
        </div>
      </h4>
    </div>
  );
};

export default AnimatedText;
