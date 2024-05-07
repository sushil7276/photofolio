// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQbZsUFgpI9FJVRxI1aPGtHhj-5zS6K3Q",
  authDomain: "photofolio-a08b0.firebaseapp.com",
  projectId: "photofolio-a08b0",
  storageBucket: "photofolio-a08b0.appspot.com",
  messagingSenderId: "254031047299",
  appId: "1:254031047299:web:e5c95493a2b149b81149b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
