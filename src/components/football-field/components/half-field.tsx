import { getValidClassNames } from "../../../helpers/get-valid-class-names.helper.ts";
import { Team } from "../types.ts";
import { formations } from "../formations.ts";
import styles from "./styles.module.scss";

type Props = {
  team: Team;
  isRight?: boolean;
};

const HalfField = ({ team, isRight = false }: Props) => {
  const { formation, players } = team;

  return (
    <div className={isRight ? styles.rotated : ""}>
      <div className={styles.field}>
        <div className={styles.goalBox}></div>
        <div className={styles.penaltyBox}>
          <div className={styles.penaltySpot}></div>
        </div>
        <div className={styles.penaltyArc}></div>
        <div className={styles.centerCircle}></div>

        {players.map((player, idx) => (
          <img
            key={idx}
            className={getValidClassNames(styles.player)}
            src={player.imgUrl}
            title={player.name}
            {...(isRight && { "data-isright": true })}
            style={{
              top: formations[formation][idx].top,
              left: formations[formation][idx].left,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { HalfField };
