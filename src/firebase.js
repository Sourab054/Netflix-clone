// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEHauTJkRDv6oCiLzCv1WNSrRxc39Pni8",
  authDomain: "netflix-clone-cb15a.firebaseapp.com",
  projectId: "netflix-clone-cb15a",
  storageBucket: "netflix-clone-cb15a.appspot.com",
  messagingSenderId: "62701792877",
  appId: "1:62701792877:web:5e71565071c0aeb46f1964",
  measurementId: "G-8SJL665VKK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
