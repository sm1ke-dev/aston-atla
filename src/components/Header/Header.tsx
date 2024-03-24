import React from "react";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { removeUser } from "../../redux/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        console.log("Вы вышли из аккаунта");
      })
      .catch((err) => console.log(err));
  };

  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Лого"
        className={styles.header__logo}
        onClick={() => navigate("/")}
      />
      <nav className={styles.header__list}>
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
              onClick={handleLogout}
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
