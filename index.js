// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaMJ85WYKK7Rp9auX2-im7X-Xf51pmQS4",
  authDomain: "scrape-financial-data.firebaseapp.com",
  projectId: "scrape-financial-data",
  storageBucket: "scrape-financial-data.appspot.com",
  messagingSenderId: "562603929110",
  appId: "1:562603929110:web:5eb53efc211c161d680f37",
  measurementId: "G-WQYB27P9PV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
