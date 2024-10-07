// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoaKcXuYqJhOHoK77hcRWt8Iax1HS-ank",
  authDomain: "blog-app-7f4fc.firebaseapp.com",
  projectId: "blog-app-7f4fc",
  storageBucket: "blog-app-7f4fc.appspot.com",
  messagingSenderId: "684124497785",
  appId: "1:684124497785:web:160199fc066828170f31a8",
  measurementId: "G-3R1N8CPK3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app)