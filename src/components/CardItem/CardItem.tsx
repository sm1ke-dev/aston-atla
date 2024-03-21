import React from "react";
import styles from "./CardItem.module.scss";

interface ICardItemProps {
  name: string;
  photoUrl: string;
}

const CardItem: React.FC<ICardItemProps> = ({ name, photoUrl }) => {
  const [isLiked, setIsLiked] = React.useState(false);

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
            onClick={() => setIsLiked(!isLiked)}
          ></button>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
