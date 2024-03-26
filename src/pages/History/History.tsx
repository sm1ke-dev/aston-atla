import React from "react";
import { useNavigate } from "react-router-dom";
import HistoryLink from "../../components/HistoryLink/HistoryLink";
import { useAuth } from "../../hooks/useAuth";
import styles from "./History.module.scss";

const History: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth, history } = useAuth();

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  return (
    <main className={styles.history}>
      {history.length == 0 ? (
        <h2 className={styles.history__title}>Вы еще ничего не искали</h2>
      ) : (
        <>
          <h2 className={styles.history__title}>История поиска:</h2>
          <ul className={styles.history__list}>
            {history.map((el, i) => (
              <HistoryLink key={i} name={el} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default History;
