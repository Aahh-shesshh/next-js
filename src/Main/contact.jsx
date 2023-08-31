import React, { useState } from "react";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { sendContactForm } from "@/lib/api";
const initialValues = { name: "", email: "", message: "" };

const initialState = { values: initialValues };

export default function Contact() {
  const [data, setData] = useState(initialState);
  const { values } = data;
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await sendContactForm(values);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setIsLoading(false);
  };

  return (
    <div
      id="contact"
      className="w-full bg-black lg:pl-[170px] sm:pl-[10px] pr-[50px] relative"
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
            <div className="flex items-center flex-col">
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
              value={data.values.email}
              onChange={handleChange}
              required={true}
              name="email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white  transition-all"
              type="text"
              placeholder="Your name"
              value={data.values.name}
              onChange={handleChange}
              required={true}
              name="name"
            />
            <input
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white  
               transition-all mb-8 resize-none"
              type="text"
              placeholder="Your message"
              value={data.values.message}
              onChange={handleChange}
              required={true}
              name="message"
            />
            <button
              className="send-btn relative"
              type="button"
              onClick={onSubmit}
              
            >
              Send Message{" "}
              {isLoading && (
                <AiOutlineLoading3Quarters
                  size={20}
                  className="absolute right-4 top-5 animate-spin"
                />
              )}
            </button>
          </motion.form>
        </div>
        <br />
        <hr className="w-full px-10  border-gray-500" />
      </div>
    </div>
  );
}

// Home.Layout = Contact.BaseLayout;
