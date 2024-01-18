import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import { Team } from "../../../../types";
import { getValidFormationName } from "../../helpers/get-valid-formation-name.helper.ts";
import styles from "./styles.module.scss";

type Props = {
  team: Team;
  rightToLeftDirection?: boolean;
};

const TeamInfo = ({ team, rightToLeftDirection = false }: Props) => {
  return (
    <div
      className={getValidClassNames(
        styles.teamWrapper,
        rightToLeftDirection && styles.rightToLeftDirection
      )}
    >
      <div className={styles.logoWrapper}>
        <img className={styles.teamLogo} src={team.imgUrl} title={team.name} />
      </div>
      <p className={styles.teamName}>{team.name}</p>
      <div className={styles.formationWrapper}>
        <p className={styles.formation}>
          {getValidFormationName(team.formation)}
        </p>
      </div>
    </div>
  );
};

export { TeamInfo };
