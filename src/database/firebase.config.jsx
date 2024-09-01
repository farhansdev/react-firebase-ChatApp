import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHu0udYP_zWAMFzgH1dVkBy_Q6MBoX3Ps",
  authDomain: "chatapp01-cd1de.firebaseapp.com",
  projectId: "chatapp01-cd1de",
  storageBucket: "chatapp01-cd1de.appspot.com",
  messagingSenderId: "847998553143",
  appId: "1:847998553143:web:bc8f23424c62defb7d83b2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);