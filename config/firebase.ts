
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBZYGew_0YXQlspvaPw_qndt0US1rlesbM",
  authDomain: "next-firebase-task-1b803.firebaseapp.com",
  projectId: "next-firebase-task-1b803",
  storageBucket: "next-firebase-task-1b803.appspot.com",
  messagingSenderId: "694942443340",
  appId: "1:694942443340:web:62769c76ed7f8da49e11e9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()