import React from "react";
import styles from "./Search.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardItem from "../../components/CardItem/CardItem";

const Search = () => {
  return (
    <main className={styles.search}>
      <SearchForm />
      <h2 className={styles.search__notFound}>Ничего не найдено</h2>
      <ul className={styles.search__list}>
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
    </main>
  );
};

export default Search;
