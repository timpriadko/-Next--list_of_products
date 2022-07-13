import { Fragment } from "react";

import Header from "../Header";

function Layout(props: { children: any }) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
