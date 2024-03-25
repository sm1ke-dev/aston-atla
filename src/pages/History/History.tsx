import React from "react";
import { useNavigate } from "react-router-dom";
import HistoryLink from "../../components/HistoryLink/HistoryLink";
import { useAuth } from "../../hooks/useAuth";
import styles from "./History.module.scss";

interface IHistoryProps {
  handleRemoveHistory: (name: string) => void;
}

const History: React.FC<IHistoryProps> = ({ handleRemoveHistory }) => {
  const navigate = useNavigate();
  const { isAuth, history } = useAuth();

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  return (
    <main className={styles.history}>
      <h2 className={styles.history__title}>История поиска:</h2>
      <ul className={styles.history__list}>
        {history.map((el, i) => (
          <HistoryLink
            key={i}
            name={el}
            handleRemoveHistory={handleRemoveHistory}
          />
        ))}
      </ul>
    </main>
  );
};

export default History;
