import { useAppSelector } from "./redux-hooks";

export const useAuth = () => {
  const { email, id, favorites, history } = useAppSelector(
    (state) => state.user
  );

  return {
    isAuth: !!email,
    email,
    id,
    favorites,
    history,
  };
};
