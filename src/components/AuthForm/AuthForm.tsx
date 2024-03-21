import React from "react";
import styles from "./AuthForm.module.scss";

interface IAuthFormProps {
  type: "signup" | "signin";
  children?: React.ReactNode;
}

const AuthForm: React.FC<IAuthFormProps> = ({ type, children }) => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  return (
    <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
      <h2 className={styles.authForm__title}>
        {type === "signup" ? "Регистрация" : "Вход"}
      </h2>
      <div>
        <input
          name="email"
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          className={styles.authForm__input}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          className={styles.authForm__input}
          placeholder="Пароль"
        />
      </div>
      <button type="submit" className={styles.authForm__submit}>
        {type === "signup" ? "Зарегистрироваться" : "Войти"}
      </button>
      {children}
    </form>
  );
};

export default AuthForm;
