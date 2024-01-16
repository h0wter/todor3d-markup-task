import { FootballField } from "../football-field/football-field.tsx";
import { teams } from "./teams.ts";
import styles from "./styles.module.scss";
import { TeamInfo } from "./component/team-info/team-info.tsx";

const LineUps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lineUpsWrapper}>
        <TeamInfo team={teams.firstTeam} />
        <h2 className={styles.title}>Line-Ups</h2>
        <TeamInfo team={teams.secondTeam} rightToLeftDirection />
      </div>
      <FootballField teams={teams} />
    </div>
  );
};

export { LineUps };
