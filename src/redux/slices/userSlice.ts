import { createSlice } from "@reduxjs/toolkit";

interface IUserInitialState {
  email: string;
  id: string;
  favorites: {
    _id: string;
    name: string;
    photoUrl: string;
  }[];
  history: string[];
}

const initialState: IUserInitialState = {
  email: "",
  id: "",
  favorites: [],
  history: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = "";
      state.id = "";
    },
    setFavorite(state, action) {
      state.favorites = action.payload;
    },
    clearFavorite(state) {
      state.favorites = [];
    },
    setHistory(state, action) {
      state.history = action.payload;
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const {
  setUser,
  removeUser,
  setFavorite,
  clearFavorite,
  setHistory,
  clearHistory,
} = userSlice.actions;

export default userSlice.reducer;
