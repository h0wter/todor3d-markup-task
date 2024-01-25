import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import { useDeviceContext } from "../../../../hooks/context/use-device-context.hook.ts";
import { type Team } from "../../../../types";
import { type CssPosition } from "../../../line-ups/types/css-position.type.ts";
import styles from "./styles.module.scss";

type Props = {
  team: Team;
  positions: { [name: string]: CssPosition };
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

const HalfField = ({ team, positions, isRight = false }: Props) => {
  const { isMobile } = useDeviceContext();

  const { startXI: players } = team;

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

        {players.map(({ player }, idx) => (
          <img
            key={idx}
            className={styles.player}
            src={`https://media.api-sports.io/football/players/${player.id}.png`}
            title={player.name}
            {...(isRight && { "data-isright": true })}
            style={{
              top: `${
                positions[player.grid][getPositionProperty(isMobile, "top")]
              }%`,
              left: `${
                positions[player.grid][getPositionProperty(isMobile, "left")]
              }%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { HalfField };
