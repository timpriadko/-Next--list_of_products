import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Layout from "../components/Layout/Layout";
import "../styles/index.scss";

import en from "../i18n/en.json";
import fr from "../i18n/fr.json";

const messages = {
  en,
  fr,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}

export default MyApp;
