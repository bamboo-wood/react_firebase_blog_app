import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7IYeq8KGXw64SlRiWFsDhiXqZjE3qyDs",
  authDomain: "react-firebase-blog-app-2fa44.firebaseapp.com",
  projectId: "react-firebase-blog-app-2fa44",
  storageBucket: "react-firebase-blog-app-2fa44.appspot.com",
  messagingSenderId: "754402233999",
  appId: "1:754402233999:web:af46289497d54b3f35aafa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
