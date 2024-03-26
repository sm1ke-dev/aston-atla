import React from "react";
import styles from "./SearchForm.module.scss";
import searchIcon from "../../images/search-icon.svg";
import whiteSearchIcon from "../../images/search-icon-white.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSearchCharactersQuery } from "../../redux/atlaApi";
import { useDebounce } from "../../hooks/useDebounce";
import { useFirebase } from "../../hooks/useFirebase";

interface ISearchFormProps {
  inputValue?: string;
}

const SearchForm: React.FC<ISearchFormProps> = ({ inputValue = "" }) => {
  const [value, setValue] = React.useState(inputValue);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isKeyPressed, setIsKeyPressed] = React.useState(false);
  const navigate = useNavigate();
  const debouncedValue = useDebounce(value, 300);
  const { data: characters } = useSearchCharactersQuery(debouncedValue);
  const { addHistory } = useFirebase();

  React.useEffect(() => {
    if (value === "") {
      setIsKeyPressed(false);
    }
  }, [value]);

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

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
            addHistory(value);
          }}
        >
          <input
            className={styles.search__input}
            name="moviename"
            type="text"
            placeholder="Персонаж"
            required
            tabIndex={1}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setIsKeyPressed(true);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
          ></input>
          <button
            className={styles.search__button}
            style={{ backgroundImage: `url(${whiteSearchIcon})` }}
            type="submit"
          ></button>
        </form>
      </div>
      {characters?.length !== 0 && isFocused && isKeyPressed && (
        <ul className={styles.search__suggestions} tabIndex={2}>
          {characters &&
            characters.slice(0, 5).map((character) => (
              <li className={styles.search__suggestion} key={character._id}>
                <Link to={`/card/${character._id}`}>{character.name}</Link>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};

export default SearchForm;
