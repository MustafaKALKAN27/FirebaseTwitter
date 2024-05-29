// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2QLVcAreafyTWD56sITliNu6VtMGMrB4",
  authDomain: "fir-twitter-f7bad.firebaseapp.com",
  projectId: "fir-twitter-f7bad",
  storageBucket: "fir-twitter-f7bad.appspot.com",
  messagingSenderId: "444231559718",
  appId: "1:444231559718:web:75fb12c185fa9bda6d14e7"
};

/*

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWhjLFyaFrIU87buI8-MFfclorBtjyjUs",
  authDomain: "hi-twitter-9dc51.firebaseapp.com",
  projectId: "hi-twitter-9dc51",
  storageBucket: "hi-twitter-9dc51.appspot.com",
  messagingSenderId: "642435044204",
  appId: "1:642435044204:web:ba429bf6d2af08e4691949",
};
*/
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);