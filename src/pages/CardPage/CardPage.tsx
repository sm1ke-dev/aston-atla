import { useNavigate, useParams } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import { useAuth } from "../../hooks/useAuth";
import { useFirebase } from "../../hooks/useFirebase";
import { useGetCharacterByIdQuery } from "../../redux/atlaApi";
import styles from "./CardPage.module.scss";

const CardPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { isAuth, favorites } = useAuth();
  const isLiked = favorites.find((el) => el._id === id);
  const { data: card, isLoading, isError } = useGetCharacterByIdQuery(id);
  const { addFavorite, removeFavorite } = useFirebase();

  const handleClick = () => {
    if (isAuth) {
      if (isLiked && card) {
        removeFavorite(card);
      } else if (!isLiked && card) {
        addFavorite(card);
      }
    } else {
      navigate("/signin");
    }
  };

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
        <div className={styles.card__likeWrapper}>
          <button
            className={`${styles.card__likeButton} ${
              isLiked ? styles.card__likeButton_isActive : ""
            }`}
            aria-label="Кнопка лайка карточки"
            onClick={handleClick}
          ></button>
        </div>
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
function removeFavorite(card: import("../../redux/atlaApi").ICard | undefined) {
  throw new Error("Function not implemented.");
}
