import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";

const CardPage = lazy(() => import("./pages/CardPage/CardPage"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const History = lazy(() => import("./pages/History/History"));
const Main = lazy(() => import("./pages/Main/Main"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const Search = lazy(() => import("./pages/Search/Search"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));

import Preloader from "./components/Preloader/Preloader";
import { ThemeProvider } from "./context/ThemeContext";
import { ErrorBoundary } from "react-error-boundary";
import { useFirebase } from "./hooks/useFirebase";

function App() {
  const { isLoading } = useFirebase();

  if (isLoading) {
    return (
      <div className="page__loader">
        <Preloader />
      </div>
    );
  }

  return (
    <ThemeProvider>
      <ErrorBoundary fallback={<PageNotFound />}>
        <div className="page">
          <Header />
          <Suspense
            fallback={
              <div className="page__loader">
                <Preloader />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/card/:id" element={<CardPage />} />
              <Route path="/search/:name" element={<Search />} />
              <Route path="/history" element={<History />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
