import React from "react";
import CardItem from "../CardItem/CardItem";
import styles from "./CardsList.module.scss";

const CardsList = () => {
  return (
    <ul className={styles.list}>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </ul>
  );
};

export default CardsList;
