import { MouseEventHandler } from "react";
import { Page } from "../../types";
import styles from "./styles.module.scss";

type Props = {
  onPageChange: (page: Page) => MouseEventHandler<HTMLButtonElement>;
};

const TogglePage = ({ onPageChange }: Props) => {
  return (
    <div className={styles.togglePageContainer}>
      <p>Switch Page:</p>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={onPageChange("field")}>
          Field
        </button>
        <button className={styles.button} onClick={onPageChange("list")}>
          List
        </button>
      </div>
    </div>
  );
};

export { TogglePage };
