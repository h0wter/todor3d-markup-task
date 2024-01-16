import { FootballField } from "../football-field/football-field.tsx";
import { teams } from "./teams.ts";
import styles from "./styles.module.scss";
import { TeamInfo } from "./components/team-info/team-info.tsx";
import { CoachLabel } from "./components/coach-label/coach-label.tsx";

const LineUps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lineUpsWrapper}>
        <TeamInfo team={teams.firstTeam} />
        <h2 className={styles.title}>Line-Ups</h2>
        <TeamInfo team={teams.secondTeam} rightToLeftDirection />
      </div>
      <FootballField teams={teams} />
      <div className={styles.coachesWrapper}>
        <CoachLabel
          name={teams.firstTeam.coach.name}
          imgUrl={teams.firstTeam.coach.imgUrl}
        />
        <p className={styles.coachLabel}>Coach</p>
        <CoachLabel
          name={teams.secondTeam.coach.name}
          imgUrl={teams.secondTeam.coach.imgUrl}
          rightToLeftDirection
        />
      </div>
    </div>
  );
};

export { LineUps };
