import React from "react";
// import { motion } from "framer-motion";

import { projects } from "@/Data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div id="project" className="w-full projects relative pb-11">
      <div className="pt-[150px] ml-[10px] lg:ml-[170px] mr-[40px]">
        <div className="flex flex-row mb-[30px] items-center justify-between">
          <div>
            <h5 className="text-white font-bold font-sans mb-2 text-xl">
              These are some projects
            </h5>
            <div className="w-[250px] h-1 bg-white flex items-center">
              <div className="w-[15px] circle h-[15px] rounded-full bg-lime-500"></div>
            </div>{" "}
          </div>
          <div className="">
            <a
              className="text-orange-500 flex flex-row items-center justify-center gap-1"
              href="https://github.com/Aahh-shesshh?tab=repositories"
              target={"_blank"}
            >
              See all <FaArrowRight />{" "}
            </a>
          </div>
        </div>
        <Swiper
          spaceBetween={40}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, key) => {
            return (
              <SwiperSlide key={key}>
                <a href={project.link}>
                  <div className="flex-1 flex flex-col  gap-y-12 mb-10 lg:mb-0">
                    {/* image */}
                    <div className="group relative overflow-hidden h-[300px] border-2 border-white/50 rounded-xl">
                      {/* overlay */}
                      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                      {/* images */}
                      <img
                        className="group-hover:scale-125 transition-all duration-500"
                        src={project.img}
                        alt="ajfh"
                      ></img>
                      {/* pretitle */}
                      <div
                        className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50"
                      >
                        <span className="text-lime-500 ">
                          {project.pretitle}
                        </span>
                      </div>
                      {/* title */}
                      <div
                        className="absolute -bottom-full left-12 
                          group-hover:bottom-14 transition-all duration-700 z-50"
                      >
                        <span className="text-3x1 text-white">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <br />
        <br />
        <hr className="w-full px-10  border-gray-500" />
      </div>
    </div>
  );
}
