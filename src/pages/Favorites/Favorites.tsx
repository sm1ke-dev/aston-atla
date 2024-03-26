import React from "react";
import styles from "./Favorites.module.scss";
import CardItem from "../../components/CardItem/CardItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth, favorites } = useAuth();

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  return (
    <main className={styles.favs}>
      {favorites.length == 0 ? (
        <h2 className={styles.favs__title}>
          Вы еще ничего не добавили в избранное
        </h2>
      ) : (
        <>
          <h2 className={styles.favs__title}>Избранное</h2>
          <ul className={styles.favs__list}>
            {favorites.map((card) => (
              <CardItem key={card._id} {...card} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Favorites;
