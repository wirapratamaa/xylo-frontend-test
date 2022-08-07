import React from "react";
import { Carousel } from "../Carousel/Carousel";
import CardLink from "../Link/CardLink";

const HomeSection = () => {
  return (
    <div className="w-full lg:max-w-7xl flex flex-col py-10 px-[50px] mx-auto">
      <Carousel />
      <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-5 mx-auto">
        <CardLink src={"/assets/assets-1.svg"} title={"Trending Now"}>
          Find the interviews and articles that are trending now.
        </CardLink>
        <CardLink src={"/assets/assets-2.svg"} title={"New Release"}>
          Catch up on all of the latest interviews and articles.
        </CardLink>
        <CardLink src={"/assets/assets-3.svg"} title={"The Archives"}>
          Explore the archives by browsing categories and tags.
        </CardLink>
      </div>
    </div>
  );
};

export default HomeSection;
