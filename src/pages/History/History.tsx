import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HistoryLink from "../../components/HistoryLink/HistoryLink";
import { useAuth } from "../../hooks/useAuth";
import styles from "./History.module.scss";

const History: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth]);

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
