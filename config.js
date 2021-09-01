import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCx3902HyyTWoi-bkhA9JzoDNLaEauWbXI",
  authDomain: "job-seeker-b1afd.firebaseapp.com",
  projectId: "job-seeker-b1afd",
  storageBucket: "job-seeker-b1afd.appspot.com",
  messagingSenderId: "100927906852",
  appId: "1:100927906852:web:cd5cc9120bf3b0a7ff24b1"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   