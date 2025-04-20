// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlidw9uMRPw2O9CgdHKSasczX5EMbnrzE",
  authDomain: "ww-diary-7d218.firebaseapp.com",
  projectId: "ww-diary-7d218",
  storageBucket: "ww-diary-7d218.firebasestorage.app",
  messagingSenderId: "744589819746",
  appId: "1:744589819746:web:ab279fb58e8a5e65c5363b",
  measurementId: "G-YE6P4JSH9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}