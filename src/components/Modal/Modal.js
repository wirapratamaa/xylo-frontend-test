import React, { useState } from "react";

const Modal = ({ showModal, setShowModal }) => {
  const [search, setSearch] = useState("");
  return (
    <div className={showModal ? "" : ""}>
      <div
        id="searchModal"
        tabIndex="-1"
        className={`${
          showModal
            ? "bg-[#121212]/80 transition-all duration-100 opacity-100"
            : "faded-out"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-screen justify-center items-center flex `}
        aria-modal="true"
        role="dialog"
        onClick={() => setShowModal(false)}
      >
        <div
          className={`${
            showModal ? "faded" : "faded-out"
          } transition transform scale-1 relative py-[30px] w-[400px] h-auto border border-solid border-[#262626] rounded-2xl bg-[#171717]`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="relative ">
            <div className="flex items-center justify-center">
              <div className="text-[14px] font-custom text-white text-center w-[65%] mx-auto mb-6">
                Quickly find episodes, articles, and pages across the website.
              </div>
            </div>

            <div className="px-[30px] py-1 w-full">
              <div className="flex flex-row items-center border border-[#262626] w-full px-5 rounded-full space-x-4 bg-[#121212] h-[60px]">
                <img
                  src="/assets/search-icon.svg"
                  alt=""
                  className="w-[20px]"
                />
                <input
                  type="search"
                  name="search"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onTouchCancel={() => setSearch("")}
                  className="block border-0 w-full focus:outline-none focus:bg-transparent focus:border-0 text-white bg-transparent font-custom h-full"
                />
              </div>
            </div>

            <div className="px-[30px] mt-2 w-full">
              <button className="border border-[#262626] w-full rounded-full text-white bg-[#212121] py-[9px] px-[15px] font-custom h-[60px]">
                Search
              </button>
            </div>

            <div className="flex justify-evenly pt-7 border-t-[1px] border-t-[#212121] mt-7 ">
              <div className="flex flex-col text-center">
                <div className="border border-[#2b2b2b] rounded-full bg-[#212121] w-[60px] h-[60px] flex items-center justify-center">
                  <img
                    src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f48e96eee96f56ecaa77e0b_popular-white.svg"
                    alt=""
                    className="w-[21px]"
                  />
                </div>
                <div className="text-xs text-[#cccccc] mt-3">Popular</div>
              </div>
              <div className="flex flex-col text-center">
                <div className="border border-[#2b2b2b] rounded-full bg-[#212121] w-[60px] h-[60px] flex items-center justify-center">
                  <img
                    src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f54b4db31df4cefcc660906_latest-posts-white.svg"
                    alt=""
                    className="w-[21px]"
                  />
                </div>
                <div className="text-xs text-[#cccccc] mt-3">Recent</div>
              </div>
              <div className="flex flex-col text-center">
                <div className="border border-[#2b2b2b] rounded-full bg-[#212121] w-[60px] h-[60px] flex items-center justify-center">
                  <img
                    src="https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f5776bf1f735a4480fcc81f_topics-and-tags-white.svg"
                    alt=""
                    className="w-[21px]"
                  />
                </div>
                <div className="text-xs text-[#cccccc] mt-3">Browse All</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
