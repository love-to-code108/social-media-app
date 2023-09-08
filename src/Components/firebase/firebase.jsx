import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHvtgsrHfWv1RIdY0cxUM5cIjMR7t5iNc",
  authDomain: "social-media-app-40a9f.firebaseapp.com",
  projectId: "social-media-app-40a9f",
  storageBucket: "social-media-app-40a9f.appspot.com",
  messagingSenderId: "234934174154",
  appId: "1:234934174154:web:1fd2b10bf1b3cf6fef4f33"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
