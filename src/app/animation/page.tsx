"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  // const boxesRef = useRef<HTMLDivElement[]>([]);
  // const [counter, setCounter] = useState(0);

  // function updateCounter() {
  //   if (counter === 100) {
  //     return;
  //   }
  //   setCounter(counter + Math.floor(Math.random() * 10) + 1);
  //   if (counter > 100) {
  //     setCounter(100);
  //   }
  // }

  // useEffect(() => {
  //   if (counter <= 99) {
  //     setTimeout(() => {
  //       setCounter(counter + 1);
  //     }, 100);
  //   }
  // }, [counter]);

  // useEffect(() => {
  // updateCounter();
  // const delay = Math.floor(Math.random() * 200) + 50;
  //   setTimeout(updateCounter, 100);
  // }, [counter]);

  // useGSAP(() => {
  //   if (counter >= 70) {
  //     gsap.to(boxesRef.current, {
  //       height: 0,
  //       // duration: 0.5,
  //       delay: 3.5,
  //       stagger: {
  //         amount: 0.2,
  //       },
  //       ease: "power4.inOut",
  //     });
  //   }

  //   gsap.to("#counter", {
  //     delay: 3.5,
  //     opacity: 0,
  //     display: "none",
  //   });
  // }, [counter]);

  const textRef = useRef(null);

  // useEffect(() => {
  //   const texts = new SplitType(textRef.current!, { types: "chars" });
  // gsap.fromTo(
  //   texts.chars,
  //   { y: "100%", opacity: 0, backgroundColor: "black", color: "white" },
  //   {
  //     y: "0%",
  //     opacity: 1,
  //     duration: 1,
  //     stagger: 0.1,
  //     ease: "power2.out",
  //   }
  // );

  //   gsap.fromTo(
  //     texts.chars,
  //     {
  //       background: "black",
  //       opacity: 0,
  //       color: "white",
  //     },

  //     {
  //       background: "none",
  //       opacity: 1,
  //       duration: 1,
  //       stagger: 0.1,
  //       color: "black",
  //     }
  //   );
  // }, []);

  return (
    <div>
      {/* <div className="scroll-wrapper" ref={wrapper}>
        <div className="scroll-content" ref={scrollContainer}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="item">
              Item {index + 1}
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex">
        <p
          id="counter"
          className="absolute text-white text-[200px] top-[30px] right-[200px] font-bold"
        >
          {/* {counter} */}
        </p>
        {/* {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => el && (boxesRef.current[i] = el)}
            className="show h-screen w-1/6 bg-black"
          ></div>
        ))} */}
      </div>
      <h1 ref={textRef} className="text-6xl font-bold relative">
        Twister Animation
      </h1>
    </div>
  );
};

export default HorizontalScroll;
