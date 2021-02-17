import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqGSHjk6ORJhYwgAXpb6pCAFTlX-Gxv5Y",
  authDomain: "netflix-clone-16401.firebaseapp.com",
  databaseURL: "https://netflix-clone-16401-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-16401",
  storageBucket: "netflix-clone-16401.appspot.com",
  messagingSenderId: "73640790719",
  appId: "1:73640790719:web:d06413483b1f778e08d40a",
  measurementId: "G-7F2V05HL47"
};

const firebaseAdmin = firebase.initializeApp(firebaseConfig);
const db = firebaseAdmin.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider, analytics };
