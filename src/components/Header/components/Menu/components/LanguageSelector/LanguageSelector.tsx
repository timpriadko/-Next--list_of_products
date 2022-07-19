import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Select from "react-select";
import clsx from "clsx";
import config from "../../../../../../../next.config";

import styles from "./LanguageSelector.module.scss";

type ItemValueObject = Object & {
  value: string;
  label: string;
};

const LanguageSelector = () => {
  const locales = config.i18n.locales.filter((locale) => {
    return locale !== "__default" ? locale : undefined;
  });

  const router = useRouter();
  const { pathname, asPath, query, locale = "en" } = router;

  // State for the currently selected locale
  const [selectedLang, setSelectedLang] = useState<string | undefined>(locale);

  const options: ItemValueObject[] = locales?.map((locale): ItemValueObject => {
    return {
      label: locale,
      value: locale,
    };
  });

  const optionsWithoutCurrentLocale = options?.filter(
    (option) => option.value !== locale
  );

  const defaultValue = options?.find((option) => {
    return `${locale}`.includes(option.value);
  });

  console.log({ optionsWithoutCurrentLocale, selectedLang });

  // Update the router and locale if the selected language is changed
  useEffect(() => {
    router.push({ pathname, query }, asPath, { locale: selectedLang });
  }, [selectedLang]); //eslint-disable-line

  // Handle select`s change
  const handlChange = (languageLocale: ItemValueObject | null | void) => {
    console.log(languageLocale);
    !!languageLocale?.value && setSelectedLang(languageLocale.value);
  };

  return (
    <div className={clsx("flex", styles["lang-switcher"])}>
      <Select
        className={styles.languageSwitchDropdown}
        isSearchable={false}
        options={optionsWithoutCurrentLocale}
        onChange={handlChange}
        defaultValue={defaultValue}
        instanceId={"languageSwitcher"}
        // menuIsOpen={true}
      />
    </div>
  );
};

export default LanguageSelector;
