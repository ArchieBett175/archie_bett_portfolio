import React from "react";
import {
  AboutBlock,
  Block,
  ProjectBlock,
  ProjectLibBlock,
} from "./Block";

const Bento = () => {
  return (
    <div className="min-h-screen bg-black px-5 py-12 text-zinc-50">
      <div className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense">
        <ProjectBlock />
        <ProjectLibBlock />
        <AboutBlock />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
};

export default Bento;
