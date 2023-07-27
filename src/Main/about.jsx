import BaseLayout from "@/layout/base-layout";
import React from "react";
import CountUp from "react-countup/";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      id="about"
      className="h-[15  0vh] lg:h-[100vh] w-full bg-black lg:pl-[170px] sm:pl-[10px] pr-[50px] relative"
    >
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-white  font-extrabold text-5xl"> ABOUT ME</h1>
        <div className="w-[250px] h-1 bg-white flex items-center">
          <div className="w-[15px] circle h-[15px] rounded-full bg-lime-500"></div>
        </div>{" "}
      </div>
      <br />
      <div className="border-2 w-full flex flex-col lg:flex-row items-center justify-center ml-[20px] lg:ml-0 lg:h-[450px] h-[750px]  rounded-md">
        <div className="w-[500px] h-[445px] flex flex-col gap-[10px] justify-center items-center">
          <h1 className="font-extrabold text-4xl">Academics</h1>
          <div className="line"></div>
          <h3 className="font-bold text-xl text-white">
            Bachelor of Hons(Computing)
          </h3>
          <p className="text-xl text-white">
            (Started Feb 2022 - ongoing)
            <br />
            Informatices College Pokhara
          </p>
          <br />
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl text-white">10+2 in Science</h3>
            <p className="text-xl w-[300px] flex items-center justify-center text-white">
              (Jun 2020 - Jun 2022) Kathmandu Institute of Science &
              Technology(KIST), Kathmandu
            </p>
          </div>
        </div>

        <div className="w-[500px] h-[445px] flex flex-col gap-[10px] justify-center items-center">
          <h1 className="font-extrabold text-4xl">Hi!</h1>
          <div className="line"></div>
          <h3 className="font-bold text-xl text-white"></h3>
          <p className="text-xl text-white w-[350px]">
            I am currently in 3rd year at ICP and am confident in my
            ability to turn complex designs into clean and efficient code.
          </p>
          <br />
          <div className="flex flex-row w-[350px] items-center justify-center gap-[30px]">
            <div>
              <div className="text-[40px] text-white font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={6} duration={3} /> : null}
              </div>
              <div className="text-sm text-white tracking-[2px]">
                Months of <br />
                Experience
              </div>
            </div>
            <div>
              <div className="text-[40px] text-white font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={6} duration={3} /> : null}+
              </div>
              <div className="text-sm text-white tracking-[2px]">
                Projects <br />
                Completed
              </div>
            </div>
            <div>
              <div className="text-[40px] text-white font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={4} duration={3} /> : null}+
              </div>
              <div className="text-sm text-white tracking-[2px]">
                SKILLS <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


