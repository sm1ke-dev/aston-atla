import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, id } = useSelector((state: any) => state.user);

  return {
    isAuth: !!email,
    email,
    id,
  };
};
