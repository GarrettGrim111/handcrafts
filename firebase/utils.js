import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC5saUdMXVcx2_SnZabprPOkWq9EBa4W9E",
    authDomain: "handcrafts-shop.firebaseapp.com",
    databaseURL: "https://handcrafts-shop-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "handcrafts-shop",
    storageBucket: "handcrafts-shop.appspot.com",
    messagingSenderId: "43868472563",
    appId: "1:43868472563:web:b0983029387284a297a386"
  };
// Initialize Firebase
// this code helps during re-rendering to prevent additional calls
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// for firebase database call firestore
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;