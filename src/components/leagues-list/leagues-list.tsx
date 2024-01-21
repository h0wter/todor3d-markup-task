/// <reference types="vite-plugin-svgr/client" />
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import CaretRightIcon from "../../assets/images/icons/caret-right.svg?react";
import SearchIcon from "../../assets/images/icons/search.svg?react";
import styles from "./styles.module.scss";
import { finalFilteredLeagues } from "./countries.ts";
import { getValidClassNames } from "../../helpers/get-valid-class-names.helper.ts";
import { getCountryLeagues } from "./helpers/get-country-leagues.helper.ts";

finalFilteredLeagues[0].country.name = "International";
finalFilteredLeagues[0].country.flag = "/src/assets/images/icons/epl-logo.png";

const LeaguesList = () => {
  const [isAllLeaguesExpanded, setIsAllLeaguesExpanded] = useState(true);
  const [filterValue, setFilterValue] = useState("");
  const [expandedLeagues, setExpandedLeagues] = useState<{
    [key: string]: boolean;
  }>({});

  const filteredLeaguesList = useMemo(
    () =>
      finalFilteredLeagues.filter((league) =>
        league.country.name.toLowerCase().includes(filterValue)
      ),
    [filterValue]
  );

  const handleAllLeaguesToggle = useCallback(
    () => setIsAllLeaguesExpanded(!isAllLeaguesExpanded),
    [isAllLeaguesExpanded]
  );

  const handleFilterInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value.toLowerCase());
  }, []);

  const handleLeagueToggle = useCallback(
    (name: string) => () => {
      setExpandedLeagues({
        ...expandedLeagues,
        [name]: !expandedLeagues[name],
      });
    },
    [expandedLeagues]
  );

  return (
    <div className={styles.leaguesListContainer}>
      <div className={styles.titleWrapper} onClick={handleAllLeaguesToggle}>
        <h2>All Leagues</h2>
        <CaretRightIcon
          className={getValidClassNames(
            !isAllLeaguesExpanded && styles.rotated
          )}
        />
      </div>
      {isAllLeaguesExpanded && (
        <>
          <div className={styles.inputWrapper}>
            <input
              className={styles.searchLeagueInput}
              type="text"
              name="Search"
              placeholder="Search"
              onChange={handleFilterInput}
            />
            <SearchIcon className={styles.searchIcon} />
          </div>
          <div className={styles.leaguesListWrapper}>
            <ul className={styles.leaguesList}>
              {filteredLeaguesList.map(({ country }) => {
                const { name, flag } = country;

                return (
                  <li
                    className={styles.leagueItem}
                    key={name}
                    onClick={handleLeagueToggle(name)}
                  >
                    <div className={styles.leagueLabelWrapper}>
                      {flag && (
                        <img
                          className={styles.leagueIcon}
                          src={flag}
                          alt={name}
                        />
                      )}
                      <p
                        className={getValidClassNames(
                          styles.leagueName,
                          expandedLeagues[name] && styles.expanded
                        )}
                      >
                        {name}
                      </p>
                      <CaretRightIcon
                        className={getValidClassNames(
                          styles.caretIcon,
                          !expandedLeagues[name] && styles.rotated
                        )}
                      />
                    </div>
                    {expandedLeagues[name] && (
                      <ul className={styles.expandedList}>
                        {getCountryLeagues(name)?.map((item) => {
                          const { id, name, logo } = item.league;

                          return (
                            <li className={styles.expandedListItem} key={id}>
                              <img
                                className={styles.leagueIcon}
                                src={logo}
                                alt={name}
                              />
                              <p className={styles.expandedListItemTitle}>
                                {item.league.name}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export { LeaguesList };
