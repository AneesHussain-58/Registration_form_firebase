import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCXE45ejaOOcekufBknv8b7QQzpCnXj3Dk",
  authDomain: "react-fire-20d32.firebaseapp.com",
  projectId: "react-fire-20d32",
  storageBucket: "react-fire-20d32.appspot.com",
  messagingSenderId: "545693363597",
  appId: "1:545693363597:web:176db474c04666fcf861c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;