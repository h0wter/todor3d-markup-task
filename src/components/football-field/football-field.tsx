import { HalfField } from "./components/half-field/half-field.tsx";
import { type LineUp } from "../../types/line-up.type.ts";
import { type CssPosition } from "../line-ups/types/css-position.type.ts";
import styles from "./styles.module.scss";

type Props = {
  lineUp: LineUp;
  lineUpPositions: {
    [name: string]: CssPosition;
  }[];
};

const FootballField = ({ lineUp, lineUpPositions }: Props) => {
  const [firstTeam, secondTeam] = lineUp;
  const [firstTeamPositions, secondTeamPositions] = lineUpPositions;

  return (
    <div className={styles.fieldContainer}>
      <HalfField team={firstTeam} positions={firstTeamPositions} />
      <HalfField team={secondTeam} positions={secondTeamPositions} isRight />
    </div>
  );
};

export { FootballField };
