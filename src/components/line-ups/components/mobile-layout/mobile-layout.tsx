import { FootballField } from "../../../football-field/football-field.tsx";
import { CoachLabel } from "../coach-label/coach-label.tsx";
import { TeamInfo } from "../team-info/team-info.tsx";
import { teams } from "../../teams.ts";
import mobileLayoutStyles from "./styles.module.scss";

type Props = {
  styles: CSSModuleClasses;
};

const MobileLayout = ({ styles }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.lineUpsWrapper}>
        <h2 className={styles.title}>Line-Ups</h2>
      </div>
      <div className={mobileLayoutStyles.matchWrapper}>
        <TeamInfo team={teams.firstTeam} />
        <CoachLabel
          name={teams.firstTeam.coach.name}
          imgUrl={teams.firstTeam.coach.imgUrl}
          rightToLeftDirection
          isMobile
        />
        <FootballField teams={teams} />
        <CoachLabel
          name={teams.secondTeam.coach.name}
          imgUrl={teams.secondTeam.coach.imgUrl}
          rightToLeftDirection
          isMobile
        />
        <TeamInfo team={teams.secondTeam} />
      </div>
    </div>
  );
};

export { MobileLayout };
