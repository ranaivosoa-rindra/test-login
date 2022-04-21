import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhLG_XlL5DFhlCtOFD4YpfBuyURu207KU",

  authDomain: "test-login-2e920.firebaseapp.com",

  projectId: "test-login-2e920",

  storageBucket: "test-login-2e920.appspot.com",

  messagingSenderId: "422950673726",

  appId: "1:422950673726:web:91c8e28591fb9bddc2e06f",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
