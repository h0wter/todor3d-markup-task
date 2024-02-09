import { MouseEventHandler } from "react";
import { Page } from "../../types";
import { getValidClassNames } from "../../helpers/get-valid-class-names.helper.ts";
import styles from "./styles.module.scss";

type Props = {
  activePage: Page;
  onPageChange: (page: Page) => MouseEventHandler<HTMLButtonElement>;
};

const pagesArray: { name: Page }[] = [
  {
    name: "field",
  },
  {
    name: "list",
  },
  {
    name: "calendar",
  },
];

const TogglePage = ({ activePage, onPageChange }: Props) => {
  return (
    <div className={styles.togglePageContainer}>
      <p>Switch Page:</p>
      <div className={styles.buttonsContainer}>
        {pagesArray.map((page, idx) => (
          <button
            key={idx}
            className={getValidClassNames(
              styles.button,
              activePage === page.name && styles.activePage
            )}
            onClick={onPageChange(page.name)}
          >
            {page.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export { TogglePage };
