/// <reference types="vite-plugin-svgr/client" />
import CaretRight from "../../assets/images/icons/caret-right.svg?react";
import styles from "./styles.module.scss";

const LeaguesList = () => {
  return (
    <div className={styles.leaguesListContainer}>
      <div className={styles.titleWrapper}>
        <h2>All Leagues</h2>
        <CaretRight />
      </div>
      <input
        className={styles.searchLeagueInput}
        type="text"
        name="Search"
        placeholder="Search"
      />
    </div>
  );
};

export { LeaguesList };
