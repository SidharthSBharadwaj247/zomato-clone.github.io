
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC77dsrmJ5ai09hLhoj9AeWXlv3t2SkArg",
  authDomain: "zomato-clone-dbd73.firebaseapp.com",
  projectId: "zomato-clone-dbd73",
  storageBucket: "zomato-clone-dbd73.appspot.com",
  messagingSenderId: "42867063202",
  appId: "1:42867063202:web:f1eec867a75a69e041dafb",
  measurementId: "G-9KRS2VLT26"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider= new GoogleAuthProvider()
