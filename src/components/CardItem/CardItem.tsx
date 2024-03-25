import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ICard } from "../../redux/atlaApi";
import styles from "./CardItem.module.scss";

interface ICardItemProps {
  name: string;
  photoUrl: string;
  _id: string;
  handleAddFavorite?: (card: ICard) => void;
  handleRemoveFavorite?: (card: ICard) => void;
}

const CardItem: React.FC<ICardItemProps> = ({
  name,
  photoUrl,
  _id,
  handleAddFavorite,
  handleRemoveFavorite,
}) => {
  const { isAuth, favorites } = useAuth();
  const isLiked = favorites.find((el) => el._id === _id);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuth) {
      if (isLiked && handleRemoveFavorite) {
        handleRemoveFavorite({ _id, name, photoUrl });
      } else if (!isLiked && handleAddFavorite) {
        handleAddFavorite({ _id, name, photoUrl });
      }
    } else {
      navigate("/signin");
    }
  };

  return (
    <li className={`${styles.card} elements__card`}>
      <img src={photoUrl} alt={name} className={styles.card__image} />
      <div className={styles.card__infoWrapper}>
        <h2 className={styles.card__name}>{name}</h2>
        <div className={styles.card__likeWrapper}>
          <button
            type="button"
            className={`${styles.card__likeButton} ${
              isLiked ? styles.card__likeButton_isActive : ""
            }`}
            aria-label="Кнопка лайка карточки"
            onClick={handleClick}
          ></button>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
