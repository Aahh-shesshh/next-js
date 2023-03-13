import React from "react";
import Image from "next/image";
import GIF from "../../public/images/gif.gif";

export default function Loading() {
  return (
    <div className="w-full h-[100vh]">
      <div id={"globalLoader"}>
        <div className="loader">
          <div />
          <div />
        </div>

        <Image src={GIF} alt="loading" className="mix-blend-hard-light" />
      </div>
    </div>
  );
}
