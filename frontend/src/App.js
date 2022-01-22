import fridge from "./assets/fridge_hero.jpg";
import Login from "./Login"
import {useState} from "react"

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <h1 className=" text-5xl text-center mb-10 mt-10">What Is In My Fridge</h1>
      <div className="grid grid-cols-2">
        <img src={fridge} className=" max-w-lg"/>
        <div>
          {loggedIn? '':<Login loggedIn={setLoggedIn} setLoggedIn={setLoggedIn}></Login>}
        </div>
      </div>
    </div>
  )
}

export default App;