import React from "react";

export const CardHero = ({ src, title, children }) => {
  return (
    <div className="mb-2 mx-auto lg:mx-0 md:px-0 px-10">
      <div className="flex w-full md:w-[388px] items-center md:space-x-3 p-3 bg-[#141414] rounded-lg border border-[#262626] flex-col md:flex-row hover:bg-[#212121]">
        <img
          className="object-cover rounded-xl w-[100px] h-20"
          src={src}
          alt=""
        />
        <div className="flex flex-col md:my-0 my-2">
          <h5 className="text-orange-400 text-[10px]">{title}</h5>
          <p className="text-white text-[14px]">{children}</p>
        </div>
      </div>
    </div>
  );
};
