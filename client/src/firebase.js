// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gradebook26.firebaseapp.com",
  projectId: "gradebook26",
  storageBucket: "gradebook26.appspot.com",
  messagingSenderId: "925460827818",
  appId: "1:925460827818:web:e0b2329f8f9f0c6bec4ad3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
