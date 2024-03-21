import React from "react";
import styles from "../../components/AuthForm/AuthForm.module.scss";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

const SignUp = () => {
  return (
    <AuthForm type="signup">
      <p className={styles.authForm__text}>
        Уже зарегистрированы?{" "}
        <Link to="/signin" className={styles.authForm__link}>
          Войти
        </Link>
      </p>
    </AuthForm>
  );
};

export default SignUp;
