//
"use client";
import dynamic from "next/dynamic";
import React from "react";
// import Lottie from "lottie-react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
type ShortType = {
  brand: string;
  info: string;
  role: string;
  period: string;
  className: string;
  imgClass: string;
  textClass?: string;
  animation?: unknown;
};

function ShortInfo(props: ShortType) {
  return (
    <div className={`${props.className} black_text`}>
      <div className={`${props.imgClass}  bg-amber-400`}>
        <Lottie
          animationData={props.animation}
          loop={true}
          className="w-full h-full"
        />
      </div>
      <div className={`${props.textClass}`}>
        <p className="pt-3">{props.brand}</p>
        <p className="mt-1">{props.info}</p>
        <p className="mt-2">{props.role}</p>
        <p>{props.period}</p>
      </div>
    </div>
  );
}

export default ShortInfo;
