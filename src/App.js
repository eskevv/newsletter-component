import './App.css';
import SignUp from "./components/SignUp";
import {useState} from "react";
import Success from "./components/Success";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="App">
      {!isSubmitted ? <>
        <SignUp setSuccess={setIsSubmitted}/>
        <div className="right-section"></div>
      </> : <Success/>}
    </div>
  );
}

export default App;
