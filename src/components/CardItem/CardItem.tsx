import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./CardItem.module.scss";
import PropTypes from "prop-types";
import { useFirebase } from "../../hooks/useFirebase";

interface ICardItemProps {
  name: string;
  photoUrl: string;
  _id: string;
}

const CardItem: React.FC<ICardItemProps> = ({ name, photoUrl, _id }) => {
  const { isAuth, favorites } = useAuth();
  const isLiked = favorites.find((el) => el._id === _id);
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();
  const { addFavorite, removeFavorite } = useFirebase();

  const handleClick = () => {
    if (isAuth) {
      if (isLiked) {
        removeFavorite({ _id, name, photoUrl });
      } else {
        addFavorite({ _id, name, photoUrl });
      }
    } else {
      navigate("/signin");
    }
  };

  return (
    <li className={`${styles.card} elements__card`}>
      <img
        src={photoUrl}
        alt={name}
        className={`${styles.card__image} ${isHovered ? styles.card__image_hovered : ""}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => navigate(`/card/${_id}`)}
      />
      <div className={styles.card__infoWrapper}>
        <h2
          className={styles.card__name}
          onClick={() => navigate(`/card/${_id}`)}
        >
          {name}
        </h2>
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

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default CardItem;
