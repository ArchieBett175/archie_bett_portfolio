import React from "react";
import ConnectButtons from "./ConnectButtons";

const Hero = () => {
  return (
    <div className="flex text-white">
      <div className="w-1/4"></div>
      <div className="flex-col">
        <div className="flex">
          <h1 className="font-roboto font-display text-5xl ">Hi I'm</h1>
          <h1 className="font-roboto font-display text-5xl ml-3.5 italic">
            Archie
          </h1>
        </div>
        <h1 className="font-roboto font-display text-5xl">
          A Front-End Web Developer
        </h1>
        <p className="font-roboto opacity-40 mt-5">
          Recent Interactive Media Graduate Based In London, UK
        </p>
        <ConnectButtons />
      </div>
    </div>
  );
};

export default Hero;
