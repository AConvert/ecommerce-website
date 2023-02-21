import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvkJCwk8dloYI1H0XaVe_gckyWeGE1bdA",
  authDomain: "food-ecommerce-b4048.firebaseapp.com",
  projectId: "food-ecommerce-b4048",
  storageBucket: "food-ecommerce-b4048.appspot.com",
  messagingSenderId: "259470594038",
  appId: "1:259470594038:web:d57cf2431df14fd49381d7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
