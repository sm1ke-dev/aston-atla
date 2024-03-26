import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { ICard } from "../redux/atlaApi";
import {
  setFavorite,
  setHistory,
  clearHistory,
  setUser,
  removeUser,
  clearFavorite,
} from "../redux/slices/userSlice";
import { useAppDispatch } from "./redux-hooks";
import { useAuth } from "./useAuth";

export const useFirebase = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { id: userId, favorites, history } = useAuth();
  const favoritesRef = ref(db, "user/" + userId + "/favorites");
  const historyRef = ref(db, "user/" + userId + "/history");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onValue(ref(db, "user/" + user.uid + "/favorites"), (snapshot) => {
          const data = snapshot.val();
          if (data) {
            dispatch(setFavorite(data.favorites));
          } else {
            dispatch(clearFavorite());
          }
        });
        onValue(ref(db, "user/" + user.uid + "/history"), (snapshot) => {
          const data = snapshot.val();
          if (data) {
            dispatch(setHistory(data.history));
          } else {
            dispatch(clearHistory());
          }
        });
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
      } else {
        dispatch(removeUser());
      }
      setIsLoading(false);
    });
  }, [dispatch]);

  const addFavorite = (card: ICard) => {
    set(favoritesRef, {
      favorites: [...favorites, card],
    }).catch((err) => alert(err.code));
  };

  const removeFavorite = (card: ICard) => {
    set(favoritesRef, {
      favorites: favorites.filter((el) => el._id !== card._id),
    }).catch((err) => alert(err.code));
  };

  const addHistory = (name: string) => {
    set(historyRef, {
      history: [...history, name],
    }).catch((err) => alert(err.code));
  };

  const removeHistory = (name: string) => {
    set(historyRef, {
      history: history.filter((el) => el !== name),
    }).catch((err) => alert(err.code));
  };

  const handleAuth = (
    email: string,
    password: string,
    type: "login" | "register"
  ) => {
    (type === "login"
      ? signInWithEmailAndPassword
      : createUserWithEmailAndPassword)(auth, email, password)
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

  const register = (email: string, password: string) => {
    handleAuth(email, password, "register");
  };

  const login = (email: string, password: string) => {
    handleAuth(email, password, "login");
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(clearFavorite());
        dispatch(clearHistory());
      })
      .catch((err) => alert(err.code));
  };

  return {
    isLoading,
    addFavorite,
    removeFavorite,
    addHistory,
    removeHistory,
    register,
    login,
    logOut,
  };
};
