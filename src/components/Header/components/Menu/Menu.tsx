import clsx from "clsx";
import React from "react";
import Navigation from "../../../Navigation";
import LanguageSelector from "./components/LanguageSelector";

const Menu = () => {
  return (
    <div className={clsx("flex flex-wrap items-center")}>
      <LanguageSelector />
      <Navigation />
    </div>
  );
};

export default Menu;
