import SkillCard from "@/components/Cards/skillsCard";
import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <div id="skills" className="w-full relative">
      <div className="flex px-[50px] gap-4  flex-col skills items-center justify-center ">
        <h2 className="text-stone-400 text-5xl">My Skills</h2>

        <div className="w-[250px] h-1 bg-white flex items-center">
          <div className="w-[15px] circle h-[15px] rounded-full bg-orange-400"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg text-stone-400 text-center w-[600px]">
            I have experience of new web technologies such as
            <span className="text-orange-400"> NEXT JS</span>.I also have
            experince of backend as well as I have made few projects using
            <span className="text-orange-400"> NODE JS and EXPRESS JS</span>.
          </p>
        </div>
        <SkillCard />
        <div className="flex flex-col gap-5"></div>
      </div>
    </div>
  );
}
