import React from "react";

export const BaseFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-[50px] h-auto py-[30px] lg:h-[56px] items-center">
      <div className="mb-[20px] lg:mb-0">
        <span className="text-[#525252] text-[12px]">
          Copyright © 2020 Daniel Scrivner. All rights reserved.
        </span>
      </div>
      <div className="flex justify-end text-[12px]">
        <a href="/" className="text-[#525252] mx-5 lg:ml-7 hover:text-white">
          Privacy & Terms
        </a>
        <a href="/" className="text-[#525252] mx-5 lg:ml-7 hover:text-white">
          Disclosures
        </a>
        <a href="/" className="text-[#525252] mx-5 lg:ml-7 hover:text-white">
          Sitemap
        </a>
      </div>
    </div>
  );
};
