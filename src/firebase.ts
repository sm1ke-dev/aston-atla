import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtDxolro8LZQipZvykM8gfKFQdE9FF2t4",
  authDomain: "aston-atla.firebaseapp.com",
  projectId: "aston-atla",
  storageBucket: "aston-atla.appspot.com",
  messagingSenderId: "1015331362592",
  appId: "1:1015331362592:web:dfb482f39d5eea3ec8a945",
  databaseURL:
    "https://aston-atla-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
