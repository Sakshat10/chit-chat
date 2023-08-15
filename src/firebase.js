import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0dU5KTap-xm3xrpa48uefw79zpeeyT54",
  authDomain: "chat-434ff.firebaseapp.com",
  projectId: "chat-434ff",
  storageBucket: "chat-434ff.appspot.com",
  messagingSenderId: "899766053334",
  appId: "1:899766053334:web:a38b4432b6deaff2f51c77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();