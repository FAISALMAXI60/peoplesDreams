import firebase from "firebase/app";
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBTox7BzJUcGLMd8D8nmJ5ivQksjIy3Qzo",
  authDomain: "peoplesdreams-3e9eb.firebaseapp.com",
  databaseURL: "https://peoplesdreams-3e9eb.firebaseio.com",
  projectId: "peoplesdreams-3e9eb",
  storageBucket: "peoplesdreams-3e9eb.appspot.com",
  messagingSenderId: "113068143576",
  appId: "1:113068143576:web:ca79ba3589cf401cc4f8ad",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// export const auth = firebase.auth();
// export const storage = firebase.storage();
