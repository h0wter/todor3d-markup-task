import { HalfField } from "./components/half-field.tsx";
import styles from "./styles.module.scss";
import { Team } from "./types.ts";

type Props = {
  teams: {
    firstTeam: Team;
    secondTeam: Team;
  };
};

const FootballField = ({ teams }: Props) => {
  return (
    <div className={styles.container}>
      <HalfField team={teams.firstTeam} />
      <HalfField team={teams.secondTeam} isRight />
    </div>
  );
};

export { FootballField };
