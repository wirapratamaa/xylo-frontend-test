import React from "react";

const SubscribeBanner = () => {
  return (
    <div className="w-full px-12 md:px-0 md:w-[560px] max-w-full mx-auto text-white my-4 space-y-4">
      <div className="text-center font-extrabold text-[24px]">
        GET THE WEEKLY SUMMARY
      </div>
      <div className="text-center text-[15px] leading-7 tracking-wider">
        Join 7,500+ including Fortune 500 CEOs, championship coaches, and
        bestselling authors who get my free weekly summary.
      </div>
      <div className="text-center">
        <div className="border border-white flex flex-row justify-between rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email..."
            className="border-0 bg-transparent placeholder:text-white w-full ml-4 py-4 outline-none placeholder:text-[15px]"
          />
          <button className="bg-white text-black p-5 w-40">Try It</button>
        </div>
      </div>
      <div className="text-center text-[#7a7a7a]">
        By subscribing, you agree to our{" "}
        <a href="/" className="underline">
          privacy policy.
        </a>
      </div>
    </div>
  );
};

export default SubscribeBanner;
