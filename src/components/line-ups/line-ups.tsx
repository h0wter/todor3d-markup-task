import { useState } from "react";
import { useDeviceContext } from "../../hooks/context/use-device-context.hook.ts";
import { DesktopLayout } from "./components/desktop-layout/desktop-layout.tsx";
import { MobileLayout } from "./components/mobile-layout/mobile-layout.tsx";
import { createPlayersGrid } from "./helpers/create-players-grid.helper.ts";
import lineUps from "./line-ups.json";
import styles from "./styles.module.scss";

type LineUpId = 0 | 1 | 2;

const LineUps = () => {
  const [activeLineUp, setActiveLineUp] = useState<LineUpId>(0);
  const { isMobile } = useDeviceContext();

  const lineUp = lineUps[activeLineUp];

  const handleLineUpSelect = (lineUpId: LineUpId) => () => {
    setActiveLineUp(lineUpId);
  };

  const lineUpPositions = createPlayersGrid(lineUp);

  return (
    <>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleLineUpSelect(0)}>
          <img
            className={styles.teamLogo}
            src="https://media.api-sports.io/football/teams/463.png"
            alt="Colon Santa Fe"
          />
          <span>Aldosivi - </span>
          <img
            className={styles.teamLogo}
            src="https://media.api-sports.io/football/teams/442.png"
            alt="Colon Santa Fe"
          />
          <span>Defensa Y Justicia</span>
        </button>
        <button className={styles.button} onClick={handleLineUpSelect(1)}>
          <img
            className={styles.teamLogo}
            src="https://media.api-sports.io/football/teams/1065.png"
            alt="Colon Santa Fe"
          />
          <span>Central Cordoba de Santiago - </span>
          <img
            className={styles.teamLogo}
            src="https://media.api-sports.io/football/teams/450.png"
            alt="Colon Santa Fe"
          />
          <span>Estudiantes L.P.</span>
        </button>
        <button className={styles.button} onClick={handleLineUpSelect(2)}>
          <img
            className={styles.teamLogo}
            src="https://media.api-sports.io/football/teams/448.png"
            alt="Colon Santa Fe"
          />
          <span>Colon Santa Fe - </span>
          <img
            className={styles.teamLogo}
            src="https://media.api-sports.io/football/teams/439.png"
            alt="Godoy Cruz"
          />
          <span>Godoy Cruz</span>
        </button>
      </div>
      {isMobile ? (
        <MobileLayout
          lineUp={lineUp}
          lineUpPositions={lineUpPositions}
          styles={styles}
        />
      ) : (
        <DesktopLayout
          lineUp={lineUp}
          lineUpPositions={lineUpPositions}
          styles={styles}
        />
      )}
    </>
  );
};

export { LineUps };
