import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import { getValidFormationName } from "../../helpers/get-valid-formation-name.helper.ts";
import { type Team } from "../../../../types";
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
        <img
          className={styles.teamLogo}
          src={team.team.logo}
          title={team.team.name}
        />
      </div>
      <p className={styles.teamName}>{team.team.name}</p>
      <div className={styles.formationWrapper}>
        <p className={styles.formation}>
          {getValidFormationName(team.formation)}
        </p>
      </div>
    </div>
  );
};

export { TeamInfo };
