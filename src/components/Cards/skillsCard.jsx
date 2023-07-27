import React from "react";
import Image from "next/image";

export default function SkillsCard({ url, title }) {
  return (
    <div>
      <div className="tooltip ">
        <Image
          src={url}
          className="hover:scale-110 ease-in-out transition-all"
          width={80}
          height={80}
        />
        <span className="tooltiptext bg-orange-400 text-stone-500">
          {title}
        </span>
      </div>
    </div>
  );
}
