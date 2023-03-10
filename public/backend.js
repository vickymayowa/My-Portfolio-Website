// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase,ref,set,onValue} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getStorage,ref as StRef,uploadBytesResumable,getDownloadURL} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhncqaKypwMBeGnkW2G_hdyFCJf2uFHc",
  authDomain: "vicky-portfolio-application.firebaseapp.com",
  databaseURL: "https://vicky-portfolio-application-default-rtdb.firebaseio.com",
  projectId: "vicky-portfolio-application",
  storageBucket: "vicky-portfolio-application.appspot.com",
  messagingSenderId: "728345470885",
  appId: "1:728345470885:web:acac82bf58b3e8ae6b6a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const storage = getStorage()

let Message = 0 
