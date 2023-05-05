// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARXPQRINgY7x1z2Xz-KKFnQ1EiuHjHnoU",
  authDomain: "r-dotdot.firebaseapp.com",
  projectId: "r-dotdot",
  storageBucket: "r-dotdot.appspot.com",
  messagingSenderId: "898739240332",
  appId: "1:898739240332:web:3a0e341766a068f4beeaa9",
  measurementId: "G-8YNTL1T8N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);