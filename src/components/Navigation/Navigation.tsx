import React from "react";
import NavItem from "./components/NavItem";
import { navItems } from "../../data/menu";
import { NavItemInterface } from "./components/NavItem/NavItem";
import clsx from "clsx";

const Navigation = () => {
  return (
    <nav className={clsx("flex flex-row	items-center flex-wrap")}>
      {navItems.map((item: NavItemInterface) => {
        return <NavItem item={item} />;
      })}
    </nav>
  );
};

export default Navigation;
