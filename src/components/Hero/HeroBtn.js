import React from "react";

export const HeroBtn = ({ text }) => {
  return (
    <button className="bg-[#141414] rounded-lg border border-[#262626] text-white hover:bg-[#212121] w-full h-11 text-[14px] px-7">
      {text}
    </button>
  );
};
