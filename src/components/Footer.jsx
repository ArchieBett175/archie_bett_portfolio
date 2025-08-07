import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="h-fit w-full bg-gradient-to-b from bg-zinc-700 to-black">
      <div className="h-[1px] bg-zinc-500 rounded-full" />
      <div className=" text-2xl font-roboto p-5 w-full flex justify-center">
        <div className="w-3/4 my-10">
          <div className="w-full md:w-1/3">
            <h1 className="text-zinc-500">Archie Bett</h1>
            <h2 className="text-sm text-zinc-600 w-3/4 leading-tight ">
              Creative Problem-solver with a passion for innovation.
            </h2>
            <div className="text-zinc-400 mt-5 text-xl">
              <ul className="flex gap-3">
                <a className="cursor-pointer" href="#">
                  <FiLinkedin />
                </a>
                <a href="#" className="cursor-pointer">
                  <FiGithub />
                </a>
                <a href="#" className="cursor-pointer">
                  <MdOutlineMail />
                </a>
              </ul>
            </div>
            <p className="text-zinc-700 text-xs mt-5">&copy; 2025 Archie All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
