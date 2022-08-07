import React from "react";

export const SecondCardSection = ({
  header,
  title,
  text,
  buttonText,
  children,
}) => {
  return (
    <div className="w-full bg-[#171717] rounded-lg border border-[#262626] relative mb-4 overflow-hidden">
      <div className="p-6">
        <a href="/">
          <h5 className="mb-2 text-[14px] font-bold tracking-tight text-orange-400 text-center">
            {header}
          </h5>
        </a>
        <h2 className="mb-3 font-normal text-4xl text-center text-white">
          {title}
        </h2>
        <h3 className="mb-3 text-[18px] md:text-[20px] text-center text-white">
          {text}
        </h3>
        <div className="text-center">
          <button className="bg-white px-6 py-4 rounded-full">
            {buttonText}
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-3 -mb-3 relative">{children}</div>
    </div>
  );
};
