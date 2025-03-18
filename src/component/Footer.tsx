//

import React from "react";
import BorderBody from "./BorderBody";
import Link from "next/link";

function Footer() {
  return (
    <BorderBody className="">
      <div className="sm:flex justify-between fade_text pb-20">
        <p>SELECT NEXT PROJECT</p>
        <div className="sm:w-[510px] black_text exper">
          <div className="">
            <Link
              href={
                "Squad 2.0: Navigating Challenges, Elevating User Experiences."
              }
            ></Link>
          </div>
          <div className="mt-3">
            <Link href={""}>
              Squad 2.0: Navigating Challenges, Elevating User Experiences.
            </Link>
          </div>
          <div className="mt-3">
            <Link href={""}>
              Reimagining Bumbles Profile Sharing Experience
            </Link>
          </div>
          <div className="mt-3">
            <Link href={""}>A UX Research Case Study on the NHS App</Link>
          </div>
          <div className="mt-3">
            <Link href={""}>Usability Evaluation of Our Dorset Digital</Link>
          </div>
        </div>
      </div>
    </BorderBody>
  );
}

export default Footer;
