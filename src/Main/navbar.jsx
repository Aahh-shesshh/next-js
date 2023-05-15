import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiHome } from "react-icons/hi";
import { AiFillProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrMail } from "react-icons/gr";
import {GiSkills} from "react-icons/gi";

export default function Navbar() {
  const [toogleMenu, setToogleMenu] = useState(false);

  console.log(toogleMenu);

  return (
    <>
      <div
        className="w-full h-[100px] fixed backdrop-sepia-0 z-[999] flex flex-row justify-between px-[30px]"
        style={{ backdropFilter: "blur(55px)" }}
      >
        {/* Side navv .............  */}
        <div
          className="flex flex-col pl-2 bg-transparent fixed w-[180px] top-[120px] h-[300px]  ease-in-out gap-[30px] left-[-400px] duration-500"
          style={
            toogleMenu ? { transform: "translateX(400px)", zIndex: 100 } : null
          }
        >
          <Link
            activeClass="active"
            className=" gap-[10px]"
            offset={-100}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <p className="text-white flex items-center  text-3xl w-full font-bold">
              <span>
                <HiHome size={30} className="logo" />
              </span>
              Home{" "}
            </p>
          </Link>
          <Link
            activeClass="active"
            className=" gap-[10px]"
            offset={-100}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            <p className="text-white flex items-center  text-3xl w-full font-bold">
              <span>
                <GiSkills size={30} className="logo" />
              </span>
              Skills{" "}
            </p>
          </Link>
          <Link
            activeClass="active"
            className=" gap-[10px]"
            offset={-100}
            to="project"
            spy={true}
            smooth={true}
            duration={500}
          >
            <p className="text-white flex items-center  text-3xl w-full font-bold">
              <span>
                <AiFillProject size={30} className="logo" />
              </span>
              Projects{" "}
            </p>
          </Link>
          <Link
            activeClass="active"
            className="gap-[10px]"
            offset={-100}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <p className="text-white flex items-center  text-3xl w-full font-bold">
              <span>
                <CgProfile size={30} className="logo" />
              </span>
              About{" "}
            </p>
          </Link>
          <Link
            activeClass="active"
            className=" gap-[10px]"
            offset={-100}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <p className="text-white flex items-center  text-3xl w-full font-bold">
              <span>
                <GrMail size={30} className="logo" />
              </span>
              Contact{" "}
            </p>
          </Link>
        </div>
          {/* tooogle menu  */}
        <div
          onClick={() => setToogleMenu((prev) => !prev)}
          className=" w-[100px] z-9999 flex flex-col cursor-pointer items-center gap-[5px] justify-center"
        >
          <div
            // style={{transform:toogleMenu ? "rotate(45deg)" : "null"}}
            style={
              toogleMenu
                ? {
                    transform: "rotate(45deg) translateY(10px)",
                    transition: "all ease-in-out 0.5s",
                  }
                : {}
            }
            className="w-[50px] ease-in-out duration-500 cursor-pointer bg-white h-2 rounded-3xl"
          ></div>
          <div
            style={
              toogleMenu
                ? {
                    transform: "rotate(-45deg) translateY(-10px) ",
                    transition: "all 0.5s",
                  }
                : {}
            }
            className="w-[50px] ease-in-out duration-500 bg-white h-2 rounded-3xl"
          ></div>
          <div
            style={
              toogleMenu
                ? {
                    transform: "translateX(-100px)",
                    transition: "all ease-in-out 0.5s",
                  }
                : {}
            }
            className="w-[50px] ease-in-out duration-500 bg-white h-2 rounded-3xl"
          ></div>
        </div>
        <div className="w-[100px]  flex flex-row items-center justify-center">
          <img className="w-[70px] rounded-full h-[70px]" src="/images/logo.jpg"/>
        </div>
      </div>
      
    </>
  );
}
