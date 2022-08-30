import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    onSnapshot,
    getDocs /* addDoc */,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBD2THqXDPlwZPKN55h9qt5PK40cMqm6HI",
    authDomain: "vn-auth-7c6d0.firebaseapp.com",
    databaseURL:"https://vn-auth-7c6d0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vn-auth-7c6d0",
    storageBucket: "vn-auth-7c6d0.appspot.com",
    messagingSenderId: "604627266077",
    appId: "1:604627266077:web:156e11af0eff19154df4f4",
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//collection ref
const colRef = collection(db, "testSaves");

// get collection data
getDocs(colRef).then((snapshot) => {
    let saves = [];
    snapshot.docs.forEach((doc) => {
        saves.push({ ...doc.data(), id: doc.id });
    });
    console.log("getdocs: ", saves);

});

//realtime collection data
onSnapshot(colRef, (snapshot) => {
    let saves = [];
    snapshot.docs.forEach((doc) => {
        saves.push({ ...doc.data(), id: doc.id });
    });
    console.log("firebase testSaves: ", saves);
});

/* const saveFileAdderFunction = (savefileObj) => {
    addDoc(colRef,savefileObj)
} */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
