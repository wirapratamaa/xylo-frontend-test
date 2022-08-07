import React from "react";
import { HomeLogo } from "../../common/HomeLogo";
import { footerLink } from "./dataFooter";

export const MainFooter = () => {
  return (
    <div className="flex lg:flex-row flex-col px-[50px] bg-[#121212] border-t border-b border-[#171717]">
      <div className="lg:w-[40%] pt-[60px] pb-[55px] h-full w-full lg:text-left text-center ">
        <div className="w-[350px] text-white leading-[26px] mx-auto lg:m-0">
          Daniel Scrivner is an entreprenuer and investor focused on building
          enduring companies and breakthrough products.
        </div>
        <div className="group flex justify-center lg:justify-start w-[300px] mb-[58px] mx-auto lg:mx-0 text-center lg:text-left">
          <a href="/" className="text-white group-hover:text-orange-400">
            See what he’s working on now
          </a>
          <div className="relative">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="8.5"
              viewBox="0 0 5 8.5"
              className="fill-white group-hover:fill-orange-400 absolute top-[40%] left-2"
            >
              <defs>
                <style></style>
              </defs>
              <title>ds-arrow-right-footer</title>
              <path
                d="M.7,8.5c-.2,0-.3-.1-.5-.3a.7.7,0,0,1,0-1l3-3L.2,1.3A.8.8,0,0,1,.2.2a.7.7,0,0,1,1,0L4.8,3.7a.7.7,0,0,1,0,1L1.3,8.2A.9.9,0,0,1,.7,8.5Z"
                transform="translate(0 0)"
              ></path>
            </svg>
            <div className="h-[2px] w-2 group-hover:rolling hidden rounded-full bg-white group-hover:bg-orange-400 absolute top-[54%] group-hover:block left-1"></div>
          </div>
        </div>
        <div className="w-[192px] flex mx-auto lg:mx-0">
          <HomeLogo />
        </div>
      </div>
      <div className="lg:w-[60%] pt-[60px] pb-[55px] h-full grid sm:grid-cols-4 text-[14px] w-full">
        {footerLink.map((item, i) => (
          <div className="mb-5 md:mb-0" key={i}>
            <div className="text-white mb-7 lg:text-left text-center font-bold">
              {item?.title}
            </div>
            <div className="flex flex-col">
              {item.data.map((data, key) => (
                <div
                  className="lg:text-left text-center mb-2 sm:mb-7 text-[#b8b8b8] hover:text-white cursor-pointer"
                  key={key}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
