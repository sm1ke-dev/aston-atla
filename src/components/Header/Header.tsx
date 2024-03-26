import React from "react";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import whiteLogo from "../../images/ATLABLogo.webp";
import darkIcon from "../../images/dark.png";
import whiteIcon from "../../images/white.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../context/ThemeContext";
import { useFirebase } from "../../hooks/useFirebase";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { isWhite, toggleTheme } = useTheme();
  const { logOut } = useFirebase();

  return (
    <header
      className={`${styles.header} ${isWhite ? styles.header_white : ""}`}
    >
      <img
        src={isWhite ? whiteLogo : logo}
        alt="Лого"
        className={styles.header__logo}
        onClick={() => navigate("/")}
      />
      <nav className={styles.header__list}>
        <img
          className={styles.header__icon}
          src={isWhite ? darkIcon : whiteIcon}
          alt="dark icon"
          onClick={toggleTheme}
        />
        {isAuth ? (
          <>
            <Link to="/favorites" className={styles.header__nav}>
              Избранное
            </Link>
            <Link to="/history" className={styles.header__nav}>
              История поиска
            </Link>
            <button
              type="button"
              className={styles.header__nav}
              onClick={logOut}
            >
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className={styles.header__nav}>
              Регистрация
            </Link>
            <Link to="/signin" className={styles.header__nav}>
              Вход
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
