import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

import clsx from "clsx";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "common.app_name" });
  const description = intl.formatMessage({ id: "common.app_name" });

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/fr" hrefLang="fr" />
      </Head>

      <div className={clsx(styles["container"])}>
        <h2>
          <FormattedMessage
            id="common.home_page"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </h2>
      </div>
    </div>
  );
}
