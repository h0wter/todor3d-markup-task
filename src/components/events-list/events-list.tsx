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
const FOLDED_LIST_MAX_HEIGHT_MOBILE = 452;
const FOLDED_LIST_MAX_HEIGHT_DESKTOP = 276;

const EventsList = () => {
  const [listMaxHeight, setListMaxHeight] = useState<number>();
  const [isListOpened, setIsListOpened] = useState<boolean | null>(null);
  const container = useRef<HTMLUListElement>(null);

  const { maxListElements, foldedListMaxHeight } = useMemo(() => {
    if (container.current) {
      const isDesktop = container.current.offsetWidth > DESKTOP_BREAKPOINT;
      const maxListElements = isDesktop
        ? MAX_LIST_ELEMENTS_DESKTOP
        : MAX_LIST_ELEMENTS_MOBILE;
      const foldedListMaxHeight = isDesktop
        ? FOLDED_LIST_MAX_HEIGHT_DESKTOP
        : FOLDED_LIST_MAX_HEIGHT_MOBILE;
      return {
        maxListElements,
        foldedListMaxHeight,
      };
    } else {
      return {
        maxListElements: eventsList.length,
        foldedListMaxHeight: FOLDED_LIST_MAX_HEIGHT_DESKTOP,
      };
    }
  }, []);

  useEffect(() => {
    if (container.current) {
      const isListOpened = eventsList.length < maxListElements;
      setListMaxHeight(container.current?.scrollHeight);
      setIsListOpened(isListOpened);
    }
  }, [maxListElements]);

  const handleToggleOpenListBtnClick = useCallback(() => {
    setIsListOpened((prevState) => !prevState);
  }, []);

  return (
    <div className={styles.eventsListContainer}>
      <h2 className={styles.title}>Events</h2>
      <ul
        className={styles.list}
        style={{
          maxHeight: isListOpened ? listMaxHeight : foldedListMaxHeight,
        }}
        ref={container}
      >
        {eventsList.map((event, idx) => {
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
