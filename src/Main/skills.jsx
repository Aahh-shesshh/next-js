import React from "react";
import SKillsCard from "../components/Cards/skillsCard";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

export default function Skills() {
  return (
    <div id="skills" className="h-[100vh] w-full bg-orange-500 relative">
      <div className="absolute top-[-48px] right-[800px] skills">
        <h4 className="text-8xl inline-block font-bold ">S</h4>
        <h4 className="text-8xl inline-block font-bold ">K</h4>
        <h4 className="text-8xl inline-block font-bold ">I</h4>
        <h4 className="text-8xl inline-block font-bold ">L</h4>
        <h4 className="text-8xl inline-block font-bold ">L</h4>
        <h4 className="text-8xl inline-block font-bold ">S</h4>
      </div>
      <div className="flex px-[50px] gap-4 pt-[70px] flex-col skills items-center justify-center">
        <h1 className="">My Skills</h1>
        <div  className="w-[250px] h-1 bg-white flex items-center">
            <div className="w-[15px] circle h-[15px] rounded-full bg-lime-500"></div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-row gap-[100px]"
        >
          <SKillsCard image="/images/html.jpg" name="1. Html" />
          <SKillsCard image="/images/CSS.png" name="2. CSS" />
          <SKillsCard image="/images/JS.jpg" name="3. JavaScript" />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-row gap-[100px]"
        >
          <SKillsCard image="/images/react.jpg" name="4. React" />
          <SKillsCard image="/images/python-logo.png" name="5. Python" />
          <SKillsCard image="/images/next.jpg" name="6. Next JS" />
        </motion.div>
      </div>
    </div>
  );
}
