//

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className=" flex justify-between p-4">
      <p className="fade_text" id="">
        {/* <TextAnimation text={"JUDEEJIKE_LDN 01.03 PM"} /> */}
        JUDEEJIKE_LDN 01.03 PM
      </p>
      <div className="flex phone:gap-10 gap-3 fade_text">
        <div className="flex smm:flex-row flex-col smm:gap-10 fade_text">
          <Link href={""}>CASE STUDIES</Link>
          <Link href={""}>ABOUT</Link>
          <Link href={""}>UX RESOURCE</Link>
        </div>
        <Link href={""}>LETS TALK</Link>
      </div>
    </header>
  );
}

export default Header;
