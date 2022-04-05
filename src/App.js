import logo from "./logo.svg";
import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const handleGoogleSignIn = () => {
    console.log("working");
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>google sign in</button>
    </div>
  );
}

export default App;
