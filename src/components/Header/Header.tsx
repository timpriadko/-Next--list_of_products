import clsx from "clsx";
import styles from "./Header.module.scss";

export interface HeaderProps {}

const Header = function (props: HeaderProps): JSX.Element {
  return (
    <nav className={clsx(styles["navbar"])}>
      <div className="container d-flex">
        <h1>
          <a href="/">Post App</a>
        </h1>
        {/* TODO lang selector */}
        <div>menu</div>
      </div>
    </nav>
  );
};

export default Header;
