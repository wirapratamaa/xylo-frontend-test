import React from "react";

export const CardSection = ({ src, title, children }) => {
  return (
    <div className="px-[10px]">
      <div className="w-full bg-white rounded-xl group cursor-pointer">
        <div className="">
          <a href="/" className="relative">
            <img
              className="rounded-t-xl h-[24vh] w-full object-cover"
              src={src}
              alt=""
            />
            <div className="absolute top-3 right-0 left-0 flex justify-center">
              <span className="text-white text-center bg-[#000000]/50 py-1 px-2 font-bold rounded-lg text-[12px]">
                New Episode
              </span>
            </div>
            <div className="absolute bottom-3 right-0 left-0 flex justify-center">
              <span className="flex bg-[#000000]/50 rounded-full p-2 space-x-2">
                <img src="/assets/sound.svg" alt="" className="w-4" />
                <div className="text-white text-[12px] font-bold">
                  Listen Now
                </div>
              </span>
            </div>
          </a>
        </div>
        <div className="p-5">
          <a href="/">
            <h5 className="mb-2 text-xl font-bold tracking-tight group-hover:underline">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 text-[16px]">
            {children}
          </p>
        </div>
        <div className="flex p-5">
          <a href="/" className="text-orange-400">
            Show Notes
          </a>
          <div className="relative">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="8.5"
              viewBox="0 0 5 8.5"
              className="fill-orange-400 absolute top-[40%] left-2"
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
      </div>
    </div>
  );
};
