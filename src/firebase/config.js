// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUKHvv3gjbdz8EdgvOXBzzHh7y25cPVw8",
  authDomain: "user-app-eb72e.firebaseapp.com",
  projectId: "user-app-eb72e",
  storageBucket: "user-app-eb72e.appspot.com",
  messagingSenderId: "777899086455",
  appId: "1:777899086455:web:e2f88ada161886db36ec72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
