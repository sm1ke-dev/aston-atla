import React from "react";
import styles from "./AuthForm.module.scss";

interface IAuthFormProps {
  type: "signup" | "signin";
  children?: React.ReactNode;
  onSubmit: (e: string, p: string) => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({ type, children, onSubmit }) => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  return (
    <form
      className={styles.authForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(emailValue, passwordValue);
      }}
    >
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
          autoComplete="on"
        />
        <input
          name="password"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          className={styles.authForm__input}
          placeholder="Пароль"
          autoComplete="on"
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
