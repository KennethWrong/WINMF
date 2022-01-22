import fridge from "./assets/fridge_hero.jpg";
import Login from "./Login"

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function App() {


  firebase.initializeApp({
    firebaseConfig
  })

  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const analytics = firebase.analytics();
  const [user] = useAuthState(auth)
  

  return (
    <div>
      <h1 className=" text-5xl text-center mb-10 mt-10">What Is In My Fridge</h1>
      <div className="grid grid-cols-2">
        <img src={fridge} className=" max-w-lg"/>
        <div>
          <input type="text" placeholder="username" class="input input-bordered mb-3" />
          <input type="text" placeholder="Enter Ingredients" class="input input-bordered mb-3" />
          <Login></Login>
        </div>
      </div>
    </div>
  )
}

export default App;