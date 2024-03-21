import React from "react";
import { Link } from "react-router-dom";
import HistoryLink from "../../components/HistoryLink/HistoryLink";
import styles from "./History.module.scss";

const History = () => {
  return (
    <main className={styles.history}>
      <h2 className={styles.history__title}>История поиска:</h2>
      <ul className={styles.history__list}>
        <HistoryLink />
        <HistoryLink />
        <HistoryLink />
        <HistoryLink />
        <HistoryLink />
      </ul>
    </main>
  );
};

export default History;
