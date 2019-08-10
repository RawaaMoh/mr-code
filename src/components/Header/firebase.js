// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbj21YVKzDKrXwJesksQrOLutXdxAgX3E",
    authDomain: "mr-co-26af5.firebaseapp.com",
    databaseURL: "https://mr-co-26af5.firebaseio.com",
    projectId: "mr-co-26af5",
    storageBucket: "",
    messagingSenderId: "902928265561",
    appId: "1:902928265561:web:59deed7d37f09520"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;