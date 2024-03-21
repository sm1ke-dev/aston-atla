import React from "react";
import styles from "./PageNotFound.module.scss";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <h2 className={styles.notFound__title}>404</h2>
      <p className={styles.notFound__subtitle}>Страница не найдена</p>
      <p className={styles.notFound__link} onClick={() => navigate(-1)}>
        Назад
      </p>
    </div>
  );
};

export default PageNotFound;
