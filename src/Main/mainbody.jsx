// import BaseLayout from "@/layout/base-layout";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { developer, title } from "@/Data/frontend";

const Mainbody = () => {
  return (
    <div
      id="home"
      className="lg:px-10 lg:pt-32 lg:pb-10 lg:w-full lg:items-center lg:justify-center flex lg:flex-col md:flex-col  flex-col pt-28 md:pt-24 items-center justify-center"
    >
      <div className="flex flex-col gap-2">
        <motion.h1
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-row font-bold"
        >
          {title.map((i) => {
            return (
              <span
                key={i}
                className="text-white lg:leading-[200px]  lg:opacity-40 lg:hover:opacity-100 md:text-8xl  text-7xl opacity-40 hover:opacity-100 lg:mt-0 lg:ml-0 lg:font-bold lg:text-[200px]"
              >
                {i}
              </span>
            );
          })}
        </motion.h1>
        <motion.h1
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-row font-bold"
        >
          {developer.map((i, key) => {
            return (
              <span className="text-white lg:leading-[200px]  lg:opacity-40 lg:hover:opacity-100 md:text-8xl text-7xl opacity-40 hover:opacity-100 lg:mt-0 lg:ml-0 lg:font-bold lg:text-[200px]">
                {i}
              </span>
            );
          })}
        </motion.h1>
      </div>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">About me</h1>
        <p className="lg:text-lg text-sm text-stone-400 text-center lg:w-[600px] w-[400px]">
          Hi, I am Ashish Khatri a{" "}
          <span className="text-orange-400">Web developer</span> with a good
          experince in frontend development. My expertise allows me to create
          visually appealing and user-friendly websites that deliver an
          exceptional experience to the end-user.
        </p>
      </div>
      <br />
      <hr className="w-full px-10  border-gray-500" />
    </div>
  );
};

export default Mainbody;

{
  /* <TypeAnimation
            sequence={["Student", 2000, "FrontEnd", 2000, "Coder", 2000]}
            speed={50}
            className="text-accent"
            repeat={Infinity}
          /> */
}

{
  /* <p className="text-white text-sm w-[200px] lg:w-[400px] ml-[100px] mt-[50px] lg:mt-0 lg:ml-0 lg:text-xl">
          {" "}
          As a skilled Frontend Developer, I have a strong background in HTML,
          CSS, JavaScript, and React. My expertise allows me to create visually
          appealing and user-friendly websites that deliver an exceptional
          experience to the end-user. This is just a website i have created
          using my knowledge of react.
        </p> */
}
