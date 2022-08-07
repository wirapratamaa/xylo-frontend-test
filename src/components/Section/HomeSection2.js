import React from "react";
import { SecondCardSection } from "../Card/SecondCardSection";

const HomeSection2 = () => {
  return (
    <div className="flex flex-col px-12 lg:px-24 space-y-4 md:space-y-0 space-x-0 md:space-x-6 md:flex-row">
      <SecondCardSection
        header={"LISTEN NOW"}
        title="Outliers Podcast"
        buttonText={"Explore Episodes"}
        text="Every week, I sit down with someone in the Top 1% of their field to
        decode what they've mastered and what they've learned along the way."
      >
        <div className="flex flex-col space-y-3">
          <img src="/assets/array-1.jpeg" alt="" className="rounded-r-[10px]" />
          <img
            src="/assets/array-2.jpeg"
            alt=""
            className="rounded-tr-[10px]"
          />
        </div>
        <div className="flex flex-col space-y-3 translate-y-6 relative">
          <img src="/assets/array-3.jpeg" alt="" className="rounded-t-[10px]" />
          <img src="/assets/array-4.jpeg" alt="" className="rounded-t-[10px]" />
        </div>
        <div className="flex flex-col space-y-3">
          <img src="/assets/array-5.jpeg" alt="" className="rounded-l-[10px]" />
          <img
            src="/assets/array-6.jpeg"
            alt=""
            className="rounded-tl-[10px]"
          />
        </div>
      </SecondCardSection>
      <SecondCardSection
        header={"SUBSCRIBE NOW"}
        title="Friday 5 Email"
        buttonText={"Subscribe Now"}
        text="Every Friday, I share five things I've been reading, using, and
        loving—including articles, biohacks, gadgets, and more."
      >
        <div className="flex flex-col space-y-3">
          <img src="/assets/array-7.jpeg" alt="" className="rounded-r-[10px]" />
          <img
            src="/assets/array-8.jpeg"
            alt=""
            className="rounded-tr-[10px]"
          />
        </div>
        <div className="flex flex-col space-y-3 translate-y-6 relative">
          <img src="/assets/array-9.jpeg" alt="" className="rounded-t-[10px]" />
          <img
            src="/assets/array-10.jpeg"
            alt=""
            className="rounded-t-[10px]"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <img
            src="/assets/array-11.jpeg"
            alt=""
            className="rounded-l-[10px]"
          />
          <img
            src="/assets/array-12.jpeg"
            alt=""
            className="rounded-tl-[10px]"
          />
        </div>
      </SecondCardSection>
    </div>
  );
};

export default HomeSection2;
