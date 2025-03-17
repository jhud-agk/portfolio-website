//
"use client";
import Link from "next/link";
import React, { useState } from "react";
import date from "date-and-time";

function Header() {
  const [time] = useState(new Date());

  return (
    <header className=" flex justify-between px-4">
      <Link href={"/"} className="fade_text" id="">
        {/* <TextAnimation text={"JUDEEJIKE_LDN 01.03 PM"} /> */}
        JUDEEJIKE_LDN {date.format(time, "hh.mm A")}
      </Link>
      <div className="flex phone:gap-10 items-center gap-3 fade_text">
        <div className="flex smm:flex-row flex-col smm:gap-10 fade_text">
          <Link href={""}>SHOWCASE</Link>
          <Link href={"/about"}>ABOUT</Link>
          <Link href={""}>UX RESOURCE</Link>
        </div>
        <Link href={""} className="bg-[#18181B] text-white px-3 py-[2px]">
          LETS TALK
        </Link>
      </div>
    </header>
  );
}

export default Header;
