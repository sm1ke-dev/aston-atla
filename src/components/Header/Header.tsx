import React from "react";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Лого"
        className={styles.header__logo}
        onClick={() => navigate("/")}
      />
      <nav className={styles.header__list}>
        <Link to="/signup" className={styles.header__nav}>
          Регистрация
        </Link>
        <Link to="/signin" className={styles.header__nav}>
          Вход
        </Link>
      </nav>
    </header>
  );
};

export default Header;
