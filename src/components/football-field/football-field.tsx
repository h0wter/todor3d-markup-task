import { HalfField } from "./components/half-field.tsx";
import styles from "./styles.module.scss";

const FootballField = () => {
  return (
    <div className={styles.container}>
      <HalfField />
      <HalfField isRight />
    </div>
  );
};

export { FootballField };
