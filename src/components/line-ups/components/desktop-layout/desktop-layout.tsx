import { FootballField } from "../../../football-field/football-field.tsx";
import { CoachLabel } from "../coach-label/coach-label";
import { TeamInfo } from "../team-info/team-info.tsx";
import { type CssPosition } from "../../types/css-position.type.ts";
import { type LineUp } from "../../../../types/line-up.type.ts";

type Props = {
  lineUp: LineUp;
  lineUpPositions: {
    [name: string]: CssPosition;
  }[];
  styles: CSSModuleClasses;
};

const DesktopLayout = ({ lineUp, lineUpPositions, styles }: Props) => {
  const [firstTeam, secondTeam] = lineUp;

  return (
    <div className={styles.container}>
      <div className={styles.lineUpsWrapper}>
        <TeamInfo team={firstTeam} />
        <h2 className={styles.title}>Line-Ups</h2>
        <TeamInfo team={secondTeam} rightToLeftDirection />
      </div>
      <FootballField lineUp={lineUp} lineUpPositions={lineUpPositions} />
      <div className={styles.coachesWrapper}>
        <CoachLabel
          name={firstTeam.coach.name}
          imgUrl={firstTeam.coach.photo}
        />
        <p className={styles.coachLabel}>Coach</p>
        <CoachLabel
          name={secondTeam.coach.name}
          imgUrl={secondTeam.coach.photo}
          rightToLeftDirection
        />
      </div>
    </div>
  );
};

export { DesktopLayout };
