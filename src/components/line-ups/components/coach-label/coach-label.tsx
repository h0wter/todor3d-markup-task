import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper";
import styles from "./styles.module.scss";

type Props = {
  name: string;
  imgUrl: string;
  rightToLeftDirection?: boolean;
  isMobile?: boolean;
};

const CoachLabel = ({
  name,
  imgUrl,
  rightToLeftDirection = false,
  isMobile = false,
}: Props) => {
  return (
    <div
      className={getValidClassNames(
        styles.coachContainer,
        rightToLeftDirection && styles.rightToLeftDirection
      )}
    >
      <div className={styles.coachWrapper}>
        {isMobile && <p>Coach: </p>}
        <p className={styles.coachName}>{name}</p>
      </div>
      <img className={styles.coachImg} src={imgUrl} alt={name} />
    </div>
  );
};

export { CoachLabel };
