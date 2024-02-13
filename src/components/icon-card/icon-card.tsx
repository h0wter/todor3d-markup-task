import { getValidClassNames } from "../../helpers/get-valid-class-names.helper.ts";
import styles from "./styles.module.scss";

type Props = {
  iconColor: "yellow" | "red";
};

const IconCard = ({ iconColor }: Props) => (
  <div className={getValidClassNames(styles.card, styles[iconColor])}></div>
);

export { IconCard };
