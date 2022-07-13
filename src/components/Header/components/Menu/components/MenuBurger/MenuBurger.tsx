import React from "react";
import clsx from "clsx";

import styles from "./MenuBurger.module.scss";

const MenuBurger = () => {
  return (
    <div className={clsx(styles["burger"])}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuBurger;
