import { useParams } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import { useGetCharacterByIdQuery } from "../../redux/atlaApi";
import styles from "./CardPage.module.scss";

const CardPage = () => {
  const { id = "" } = useParams();
  const { data: card, isLoading, isError } = useGetCharacterByIdQuery(id);

  if (isLoading) {
    return (
      <div className={styles.card__loader}>
        <Preloader />
      </div>
    );
  }

  if (isError || !card) {
    return <h2 className={styles.card__error}>Произошла ошибка</h2>;
  }

  return (
    <main className={styles.card}>
      <div className={styles.card__picWrapper}>
        <img className={styles.card__pic} src={card.photoUrl} alt={card.name} />
      </div>
      <div className={styles.card__infoWrapper}>
        <h2 className={styles.card__name}>Имя: {card.name}</h2>
        <p className={styles.card__info}>Пол: {card.gender}</p>
        {card.profession && (
          <p className={styles.card__info}>Деятельность: {card.profession}</p>
        )}
        {card.position && (
          <p className={styles.card__info}>Положение: {card.position}</p>
        )}
        {card.hair && (
          <p className={styles.card__info}>Цвет волос: {card.hair}</p>
        )}
      </div>
    </main>
  );
};

export default CardPage;
