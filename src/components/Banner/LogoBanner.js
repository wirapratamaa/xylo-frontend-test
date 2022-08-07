import React from "react";

const LogoBanner = () => {
  return (
    <div className="hidden lg:flex justify-evenly bg-[#0d0d0d] py-2 px-[50px] w-full z-10 mx-auto">
      <div className="flex justify-center">
        <img src="/assets/logo-1.svg" className="w-3/4" alt="" />
      </div>
      <div className="flex justify-center">
        <img src="/assets/logo-2.svg" className="w-3/4" alt="" />
      </div>
      <div className="flex justify-center">
        <img src="/assets/logo-3.svg" className="w-3/4" alt="" />
      </div>
      <div className="flex justify-center">
        <img src="/assets/logo-4.svg" className="w-3/4" alt="" />
      </div>
      <div className="flex justify-center">
        <img src="/assets/logo-5.svg" className="w-3/4" alt="" />
      </div>
    </div>
  );
};

export default LogoBanner;
