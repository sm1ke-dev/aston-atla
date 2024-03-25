import React from "react";
import styles from "../../components/AuthForm/AuthForm.module.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/slices/userSlice";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../hooks/redux-hooks";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch((err) => alert(err.code));
  };

  return (
    <AuthForm type="signup" onSubmit={handleRegister}>
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
