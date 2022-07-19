import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

import style from "./NavItem.module.scss";

export interface NavItemInterface {
  label: string;
  link: string;
  id: number;
}

const NavItem = (props: { item: NavItemInterface }) => {
  const { label, link } = props.item;

  return (
    <div className={clsx(style["nav-item"], "ml-4")}>
      {/* <Link href={link}>{label}</Link> */}
      <Link href={link}>
        <a>
          <FormattedMessage
            id={`common.${label}`}
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </a>
      </Link>
    </div>
  );
};

export default NavItem;
