// install firebase for this module npm i firebase

import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBaXpnrF-7mUWh1VKCI06Mg0Y7PK6_IMxM",
    authDomain: "clone-f8eca.firebaseapp.com",
    databaseURL: "https://clone-f8eca.firebaseio.com",
    projectId: "clone-f8eca",
    storageBucket: "clone-f8eca.appspot.com",
    messagingSenderId: "24125731666",
    appId: "1:24125731666:web:8615cec9fdd0a0037d008b",
    measurementId: "G-SNWD5EHMB3"

});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {  auth };