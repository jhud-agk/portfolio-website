/* eslint-disable @next/next/no-img-element */
//

import BorderBody from "@/component/BorderBody";
import Header from "@/component/Header";
import React from "react";

function ShowCase() {
  return (
    <main>
      <BorderBody className="h-[246px]">
        <Header />
      </BorderBody>
      <BorderBody className="">
        <div className="flex justify-between fade_text">
          <p className="uppercase">SHOWCASE</p>
          <div className="sm:w-[460px] sm:block hidden black_text font-medium exper">
            <p className="text-right">
              This is a collection of concepts, side projects, unused
              experiments,
            </p>
            <p>
              collabs, deigns from other projects ... to sum it up, the ones
              that got away.
            </p>
          </div>
        </div>
        <div className="block sm:hidden black_text font-medium mt-8">
          <p>
            This is a collection of concepts, side projects, unused experiments,
            collabs, deigns from other projects ... to sum it up, the ones that
            got away.
          </p>
        </div>

        <section className="sm:mt-[200px] mt-[100px] flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4 w-full md:w-[764px]">
            <div>
              <img
                src="/showcase/effortless.png"
                alt=""
                className="w-full h-auto"
              />
              <p className="mt-2">[001]</p>
            </div>
            <div>
              <img
                src="/showcase/workplace 1.png"
                className="object-cover w-full h-auto"
                alt=""
              />
              <p className="mt-2">[003]</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[530px]">
            <div className="h-[300px] md:h-[460px]">
              <img
                src="/showcase/JNJ 1.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <p className="mt-2">[002]</p>
            </div>
            <div className="h-[400px] md:h-[660px] mt-4">
              <img
                src="/showcase/frame 69.png"
                className="object-cover w-full h-full"
                alt=""
              />
              <p className="mt-2">[004]</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9">
          <div className="w-full md:w-[526px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 71.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <p className="mt-2">[005]</p>
          </div>
          <div className="w-full md:w-[765px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 70.png"
              className="object-cover w-full h-full"
              alt=""
            />
            <p className="mt-2">[006]</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9">
          <div className="w-full md:w-[647px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 72.png"
              className="object-cover w-full h-full"
              alt=""
            />
            <p className="mt-2">[007]</p>
          </div>
          <div className="w-full md:w-[647px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 73.png"
              className="object-cover w-full h-full"
              alt=""
            />
            <p className="mt-2">[008]</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9">
          <div className="w-full md:w-[765px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 75.png"
              className="h-full w-full object-cover"
              alt=""
            />
            <p className="mt-2">[009]</p>
          </div>
          <div className="w-full md:w-[529px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 74.png"
              className="object-cover h-full w-full"
              alt=""
            />
            <p className="mt-2">[010]</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9">
          <div className="w-full md:w-[647px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 76.png"
              className="h-full w-full object-cover"
              alt=""
            />
            <p className="mt-2">[011]</p>
          </div>
          <div className="w-full md:w-[647px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 74.png"
              className="object-cover h-full w-full"
              alt=""
            />
            <p className="mt-2">[012]</p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-9 mb-20">
          <div className="w-full md:w-[647px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 78.png"
              className="h-full w-full object-cover"
              alt=""
            />
            <p className="mt-2">[013]</p>
          </div>
          <div className="w-full md:w-[647px] h-[400px] md:h-[666px]">
            <img
              src="/showcase/Frame 79.png"
              className="object-cover h-full w-full"
              alt=""
            />
            <p className="mt-2">[014]</p>
          </div>
        </section>
      </BorderBody>
    </main>
  );
}

export default ShowCase;
