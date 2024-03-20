import React from "react";
import styles from "./Main.module.scss";
import CardsList from "../../components/CardsList/CardsList";
import SearchForm from "../../components/SearchForm/SearchForm";
import logo from "../../logo.svg";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <SearchForm />
      <CardsList />
    </main>
  );
};

export default Main;
