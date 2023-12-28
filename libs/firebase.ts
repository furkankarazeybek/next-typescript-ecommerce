// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHWXmuzCDZLNnd77i32QZdhWzeTro4Q5U",
  authDomain: "next-ecommerce-408921.firebaseapp.com",
  projectId: "next-ecommerce-408921",
  storageBucket: "next-ecommerce-408921.appspot.com",
  messagingSenderId: "730269399059",
  appId: "1:730269399059:web:9258064dabed5485a527e6",
  measurementId: "G-KPLS8HWZSX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp