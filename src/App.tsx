import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import CardPage from "./pages/CardPage/CardPage";
import Favorites from "./pages/Favorites/Favorites";
import History from "./pages/History/History";
import Main from "./pages/Main/Main";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Search from "./pages/Search/Search";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/history" element={<History />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
