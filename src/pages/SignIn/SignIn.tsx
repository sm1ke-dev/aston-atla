import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useFirebase } from "../../hooks/useFirebase";

const SignIn: React.FC = () => {
  const { login } = useFirebase();

  return <AuthForm type="signin" onSubmit={login} />;
};

export default SignIn;
