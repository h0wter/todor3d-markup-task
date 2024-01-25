import { FootballField } from "../../../football-field/football-field.tsx";
import { CoachLabel } from "../coach-label/coach-label.tsx";
import { TeamInfo } from "../team-info/team-info.tsx";
import { type LineUp } from "../../../../types/line-up.type.ts";
import { type CssPosition } from "../../types/css-position.type.ts";
import mobileLayoutStyles from "./styles.module.scss";

type Props = {
  lineUp: LineUp;
  lineUpPositions: {
    [name: string]: CssPosition;
  }[];
  styles: CSSModuleClasses;
};

const MobileLayout = ({ lineUp, lineUpPositions, styles }: Props) => {
  const [firstTeam, secondTeam] = lineUp;

  return (
    <div className={styles.container}>
      <div className={styles.lineUpsWrapper}>
        <h2 className={styles.title}>Line-Ups</h2>
      </div>
      <div className={mobileLayoutStyles.matchWrapper}>
        <TeamInfo team={firstTeam} />
        <CoachLabel
          name={firstTeam.coach.name}
          imgUrl={firstTeam.coach.photo}
          rightToLeftDirection
          isMobile
        />
        <FootballField lineUp={lineUp} lineUpPositions={lineUpPositions} />
        <CoachLabel
          name={secondTeam.coach.name}
          imgUrl={secondTeam.coach.photo}
          rightToLeftDirection
          isMobile
        />
        <TeamInfo team={secondTeam} />
      </div>
    </div>
  );
};

export { MobileLayout };
