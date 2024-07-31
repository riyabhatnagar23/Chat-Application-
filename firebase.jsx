
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAujFR3BvYu_uFdF_oPmVM5qUK94rTsOwc",
  authDomain: "chat-53a7b.firebaseapp.com",
  projectId: "chat-53a7b",
  storageBucket: "chat-53a7b.appspot.com",
  messagingSenderId: "352919152425",
  appId: "1:352919152425:web:36bdab0f87fb45876d7938"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();