import React from "react";
import styles from "./SearchForm.module.scss";
import searchIcon from "../../images/search-icon.svg";
import whiteSearchIcon from "../../images/search-icon-white.svg";

const SearchForm = () => {
  const [value, setValue] = React.useState("");

  return (
    <section className={styles.search}>
      <div className={styles.search__formContainer}>
        <div
          className={styles.search__icon}
          style={{ backgroundImage: `url(${searchIcon})` }}
        ></div>
        <form
          className={styles.search__form}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className={styles.search__input}
            name="moviename"
            type="text"
            placeholder="Персонаж"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button
            className={styles.search__button}
            style={{ backgroundImage: `url(${whiteSearchIcon})` }}
            type="submit"
          ></button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
