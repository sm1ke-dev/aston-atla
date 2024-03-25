import { createSlice } from "@reduxjs/toolkit";

interface IUserInitialState {
  email: string;
  id: string;
  favorites: {
    _id: string;
    name: string;
    photoUrl: string;
  }[];
}

const initialState: IUserInitialState = {
  email: "",
  id: "",
  favorites: [],
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
    removeFavorite(state) {
      state.favorites = [];
    },
  },
});

export const { setUser, removeUser, setFavorite, removeFavorite } =
  userSlice.actions;

export default userSlice.reducer;
