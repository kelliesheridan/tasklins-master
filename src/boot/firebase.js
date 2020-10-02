import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyB7ehKa17EUJUOkrMLrmyvQ5qSz7j2xhJo",
  authDomain: "tasklins.firebaseapp.com",
  databaseURL: "https://tasklins-test.firebaseio-test.com",
  projectId: "tasklins",
  storageBucket: "tasklins.appspot.com",
  messagingSenderId: "236516275374",
  appId: "1:236516275374:web:5c3a4aba203002596fa93f",
  measurementId: "G-NQ0YN6FRTS"
}

var firebaseTestConfig = {
  apiKey: "AIzaSyBHpmemXDMqHRmPt3GB4bfhsjmnR64GzIA",
  authDomain: "tasklins-test.firebaseapp.com",
  databaseURL: "https://tasklins-test.firebaseio.com",
  projectId: "tasklins-test",
  storageBucket: "tasklins-test.appspot.com",
  messagingSenderId: "975816351714",
  appId: "1:975816351714:web:65f7e5397131ee6cf463bb"
}

 let firebaseApp = firebase.initializeApp(firebaseConfig)
//let firebaseApp = firebase.initializeApp(firebaseTestConfig)

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()


export { firebaseAuth, firebaseDb }