import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import { formations as rawFormations } from "../../formations.ts";
import { type Team } from "../../../../types/index.ts";
import { useDeviceContext } from "../../../../hooks/context/use-device-context.hook.ts";
import styles from "./styles.module.scss";

type Props = {
  team: Team;
  isRight?: boolean;
};

const getPositionProperty = (
  isMobile: boolean,
  desiredPosition: "top" | "left"
) => {
  if (!isMobile) {
    return desiredPosition;
  }

  if (desiredPosition === "top") {
    return "left";
  }

  return "top";
};

const HalfField = ({ team, isRight = false }: Props) => {
  const { formation, players } = team;
  const { isMobile } = useDeviceContext();

  const formations = isMobile ? rawFormations.mobile : rawFormations.desktop;

  return (
    <div
      className={getValidClassNames(
        styles.halfFieldWrapper,
        isRight && styles.rotated
      )}
    >
      <div className={styles.halfField}>
        <div className={styles.goalBox}></div>
        <div className={styles.penaltyBox}>
          <div className={styles.penaltySpot}></div>
          <div className={styles.penaltyArc}></div>
        </div>
        <div className={styles.centerCircle}></div>

        {players.map((player, idx) => (
          <img
            key={idx}
            className={styles.player}
            src={player.imgUrl}
            title={player.name}
            {...(isRight && { "data-isright": true })}
            style={{
              top: formations[formation][idx][
                getPositionProperty(isMobile, "top")
              ],
              left: formations[formation][idx][
                getPositionProperty(isMobile, "left")
              ],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { HalfField };
