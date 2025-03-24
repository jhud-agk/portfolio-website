"use client";
// import Loader from "@/component/Loader";
import ShortInfo from "@/component/ShortInfo";

import Header from "@/component/Header";
import BorderBody from "@/component/BorderBody";
import squad from "@/lottie-files/Squad-1.json";
import squad2New from "@/lottie-files/Landing/Squad 2.json";
import nhsNew from "@/lottie-files/Landing/NHS.json";
import bumbleNew from "@/lottie-files/Landing/Bumble.json";
import AnimationCon from "@/component/AnimationParent";
// import Lenis from "lenis";
// import TypingEffect from "@/component/TypingEffect";

function Home() {
  return (
    <AnimationCon>
      {/* <Loader /> */}
      <BorderBody className="h-[417px]" cross={false}>
        <Header />
      </BorderBody>
      <BorderBody className="">
        <section className="smm:flex justify-between fade_text box first">
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
          <div className="block smm:hidden black_text font-medium phone:mt-8 mt-10 reveal">
            <p>
              User Experience Designer and Researcher based in London, focused
              on user-centred design and storytelling. In my journey as a
              designer, I&apos;ve discovered the incredible power of a
              user-centred approach.
            </p>
          </div>
        </section>
        <section className="sm:flex gap-4 sm:mt-[244px] mt-16 m-auto items-start justify-between first">
          <ShortInfo
            brand="[1] Reimagining Bumble’s Profile Sharing Experience"
            // className="lg:w-[445px] sm:w-1/2 w-full "
            className="sm:w-1/3"
            // imgClass="h-[386px] lg:w-[515px] w-full 2xl:h-[450px] 2xl:w-"
            imgClass=""
            animation={bumbleNew}
            url="/bumble"
            textClass=""
          />
          <ShortInfo
            brand="[2] Squad: Empowering African Businesses through Digital Payments"
            // className="lg:grow sm:w-1/2 w-full sm:mt-0 mt-16"
            // imgClass="w-full"
            className="sm:w-2/3"
            animation={squad}
            url="/squad1"
            textClass=""
            imgClass=""
          />
        </section>

        <section className="sm:flex sm:mt-[250px] justify-between gap-6 items-start pb-36 reveal">
          <ShortInfo
            brand="[3] Squad 2.0: Navigating Challenges, Elevating User Experiences"
            className="sm:w-1/3"
            animation={squad2New}
            url="/squad2"
            textClass="reveal"
            imgClass="reveal"
          />
          <ShortInfo
            brand="[4] UX Research Case Study on the NHS App"
            className="sm:w-1/3"
            animation={nhsNew}
            url="/nhs"
            textClass="reveal"
            imgClass="reveal"
          />
          <ShortInfo
            brand="[5] Usability Evaluation of Our Dorset Digital"
            className="sm:w-1/3"
            url="/doorset-digital"
            image={"/Component 1s.png"}
            textClass="reveal"
            imgClass="reveal"
          />
        </section>
      </BorderBody>
      {/* <Footer /> */}
    </AnimationCon>
  );
}

export default Home;
