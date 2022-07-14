import clsx from "clsx";
import { FormattedMessage, useIntl } from "react-intl";

export default function Home() {
  const intl = useIntl();

  return (
    <div className={clsx("container")}>
      <h2>
        <FormattedMessage
          id="common.posts"
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
      </h2>
    </div>
  );
}
