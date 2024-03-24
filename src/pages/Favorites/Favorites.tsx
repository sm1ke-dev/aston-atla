import React from "react";
import styles from "./Favorites.module.scss";
import CardItem from "../../components/CardItem/CardItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth]);

  return (
    <main className={styles.favs}>
      <h2 className={styles.favs__title}>Избранное</h2>
      <h2 className={styles.favs__title}>
        Вы еще ничего не добавили в избранное
      </h2>
      {/* <ul className={styles.favs__list}>
        <CardItem />
        <CardItem />
      </ul> */}
    </main>
  );
};

export default Favorites;
