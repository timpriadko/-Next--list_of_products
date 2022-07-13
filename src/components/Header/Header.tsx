import clsx from "clsx";
import Link from "next/link";
import Menu from "./components/Menu";
import styles from "./Header.module.scss";

export interface HeaderProps {}

const Header = function (props: HeaderProps): JSX.Element {
  return (
    <header className={clsx(styles["navbar"])}>
      <div className={clsx("container", "mx-auto")}>
        <h1>
          <Link href="/">Post App</Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
