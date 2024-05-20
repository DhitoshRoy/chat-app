

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import App from "../src/App";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9933f.firebaseapp.com",
  projectId: "reactchat-9933f",
  storageBucket: "reactchat-9933f.appspot.com",
  messagingSenderId: "981695969581",
  appId: "1:981695969581:web:1e5dc68bb5405a5d603ba4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export const Storage = getStorage(app)

export default app;