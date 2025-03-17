//

import React from "react";

type dd = {
  children: React.ReactNode;
  className?: string;
};

function BorderBody(props: dd) {
  return (
    <section className={`border-[#EBEBF2] border-t px-6`}>
      <div
        className={`${props.className} tablet:px-8 py-5 border-[#EBEBF2] tablet:border-r tablet:border-l`}
      >
        {props.children}
      </div>
    </section>
  );
}

export default BorderBody;
