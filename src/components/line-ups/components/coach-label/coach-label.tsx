import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper";
import styles from "./styles.module.scss";

type Props = {
  name: string;
  imgUrl: string;
  rightToLeftDirection?: boolean;
};

const CoachLabel = ({ name, imgUrl, rightToLeftDirection = false }: Props) => {
  return (
    <div
      className={getValidClassNames(
        styles.container,
        rightToLeftDirection && styles.rightToLeftDirection
      )}
    >
      <p className={styles.coachName}>{name}</p>
      <img className={styles.coachImg} src={imgUrl} alt={name} />
    </div>
  );
};

export { CoachLabel };
