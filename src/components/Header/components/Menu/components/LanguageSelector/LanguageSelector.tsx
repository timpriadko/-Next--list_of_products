import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import styles from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const { locales } = useRouter();

  console.log(useRouter());

  return (
    <div className={clsx(styles["lang-switcher"])}>
      {!!locales &&
        [...locales].sort().map((locale) => (
          <Link key={locale} href="/" locale={locale}>
            {locale}
          </Link>
        ))}
    </div>
  );
};

export default LanguageSelector;
