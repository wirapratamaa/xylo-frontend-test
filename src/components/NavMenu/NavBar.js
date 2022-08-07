import React, { useState } from "react";
import { HomeLogo } from "../../common/HomeLogo";
import Modal from "../Modal/Modal";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const genericHamburgerLine = `h-[2px] w-5 my-[2px] rounded-full bg-white transition ease transform duration-300`;
  return (
    <>
      <div className="bg-[#171717EB]/[92] absolute md:fixed top-0 left-0 right-0 bottom-auto overflow-hidden h-[50px] z-50">
        <div className="relative flex justify-center items-center h-[50px] px-4">
          <div
            className="border border-[#e0e0e0]/[0.08] p-[7px] rounded-md w-[30px] bg-[#e0e0e0]/[0.08] absolute md:left-3 right-3"
            onClick={() => setShowModal(!showModal)}
          >
            <img src="/assets/search-icon.svg" alt="" className="w-100" />
          </div>
          {/* Hamburger menu */}
          <div className="absolute md:hidden left-3">
            <div
              className="flex flex-col h-10 w-10  rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-[6px] opacity-100 group-hover:opacity-100"
                    : "opacity-100 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-[6px] opacity-100 group-hover:opacity-100"
                    : "opacity-100 group-hover:opacity-100"
                }`}
              />
            </div>
          </div>

          <div className="w-[165px] cursor-pointer">
            <HomeLogo />
          </div>
          <button className="absolute md:right-3 border hidden md:block border-[#e0e0e0]/[0.08] rounded-md bg-[#e0e0e0]/[0.08] font-custom text-xs leading-[14px] text-[#e0e0e0] h-[7.5] px-[19px] py-[7px]">
            Subscribe
          </button>
        </div>
      </div>
      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* Menu */}
      <div className="bg-[#121212] w-full mt-[50px] hidden md:block">
        <ul className="grid grid-cols-4 relative">
          <li className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            Podcast
          </li>
          <li className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            Newslater
          </li>
          <li className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            Topics & Tags
          </li>
          <li className="peer text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            <button>More</button>
          </li>
          <div className="absolute right-4 top-12 hidden peer-hover:block hover:block border rounded-xl border-[#e0e0e0]/[0.08] z-30">
            <div className="w-[200px]  bg-[#171717] drop-shadow-lg ml-auto rounded-xl">
              <ul>
                <li
                  className="px-5 py-3 hover:text-orange-400 text-white text-center border-t-[1px] rounded-t-xl border-b-[1px] border-[#e0e0e0]/[0.08] cursor-pointer"
                  href="#"
                >
                  About
                </li>
                <li
                  className="px-5 py-3 hover:text-orange-400 text-white text-center border-b-[1px] border-[#e0e0e0]/[0.08] cursor-pointer"
                  href="#"
                >
                  News Room
                </li>
                <li
                  className="px-5 py-3 hover:text-orange-400 text-white text-center border-b-[1px] rounded-b-xl border-[#e0e0e0]/[0.08] cursor-pointer"
                  href="#"
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </ul>
        {/* hover */}
      </div>

      {/* Responsive Menu */}
      <div
        className={`bg-[#121212] w-full mt-[50px] absolute md:-top-[100%] z-30 ${
          isOpen
            ? "transform translate-y-0 duration-300"
            : "transform -translate-y-[150%] duration-300"
        }`}
      >
        <div className="grid grid-rows-7 relative">
          <div className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            Podcast
          </div>
          <div className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            Newslater
          </div>
          <div className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            Topics & Tags
          </div>
          <div className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            About
          </div>
          <div className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            News Room
          </div>
          <div className="text-white text-center text-sm font-custom py-[18px] hover:text-orange-400 cursor-pointer">
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
