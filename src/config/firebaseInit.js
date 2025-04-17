// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHKbtI41Zq0svRqOwI-AYou_HxaPSb9fQ",
  authDomain: "rate-my-pet-project.firebaseapp.com",
  projectId: "rate-my-pet-project",
  storageBucket: "rate-my-pet-project.firebasestorage.app",
  messagingSenderId: "259861492568",
  appId: "1:259861492568:web:2882f7a62994108875ab2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    console.error(`Persistance Error: ${error.message}`);
  });

export default app;