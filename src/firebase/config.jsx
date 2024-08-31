
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBMlhhwIibPVCYs44TNFiwpZlWZB-o9AdM",
  authDomain: "invitacion-689c1.firebaseapp.com",
  projectId: "invitacion-689c1",
  storageBucket: "invitacion-689c1.appspot.com",
  messagingSenderId: "946035630090",
  appId: "1:946035630090:web:2d9e0bafb777c1654f3ff3"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)