import React from "react";

const CardLink = ({ src, title, children }) => {
  return (
    <div className="group flex flex-col p-6 bg-white rounded-lg border border-gray-200 text-center w-full">
      <div className=" flex justify-center items-center">
        <span className="bg-black group-hover:bg-orange-400 h-11 w-11 rounded-full flex items-center">
          <img src={src} alt="" className="object-cover w-[18px] mx-auto" />
        </span>
      </div>
      <h3 className="font-semibold my-2 group-hover:text-orange-400">
        {title}
      </h3>
      <p className="font-normal text-black  text-[15px] group-hover:text-orange-400">
        {children}
      </p>
    </div>
  );
};

export default CardLink;
