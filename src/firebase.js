import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwVw6PAUx30rzklEmFIiqXsKTGRxy1qu4",
    authDomain: "apna-news-5ecc7.firebaseapp.com",
    projectId: "apna-news-5ecc7",
    storageBucket: "apna-news-5ecc7.appspot.com",
    messagingSenderId: "976783167642",
    appId: "1:976783167642:web:352c4d2b0302beb9084f23",
    measurementId: "G-MNPH72XZVF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
