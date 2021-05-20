// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAcQNKjM4uu32xC8x1dOr8kIeRT1IXuOG4",
  authDomain: "discord-el.firebaseapp.com",
  projectId: "discord-el",
  storageBucket: "discord-el.appspot.com",
  messagingSenderId: "590569253432",
  appId: "1:590569253432:web:54419e1c4720228768d4cd",
  measurementId: "G-E7HDTTVTM2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
