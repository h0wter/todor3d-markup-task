/// <reference types="vite-plugin-svgr/client" />
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import CaretRightIcon from "../../assets/images/icons/caret-right.svg?react";
import SearchIcon from "../../assets/images/icons/search.svg?react";
import { getValidClassNames } from "../../helpers/get-valid-class-names.helper.ts";
import { getCountryLeagues } from "./helpers/get-country-leagues.helper.ts";
import { getFilteredLeaguesList } from "./helpers/get-filtered-leagues-list.helper.ts";
import { finalFilteredLeagues } from "./countries.ts";
import eplLogo from "../../assets/images/icons/epl-logo.png";
import styles from "./styles.module.scss";

finalFilteredLeagues[0].country.flag = eplLogo;

const LeaguesList = () => {
  const [isAllLeaguesExpanded, setIsAllLeaguesExpanded] = useState(true);
  const [filterValue, setFilterValue] = useState("");
  const [expandedLeagues, setExpandedLeagues] = useState<{
    [key: string]: boolean;
  }>({});

  const filteredLeaguesList = useMemo(
    () => getFilteredLeaguesList(filterValue),
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
            styles.caretIcon,
            !isAllLeaguesExpanded && styles.expandedIcon
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
              {filteredLeaguesList.map((item) => {
                let name, flag, isCountry;

                if ("country" in item) {
                  isCountry = true;
                  name = item.country.name;
                  flag = item.country.flag;
                } else {
                  name = item.name;
                  flag = item.logo;
                }

                return (
                  <li
                    className={styles.leagueItem}
                    key={name + flag}
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
                      {isCountry && (
                        <CaretRightIcon
                          className={getValidClassNames(
                            styles.caretIcon,
                            !expandedLeagues[name] && styles.expandedIcon
                          )}
                        />
                      )}
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
