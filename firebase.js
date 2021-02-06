import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAr8_X2wzBERQARVluW2W6Tapw5JNx_5ZI",
    authDomain: "health-care-software.firebaseapp.com",
    databaseURL: "https://health-care-software.firebaseio.com",
    projectId: "health-care-software",
    storageBucket: "health-care-software.appspot.com",
    messagingSenderId: "473024683908",
    appId: "1:473024683908:web:70a337a3a98cdbce8707d1",
    measurementId: "G-LD3ENYDY5M"
    });

export default app;