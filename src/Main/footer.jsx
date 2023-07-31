import React from "react";
import { BsDiscord, BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="w-full flex flex-col bg-black pl-[40px] lg:pl-[170px] lg:pr-[50px] relative py-7">
        <br />
        <div className="flex flex-row justify-between">
          <p className="font-bold text-xl text-stone-400">
            All rights reserverd by Ashish Khatri
          </p>
          <div className="flex flex-row gap-7 lg:mr-36 mr-8">
            <h3 className="font-bold text-xl text-white">Find me on</h3>
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
