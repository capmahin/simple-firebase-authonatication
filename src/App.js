import logo from "./logo.svg";
import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>google sign in</button>
      <h2>Name:{user.displayName}</h2>
    </div>
  );
}

export default App;
