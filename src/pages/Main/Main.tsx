import React from "react";
import styles from "./Main.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardItem from "../../components/CardItem/CardItem";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <SearchForm />
      <ul className={styles.main__list}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
    </main>
  );
};

export default Main;
