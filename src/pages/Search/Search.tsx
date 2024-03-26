import React from "react";
import styles from "./Search.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardItem from "../../components/CardItem/CardItem";
import { useParams } from "react-router-dom";
import { useSearchCharactersQuery } from "../../redux/atlaApi";
import Preloader from "../../components/Preloader/Preloader";

const Search: React.FC = () => {
  const { name = "" } = useParams();
  const { data: cards, isLoading, isError } = useSearchCharactersQuery(name);

  if (isLoading) {
    return (
      <div className={styles.search__loader}>
        <Preloader />
      </div>
    );
  }

  if (isError) {
    return <h2 className={styles.search__info}>Произошла ошибка</h2>;
  }

  return (
    <main className={styles.search}>
      <SearchForm inputValue={name} />
      {cards?.length == 0 ? (
        <h2 className={styles.search__notFound}>Ничего не найдено</h2>
      ) : (
        <ul className={styles.search__list}>
          {cards?.map((card) => <CardItem key={card._id} {...card} />)}
        </ul>
      )}
    </main>
  );
};

export default Search;
