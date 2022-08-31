import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs /* addDoc */,query, /* where, */
    orderBy
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
export const db = getFirestore();

//collection ref
export const colRef = collection(db, "testSaves");

// get collection data
getDocs(colRef).then((snapshot) => {
    let saves = [];
    snapshot.docs.forEach((doc) => {
        saves.push({ ...doc.data(), id: doc.id });
    });
    console.log("getdocs: ", saves);

});

// queries
const q = query(colRef,orderBy("createdAt","desc"))

//realtime collection data
// onSnapshot(colRef, (snapshot) => {
//     let saves = [];
//     snapshot.docs.forEach((doc) => {
//         saves.push({ ...doc.data(), id: doc.id });
//     });
//     console.log("firebase testSaves: ", saves);
// });

/* const saveFileAdderFunction = (savefileObj) => {
    addDoc(colRef,savefileObj)
} */
