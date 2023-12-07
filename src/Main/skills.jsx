import SkillCard from "@/components/Cards/skillsCard";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

export default function Skills() {
  return (
    <div id="skills" className="w-full relative pt-2">
      <div className="flex px-[50px] gap-4  flex-col skills items-center  justify-center">
        <h2 className="text-white font-bold  lg:text-5xl md:text-5xl text-3xl">
          My Skills
        </h2>

        <div className="w-[250px] h-1 bg-white flex items-center">
          <div className="w-[15px] circle h-[15px] rounded-full bg-orange-400"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg text-stone-400 text-center lg:w-[600px] md:w-[600px] w-[300px]">
            I have experience of new web technologies such as
            <span className="text-orange-400"> NEXT JS</span>.I also have
            experince of backend as well as I have made few projects using
            <span className="text-orange-400"> NODE JS and EXPRESS JS</span>.
          </p>
        </div>
        <hr className="w-full px-10  border-gray-500" />
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-stone-400">Frontend skills</h3>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-row items-center justify-center gap-20"
          >
            <SkillCard url={"/images/React.png"} title={"ReactJS"} />
            <SkillCard url={"/images/tailwind.png"} title={"Tailwind CSS"} />
            <SkillCard url={"/images/next.png"} title={"NextJS"} />
            <SkillCard url={"/images/typescript.png"} title={"Typescript"} />
          </motion.div>
          <hr className="w-full px-10  border-gray-500" />
          <h3 className="text-2xl text-stone-400">Backend skills</h3>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-row items-center gap-20 justify-center"
          >
            <SkillCard url={"/images/expressjs.png"} title={"ExpressJS"} />
            <SkillCard url={"/images/node.png"} title={"NodeJS"} />
            <SkillCard url={"/images/prisma.png"} title={"Prisma ORM"} />
          </motion.div>
          <hr className="w-full px-10  border-gray-500" />
          <h3 className="text-2xl text-stone-400">Version control</h3>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-row items-center gap-20 justify-center"
          >
            <SkillCard url={"/images/github.png"} title={"GitHub"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
