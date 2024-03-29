import React from "react";
import styles from "./Main.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardItem from "../../components/CardItem/CardItem";
import { useGetAllCharactersQuery } from "../../redux/atlaApi";
import Preloader from "../../components/Preloader/Preloader";

const Main: React.FC = () => {
  const { data: cards, isLoading, isError } = useGetAllCharactersQuery();

  if (isLoading) {
    return (
      <div className={styles.main__loader}>
        <Preloader />
      </div>
    );
  }

  if (isError) {
    return <h2 className={styles.main__info}>Произошла ошибка</h2>;
  }

  return (
    <main className={styles.main}>
      <SearchForm />
      <ul className={styles.main__list}>
        {cards &&
          cards.map((card) => (
            <CardItem
              key={card._id}
              {...card}
              photoUrl={card.photoUrl ? card.photoUrl : ""}
            />
          ))}
      </ul>
    </main>
  );
};

export default Main;
