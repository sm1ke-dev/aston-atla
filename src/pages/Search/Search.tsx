import React from "react";
import styles from "./Search.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardsList from "../../components/CardsList/CardsList";

const Search = () => {
  return (
    <main className={styles.search}>
      <SearchForm />
      <h2 className={styles.search__notFound}>Ничего не найдено</h2>
      {/* <CardsList /> */}
    </main>
  );
};

export default Search;
