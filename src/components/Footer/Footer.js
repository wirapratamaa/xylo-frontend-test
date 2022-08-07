import React from "react";
import { BaseFooter } from "./BaseFooter";
import { MainFooter } from "./MainFooter";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <MainFooter />
      <BaseFooter />
    </div>
  );
};

export default Footer;
