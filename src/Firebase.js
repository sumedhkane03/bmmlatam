// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnpEvLUUdpUR8_b7hyHx4hnlk_rAgGO4k",
  authDomain: "bmmlatam2.firebaseapp.com",
  databaseURL: "https://bmmlatam2-default-rtdb.firebaseio.com",
  projectId: "bmmlatam2",
  storageBucket: "bmmlatam2.appspot.com",
  messagingSenderId: "786602309812",
  appId: "1:786602309812:web:2dd69be36e6fc07be63fe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();

export {app, db};