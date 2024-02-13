import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const [listMaxHeight, setListMaxHeight] = useState<number>();
  const [isListOpened, setIsListOpened] = useState<boolean | null>(null);
  const container = useRef<HTMLUListElement>(null);

  const maxListElements = useMemo(() => {
    if (container.current) {
      return container.current.offsetWidth > DESKTOP_BREAKPOINT
        ? MAX_LIST_ELEMENTS_DESKTOP
        : MAX_LIST_ELEMENTS_MOBILE;
    } else {
      return eventsList.length;
    }
  }, []);

  // const foldedList = useMemo(
  //   () => eventsList.slice(0, maxListElements),
  //   [maxListElements]
  // );

  useEffect(() => {
    if (container.current) {
      const isListOpened = eventsList.length < maxListElements;
      setListMaxHeight(container.current?.scrollHeight);
      setIsListOpened(isListOpened);
      // setEvents(eventsList.slice(0, maxListElements));
    }
  }, [maxListElements]);

  const handleToggleOpenListBtnClick = useCallback(() => {
    setIsListOpened((prevState) => !prevState);
    // setEvents(eventsList);
  }, []);

  return (
    <div className={styles.eventsListContainer}>
      <h2 className={styles.title}>Events</h2>
      <ul
        className={styles.list}
        style={{ maxHeight: isListOpened ? listMaxHeight : 480 }}
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
                    {mainName && (
                      <p>
                        <span className={styles.firstName}>{firstName}</span>{" "}
                        <span className={styles.lastName}>{lastName}</span>
                      </p>
                    )}
                    {!mainName && <p className={styles.firstName}>{type}</p>}
                  </div>
                  <p className={styles.secondName}>{secondName}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        className={styles.showAllBtn}
        onClick={handleToggleOpenListBtnClick}
      >
        {isListOpened ? "Hide All Match Events" : "Show All Match Events"}
      </button>
    </div>
  );
};

export { EventsList };
