// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFbRuCJq1igkKH4BEZZyHVqWbGPbTLxD8",
  authDomain: "netflix-clone-eafd8.firebaseapp.com",
  projectId: "netflix-clone-eafd8",
  storageBucket: "netflix-clone-eafd8.appspot.com",
  messagingSenderId: "756790525059",
  appId: "1:756790525059:web:2828c44b204c0df2a96fb6",
  measurementId: "G-2H5L7M3LNH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
