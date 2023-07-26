import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/variant";

export default function SkillsCard({ children, baseVelocity = 100, url }) {
  return (
    <div>
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-row "
      >
        <div className="tooltip ">
          <Image
            src={"/images/react.png"}
            className="hover:scale-110 ease-in-out transition-all"
            width={80}
            height={80}
          />
          Hello
          <span className="tooltiptext bg-orange-400 text-stone-500">
            ReactJS
          </span>
        </div>
      </motion.div>
    </div>
  );
}
