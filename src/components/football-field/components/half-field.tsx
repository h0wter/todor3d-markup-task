import styles from "./styles.module.scss";

type Props = {
  isRight?: boolean;
};

const HalfField = ({ isRight = false }: Props) => {
  return (
    <div className={isRight ? styles.rotated : ""}>
      <div className={styles.field}>
        <div className={styles.goalBox}></div>
        <div className={styles.penaltyBox}>
          <div className={styles.penaltySpot}></div>
        </div>
        <div className={styles.penaltyArc}></div>
        <div className={styles.centerCircle}></div>
      </div>
    </div>
  );
};

export { HalfField };
