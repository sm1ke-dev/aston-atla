import React from "react";
import styles from "./Main.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import CardItem from "../../components/CardItem/CardItem";
import { ICard, useGetAllCharactersQuery } from "../../redux/atlaApi";
import Preloader from "../../components/Preloader/Preloader";

interface IMainProps {
  handleAddFavorite: (card: ICard) => void;
  handleRemoveFavorite: (card: ICard) => void;
  handleAddHistory: (name: string) => void;
}

const Main: React.FC<IMainProps> = ({
  handleAddFavorite,
  handleRemoveFavorite,
  handleAddHistory,
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
      <SearchForm handleAddHistory={handleAddHistory} />
      <ul className={styles.main__list}>
        {cards &&
          cards.map((card) => (
            <CardItem
              key={card._id}
              {...card}
              photoUrl={card.photoUrl ? card.photoUrl : ""}
              handleAddFavorite={handleAddFavorite}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          ))}
      </ul>
    </main>
  );
};

export default Main;
