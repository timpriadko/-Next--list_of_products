import clsx from "clsx";
import Link from "next/link";
import Menu from "./components/Menu";
import { FormattedMessage } from "react-intl";
import styles from "./Header.module.scss";

export interface HeaderProps {}

const Header = function (props: HeaderProps): JSX.Element {
  return (
    <header className={clsx(styles["navbar"])}>
      <div className={clsx("container", "mx-auto")}>
        <h1>
          <Link href="/">
            <a>
              <FormattedMessage
                id="common.app_name"
                values={{ b: (chunks) => <b>{chunks}</b> }}
              />
            </a>
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
