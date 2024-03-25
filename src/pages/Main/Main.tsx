import React from "react";
import styles from "./Main.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardItem from "../../components/CardItem/CardItem";
import { ICard, useGetAllCharactersQuery } from "../../redux/atlaApi";
import Preloader from "../../components/Preloader/Preloader";

interface IMainProps {
  handleAddFavorite: (card: ICard) => void;
  handleRemoveFavorite: (card: ICard) => void;
}

const Main: React.FC<IMainProps> = ({
  handleAddFavorite,
  handleRemoveFavorite,
}) => {
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
        {cards?.map((card) => (
          <CardItem
            key={card._id}
            {...card}
            handleAddFavorite={handleAddFavorite}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        ))}
      </ul>
    </main>
  );
};

export default Main;
