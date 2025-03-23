//
"use client";
import Link from "next/link";
import React, { useState } from "react";
import date from "date-and-time";
import TypingEffect from "./TypingEffect";

function Header() {
  const [time] = useState(new Date());
  return (
    <header className=" flex justify-between">
      <Link href={"/"} className="fade_text phone:flex phone:gap-2">
        {/* <TextAnimation text={"JUDEEJIKE_LDN 01.03 PM"} /> */}
        JUDEEJIKE_LDN <p>{date.format(time, "hh.mm A")}</p>
      </Link>
      <div className="flex phone:gap-10 phone:items-center items-start gap-3 fade_text">
        <div className="flex smm:flex-row flex-col smm:gap-8 fade_text">
          <Link href={"/showcase"}>
            {" "}
            <TypingEffect word="SHOWCASE" />
          </Link>
          <Link href={"/about"}>ABOUT</Link>
          <Link
            href={
              "https://jhud.notion.site/User-Research-Repository-8cc925204f314fc38381189dc38587b6?pvs=4"
            }
            target="_blank"
          >
            UX RESOURCE
          </Link>
        </div>
        <Link
          href={"mailto:JUDEEJIKEUX@GMAIL.COM"}
          className="bg-[#18181B] text-white px-3 py-[2px]"
        >
          LETS TALK
        </Link>
      </div>
    </header>
  );
}

export default Header;
