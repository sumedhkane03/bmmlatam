import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth'
import {getAnalytics} from 'firebase/analytics'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyCnpEvLUUdpUR8_b7hyHx4hnlk_rAgGO4k",
  authDomain: "bmmlatam2.firebaseapp.com",
  databaseURL: "https://bmmlatam2-default-rtdb.firebaseio.com",
  projectId: "bmmlatam2",
  storageBucket: "bmmlatam2.appspot.com",
  messagingSenderId: "786602309812",
  appId: "1:786602309812:web:2dd69be36e6fc07be63fe1"
});

const db = app.firestore();
export const auth = getAuth(app);
export const analytics = getAnalytics(app);




export const signInWithGoogle = () => auth.signInWithPopup();

export {app, db};