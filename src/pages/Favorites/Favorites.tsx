import React from "react";
import styles from "./Favorites.module.scss";
import CardsList from "../../components/CardsList/CardsList";

const Favorites = () => {
  return (
    <main className={styles.favs}>
      <h2 className={styles.favs__title}>Избранное</h2>
      {/* <h2 className={styles.favs__title}>Вы еще ничего не добавили в избранное</h2> */}
      <CardsList />
    </main>
  );
};

export default Favorites;
