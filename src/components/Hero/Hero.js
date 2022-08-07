import React from "react";
import { CardHero } from "./CardHero";
import { HeroBtn } from "./HeroBtn";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between h-auto px-[50px] items-stretch">
      <div className="lg:w-[50%] w-full lg:order-last flex justify-center lg:block mt-16 md:mt-0">
        <img
          src="/assets/hero-img.png"
          alt=""
          className="object-fill w-1/2 md:w-3/4 h-auto lg:w-full"
        />
      </div>
      <div className="lg:w-[42%] w-full py-[5%] pr-[2.5%]">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-white text-[32px] font-medium mb-4">
            Timeless insights for business and life.
          </h1>
          <p className="text-white text-lg leading-8 tracking-wide mb-5">
            Every week, I sit down with someone in the Top 1% of their field —
            from NYT bestselling authors to Oscar winners — to decode what
            they've mastered. Listen as I uncover the tactics, routines, and
            habits that will propel you to the top of your field.
          </p>
          <CardHero src={"/assets/hero-card.jpeg"} title="LATEST EPISODE">
            #124 Andrew Carter of Smallhold: My Favorite Books, Tools, Habits
            and More | 20 Minute Playbook
          </CardHero>
          <div className="flex flex-col md:flex-row w-full md:w-[388px] space-y-4 md:space-y-0 md:space-x-2 md:justify-between md:mx-auto lg:mx-0 md:px-0 px-10 md:my-0 my-3">
            <div className="w-full md:w-80">
              <HeroBtn text={"Start Here"} />
            </div>
            <div className="w-full">
              <HeroBtn text={"Listen to the Podcast"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
