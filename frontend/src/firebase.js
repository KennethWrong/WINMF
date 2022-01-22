import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD__sfmj9E5ra-6OeVzYS2vnSUoUzGhsQo",
  authDomain: "boilermake-whatsinmyfridge.firebaseapp.com",
  projectId: "boilermake-whatsinmyfridge",
  storageBucket: "boilermake-whatsinmyfridge.appspot.com",
  messagingSenderId: "129196482057",
  appId: "1:129196482057:web:47d038540189cff365a2d8",
  measurementId: "G-W33E0FPNF2"

});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    // user object
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}