import React from "react";
import styles from "./SearchForm.module.scss";
import searchIcon from "../../images/search-icon.svg";
import whiteSearchIcon from "../../images/search-icon-white.svg";
import { useNavigate } from "react-router-dom";

interface ISearchFormProps {
  inputValue?: string;
  handleAddHistory: (name: string) => void;
}

const SearchForm: React.FC<ISearchFormProps> = ({
  inputValue = "",
  handleAddHistory,
}) => {
  const [value, setValue] = React.useState(inputValue);
  const navigate = useNavigate();

  return (
    <section className={styles.search}>
      <div className={styles.search__formContainer}>
        <div
          className={styles.search__icon}
          style={{ backgroundImage: `url(${searchIcon})` }}
        ></div>
        <form
          className={styles.search__form}
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search/${value}`);
            handleAddHistory(value);
          }}
        >
          <input
            className={styles.search__input}
            name="moviename"
            type="text"
            placeholder="Персонаж"
            required
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
