// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuRHVNRIeLePcoo1xLe35o0jBU-kPo_VI",
  authDomain: "db-estore.firebaseapp.com",
  projectId: "db-estore",
  storageBucket: "db-estore.appspot.com",
  messagingSenderId: "859784012475",
  appId: "1:859784012475:web:60b6bf9f36b25389013f9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;