import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Неправильный логин или пароль"));
  };

  return <AuthForm type="signin" onSubmit={handleLogin} />;
};

export default SignIn;
