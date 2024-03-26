import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import { auth, db } from "./firebase";
import CardPage from "./pages/CardPage/CardPage";
import Favorites from "./pages/Favorites/Favorites";
import History from "./pages/History/History";
import Main from "./pages/Main/Main";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Search from "./pages/Search/Search";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import {
  removeUser,
  setUser,
  setFavorite,
  removeFavorite,
  setHistory,
  removeHistory,
} from "./redux/slices/userSlice";
import Preloader from "./components/Preloader/Preloader";
import { useAppDispatch } from "./hooks/redux-hooks";
import { onValue, ref, set } from "firebase/database";
import { useAuth } from "./hooks/useAuth";
import { ICard } from "./redux/atlaApi";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id: userId, favorites, history } = useAuth();
  const favoritesRef = ref(db, "user/" + userId + "/favorites");
  const historyRef = ref(db, "user/" + userId + "/history");

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onValue(ref(db, "user/" + user.uid + "/favorites"), (snapshot) => {
          const data = snapshot.val();
          if (data) {
            dispatch(setFavorite(data.favorites));
          } else {
            dispatch(removeFavorite());
          }
        });
        onValue(ref(db, "user/" + user.uid + "/history"), (snapshot) => {
          const data = snapshot.val();
          if (data) {
            dispatch(setHistory(data.history));
          } else {
            dispatch(removeHistory());
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

  const handleAddFavorite = (card: ICard) => {
    set(favoritesRef, {
      favorites: [...favorites, card],
    }).catch((err) => alert(err.code));
  };

  const handleRemoveFavorite = (card: ICard) => {
    set(favoritesRef, {
      favorites: favorites.filter((el) => el._id !== card._id),
    }).catch((err) => alert(err.code));
  };

  const handleAddHistory = (name: string) => {
    set(historyRef, {
      history: [...history, name],
    }).catch((err) => alert(err.code));
  };

  const handleRemoveHistory = (name: string) => {
    set(historyRef, {
      history: history.filter((el) => el !== name),
    }).catch((err) => alert(err.code));
  };

  if (isLoading) {
    return (
      <div className="page__loader">
        <Preloader />
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="page">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleAddFavorite={handleAddFavorite}
                handleRemoveFavorite={handleRemoveFavorite}
                handleAddHistory={handleAddHistory}
              />
            }
          />
          <Route path="/card/:id" element={<CardPage />} />
          <Route
            path="/search/:name"
            element={
              <Search
                handleAddFavorite={handleAddFavorite}
                handleRemoveFavorite={handleRemoveFavorite}
                handleAddHistory={handleAddHistory}
              />
            }
          />
          <Route
            path="/history"
            element={<History handleRemoveHistory={handleRemoveHistory} />}
          />
          <Route
            path="/favorites"
            element={<Favorites handleRemoveFavorite={handleRemoveFavorite} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
