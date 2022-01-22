// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD__sfmj9E5ra-6OeVzYS2vnSUoUzGhsQo',
  authDomain: 'boilermake-whatsinmyfridge.firebaseapp.com',
  projectId: 'boilermake-whatsinmyfridge',
  storageBucket: 'boilermake-whatsinmyfridge.appspot.com',
  messagingSenderId: '129196482057',
  appId: '1:129196482057:web:47d038540189cff365a2d8',
  measurementId: 'G-W33E0FPNF2'
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}