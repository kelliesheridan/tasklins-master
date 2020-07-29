import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyB7ehKa17EUJUOkrMLrmyvQ5qSz7j2xhJo",
  authDomain: "tasklins.firebaseapp.com",
  databaseURL: "https://tasklins.firebaseio.com",
  projectId: "tasklins",
  storageBucket: "tasklins.appspot.com",
  messagingSenderId: "236516275374",
  appId: "1:236516275374:web:5c3a4aba203002596fa93f",
  measurementId: "G-NQ0YN6FRTS"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()


export { firebaseAuth, firebaseDb }