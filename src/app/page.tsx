"use client";
// import Loader from "@/component/Loader";
import ShortInfo from "@/component/ShortInfo";
// import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import TextAnimation from "@/component/TextWipe";
// import { useGSAP } from "@gsap/react";
import Header from "@/component/Header";
import BorderBody from "@/component/BorderBody";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import animeation1 from "@/lottie-files/wireframe-2 (transaction).json";
// import bumble1 from "@/lottie-files/Bumble-1.json";
// import bumble2 from "@/lottie-files/Bumble interaction.json";
import bumble3 from "@/lottie-files/Bumble-2.json";
import squad from "@/lottie-files/Squad-1.json";
import squad2 from "@/lottie-files/Squad 2.0 -1.json";
// import nhs2 from "@/lottie-files/NHS - 2.json";
import nhs from "@/lottie-files/NHS Showreel.json";
// import Footer from "@/component/Footer";

gsap.registerPlugin(ScrollTrigger);
function Home() {
  // useEffect(() => {
  //   gsap.from(".box", {
  //     opacity: 0,
  //     y: 100,
  //     duration: 1,
  //     stagger: 0.3,
  //     scrollTrigger: {
  //       trigger: ".box",
  //       start: "top 80%", // Starts animation when element is 80% visible
  //       end: "bottom 20%", // Ends when element reaches 20%
  //       toggleActions: "play none none none", // Controls animation behavior
  //       markers: false, // For debugging (remove in production)
  //     },
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.from(".exper", {
  //     x: 400,
  //     opacity: 0.4,
  //     duration: 0.5,
  //     // ease: "bounce.in",
  //     ease: "power1.in",
  //   });
  // }, []);

  return (
    <main className="font-roboto-mono">
      {/* <Loader /> */}
      <BorderBody className="h-[400px]">
        <Header />
      </BorderBody>
      <BorderBody className="">
        <section className="smm:flex justify-between fade_text">
          <div className="flex smm:w-[45%] justify-between">
            <p>[SELECTED WORK]</p>
            <p>PORTFOLIO_20/25</p>
          </div>
          <div className="smm:block hidden tablet:w-[480px] w-[400px] black_text font-medium exper">
            <p className="text-right">
              User Experience Designer & Researcher based in London,{" "}
            </p>
            <p>
              focused on user-centred design and storytelling. In my journey as
              a designer, I&apos;ve discovered the incredible power of a
              user-centred approach.
            </p>
          </div>
          <div className="block smm:hidden black_text font-medium mt-8">
            <p>
              User Experience Designer and Researcher based in London, focused
              on user-centred design and storytelling. In my journey as a
              designer, I&apos;ve discovered the incredible power of a
              user-centred approach.
            </p>
          </div>
        </section>
        <section className="sm:flex lg:gap-[90px] gap-4 sm:mt-[150px] mt-16">
          <ShortInfo
            brand="Bumble"
            info=" Recommending a friend is a free feature that lets bumble users safely
            and easily share a Bumble profile with someone they know, encouraging
            participation."
            role="Product designer and researcher"
            period="Q3 2022 - Q1 2023"
            className="lg:w-[445px] sm:w-1/2 w-full"
            imgClass="h-[386px] lg:w-[515px] w-full"
            animation={bumble3}
          />
          <ShortInfo
            brand="Squad"
            info="Squad is an online platform that helps business owners create and manage their own online stores."
            role="Product designer and researcher"
            period="Q3 2022 - Q1 2023"
            className="lg:grow sm:w-1/2 w-full sm:mt-0 mt-16"
            imgClass="w-full"
            textClass="lg:w-[47%]"
            animation={squad}
          />
        </section>
        <section className="sm:flex sm:mt-[150px] justify-between">
          <ShortInfo
            brand="Squad 2.0"
            info="We launched our payment platform with big goals but didn’t meet them. This case study looks at why, listens to user feedback, and finds ways to fix the issues."
            role="Product designer and researcher"
            period="Q3 2022 - Q1 2023"
            className="sm:w-[32.5%] w-full box sm:mt-0 mt-16"
            imgClass="lg:h-[500px] h-[400px] w-full box"
            textClass="lg:w-[80%]"
            animation={squad2}
          />
          <ShortInfo
            brand="NHS Digital"
            info="The NHS app is a healthcare app that provide patients with information about their health and treatment options."
            period="Q3 2022 - Q1 2023"
            className="sm:w-[32.5%] w-full box sm:mt-0 mt-16"
            imgClass="lg:h-[500px] h-[400px] w-full box"
            textClass="lg:w-[80%]"
            role="Product designer and researcher"
            animation={nhs}
          />
          <ShortInfo
            brand="Our Dorset Digital"
            info="Our Dorset Digital is a program focused on creating and using digital tools to improve healthcare for Dorset residents, NHS staff, and frontline teams."
            period="Q3 2022 - Q1 2023"
            className="sm:w-[32.5%] w-full box sm:mt-0 mt-16"
            imgClass="lg:h-[500px] h-[400px] w-full box"
            textClass="lg:w-[80%]"
            role="Product designer and researcher"
          />
        </section>
      </BorderBody>
      {/* <Footer /> */}
    </main>
  );
}

export default Home;
