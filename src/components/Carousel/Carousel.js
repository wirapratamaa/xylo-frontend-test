import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { CardSection } from "./CardSection";
import { cardData } from "./data";

export const Carousel = ({ images }) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: isResponsive ? 1 : 3,
    slidesToScroll: isResponsive ? 1 : 3,
    lazyLoad: false,
  };
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsResponsive(true);
    } else {
      setIsResponsive(false);
    }
  };
  console.log(isResponsive);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="w-full my-8">
      <div className="">
        <Slider {...settings} className="flex justify-between">
          {cardData.map((item, i) => (
            <Fragment key={i}>
              <CardSection src={item.src} title={item.title}>
                {item.description}
              </CardSection>
            </Fragment>
          ))}
        </Slider>
      </div>
    </div>
  );
};
