import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACJUXIE5iS0rSSi1N0Ltyufp6N1yxl0gk",
  authDomain: "ecommerce-website-54d13.firebaseapp.com",
  projectId: "ecommerce-website-54d13",
  storageBucket: "ecommerce-website-54d13.appspot.com",
  messagingSenderId: "391744396434",
  appId: "1:391744396434:web:71af71dbd0d198e6749a4b",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });

export { auth, app, googleProvider, facebookProvider };
