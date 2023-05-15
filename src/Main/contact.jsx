import React from "react";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      id="contact"
      className="lg:h-[100vh] h-[150vh] w-full bg-black lg:pl-[170px] sm:pl-[10px] pr-[50px] relative"
    >
      {/* contact me upper */}
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-white  font-extrabold text-5xl"> CONTACT ME</h1>
        <div className="w-[250px] h-1 bg-white flex items-center">
          <div className="w-[15px] circle h-[15px] rounded-full bg-lime-500"></div>
        </div>{" "}
      </div>
      <br />

      {/* form  */}
      <div>
        <div className="flex flex-col gap-x-6 justify-center items-center lg:flex-row">
          {/* text  */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-xl uppercase text-white font-medium mb-2 tracking-wide">
                Get in touch{" "}
              </h4>
              <h2 className="text-[45px] text-white lg:text-[90] leading-none mb-12">
                Lets Work <br /> Together!
              </h2>
            </div>
          </motion.div>
          {/* text  */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border flex flex-col gap-y-2  p-6 items-start rounded-2xl"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white  transition-all"
              type="email"
              placeholder="Your email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white  transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white  
               transition-all mb-8 resize-none"
              type="text"
              placeholder="Your message"
            />
            <button className="send-btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

// Home.Layout = Contact.BaseLayout;