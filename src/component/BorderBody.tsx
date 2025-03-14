//

import React from "react";

type dd = {
  children: React.ReactNode;
  className?: string;
};

function BorderBody(props: dd) {
  return (
    <section className={` border-[#EBEBF2] border-t phone:px-10 px-5`}>
      <div
        className={`${props.className} tablet:p-10 tablet:py-10 py-5 border-[#EBEBF2] tablet:border-r tablet:border-l`}
      >
        {props.children}
      </div>
    </section>
  );
}

export default BorderBody;
