import { useCallback, useEffect, useRef, useState } from "react";
import { IconName } from "../../enums";
import { getValidClassNames } from "../../helpers/get-valid-class-names.helper.ts";
import { type ValueOf } from "../../types";
import { iconNameToSvg } from "./maps/icon-name-to-svg.map.tsx";
import eventsList from "./events.json";
import styles from "./styles.module.scss";

const DESKTOP_BREAKPOINT = 780;
const MAX_LIST_ELEMENTS_MOBILE = 5;
const MAX_LIST_ELEMENTS_DESKTOP = 3;

const EventsList = () => {
  const [events, setEvents] = useState(eventsList);
  const [isListOpened, setIsListOpened] = useState<boolean | null>(null);
  const container = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (container.current) {
      const maxListElements =
        container.current.offsetWidth > DESKTOP_BREAKPOINT
          ? MAX_LIST_ELEMENTS_DESKTOP
          : MAX_LIST_ELEMENTS_MOBILE;
      const isListOpened = eventsList.length < maxListElements;
      setIsListOpened(isListOpened);
      setEvents(eventsList.slice(0, maxListElements));
    }
  }, []);

  const handleOpenListBtnClick = useCallback(() => {
    setIsListOpened(true);
    setEvents(eventsList);
  }, []);

  return (
    <div className={styles.eventsListContainer}>
      <h2 className={styles.title}>Events</h2>
      <ul
        className={getValidClassNames(
          styles.list,
          isListOpened && styles.listFullHeight,
          !isListOpened && styles.listHidden
        )}
        ref={container}
      >
        {events.map((event, idx) => {
          const { time, mainName, secondName, type, team } = event;
          let firstName;
          let lastName;
          if (mainName) {
            [firstName, lastName] = mainName.split(" ");
          }
          const cardPositioningClass =
            team === "left" ? styles.leftTeam : styles.rightTeam;

          return (
            <li className={styles.listItem} key={idx}>
              <div className={styles.cardContentWrapper}>
                <p className={styles.eventTime}>{time}&#96;</p>
                <div
                  className={getValidClassNames(
                    styles.eventCard,
                    cardPositioningClass
                  )}
                >
                  <div className={styles.eventTitleWrapper}>
                    {iconNameToSvg[type as ValueOf<typeof IconName>]}
                    <p>
                      <span className={styles.firstName}>{firstName}</span>{" "}
                      <span className={styles.lastName}>{lastName}</span>
                    </p>
                    {!mainName && <p className={styles.firstName}>{type}</p>}
                  </div>
                  <p className={styles.secondName}>{secondName}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {isListOpened === false && (
        <button className={styles.showAllBtn} onClick={handleOpenListBtnClick}>
          Show All Match Events
        </button>
      )}
    </div>
  );
};

export { EventsList };
