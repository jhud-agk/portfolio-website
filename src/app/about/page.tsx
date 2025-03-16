//

import BorderBody from "@/component/BorderBody";
import Header from "@/component/Header";
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

function About() {
  return (
    <div>
      <BorderBody className="h-[300px]">
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="sm:flex justify-between fade_text">
          <p>ABOUT</p>
          <div className="sm:w-[510px] black_text font-medium exper sm:mt-0 mt-6">
            <p className="font-semibold">
              User Experience designer based In London where the weather is as
              unpredictable as the user&apos;s behaviour.
            </p>
            <p className="mt-5">
              I specialise in user-centred design and storytelling, helping
              businesses build products that not only engage and inspire but
              also drive real impact.
            </p>
            <div className="mt-5">
              <p>
                I am a designer on a mission to create experiences that resonate
                deeply with people and leave a lasting and positive impact on
                their lives. In my journey as a designer, I&apos;ve discovered
                the incredible power of a user-centred approach. By putting
                people at the heart of everything I do, I strive to create
                products that meet their needs and delight and inspire them.
              </p>
            </div>
            <div className="mt-5">
              <p>
                My work is a testament to the belief that design should be a
                force for good, enriching the human experience one pixel, one
                interaction, and one product at a time. But I&apos;m not just a
                designer; I&apos;m a master storyteller. I believe that design
                is not merely about aesthetics and functionality; it&apos;s
                about the stories we tell through our creations. I weave user
                experiences into compelling narratives, crafting a seamless
                journey that captivates and engages users from the very first
                touchpoint to the last.
              </p>
            </div>

            <div className="mt-8">
              <p className="flex items-center gap-3 text-[#8A8A8A]">
                READ.CV <HiMiniArrowUpRight color="#18181B" size={16} />
              </p>
              <p className="flex items-center gap-3 text-[#8A8A8A] mt-2">
                LINKEDIN <HiMiniArrowUpRight color="#18181B" size={16} />
              </p>
              <p className="flex items-center gap-3 text-[#8A8A8A] mt-2">
                ARE.NA <HiMiniArrowUpRight color="#18181B" size={16} />
              </p>
              <p className="flex items-center gap-3 text-[#8A8A8A] mt-2">
                INSTAGRAM <HiMiniArrowUpRight color="#18181B" size={16} />
              </p>
              <p className="flex items-center gap-3 text-[#8A8A8A] mt-2">
                JUDEEJIKEUX@GMAIL.COM{" "}
                <HiMiniArrowUpRight color="#18181B" size={16} />
              </p>
            </div>
          </div>
        </div>
      </BorderBody>
    </div>
  );
}

export default About;
