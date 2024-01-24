import { HalfField } from "./components/half-field/half-field.tsx";
import { Team } from "../../types";
import styles from "./styles.module.scss";

type Props = {
  teams: {
    firstTeam: Team;
    secondTeam: Team;
  };
};

const FootballField = ({ teams }: Props) => {
  return (
    <div className={styles.fieldContainer}>
      <HalfField team={teams.firstTeam} />
      <HalfField team={teams.secondTeam} isRight />
    </div>
  );
};

export { FootballField };
