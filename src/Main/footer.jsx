import React from "react";
import { BsDiscord, BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="w-full flex flex-col bg-black px-2 lg:pl-[170px] lg:pr-[50px] md:pl-[170px] md:pr-[50px] relative py-7">
        <div className="flex md:flex-row lg:flex-row flex-col items-center gap-4 md:justify-between lg:justify-between justify-center">
          <p className="font-bold lg:text-xl md:text-xl text-lg text-stone-400">
            @all rights reserverd by Ashish Khatri
          </p>
          <div className="flex flex-row md:gap-2 lg:gap-2 gap-7 items-center lg:mr-36 ">
            <h3 className="font-bold lg:text-xl md:text-xl text-lg text-white">
              Find me on
            </h3>
            <a href="https://discord.com/channels/@me" target={"_blank"}>
              {" "}
              <BsDiscord size={28} />
            </a>

            <a
              href="https://www.facebook.com/ashish.khatri.1865"
              target={"_blank"}
            >
              {" "}
              <BsFacebook size={28} />
            </a>
            <a href="https://github.com/Aahh-shesshh" target={"_blank"}>
              {" "}
              <BsGithub size={28} />
            </a>
            <a>
              <BsInstagram
                size={28}
                href="https://www.instagram.com/ashishislost/"
                target={"_blank"}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
