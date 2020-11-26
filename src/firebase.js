import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhK2EAmwIarOjKdYdJ5T8dIDz_7u3uvJM",
  authDomain: "fir-6bf26.firebaseapp.com",
  databaseURL: "https://fir-6bf26.firebaseio.com",
  projectId: "fir-6bf26",
  storageBucket: "fir-6bf26.appspot.com",
  messagingSenderId: "117942663718",
  appId: "1:117942663718:web:4f8ccddc8c6fa6f0da44e7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
