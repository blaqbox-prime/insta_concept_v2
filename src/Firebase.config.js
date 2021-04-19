import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDOTYbrI2Pv4O7iDkSDFNVczscTPxS8M4",
    authDomain: "instagram-concept-1282c.firebaseapp.com",
    projectId: "instagram-concept-1282c",
    storageBucket: "instagram-concept-1282c.appspot.com",
    messagingSenderId: "1029665339709",
    appId: "1:1029665339709:web:c9aa21a889d63fc6fe2d54",
    measurementId: "G-LGJ088Q0BS"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
