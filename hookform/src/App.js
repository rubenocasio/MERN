import Form from "./components/Form.jsx"
import Details from "./components/Details"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState } from "react";

function App() {
      const [state, setState ] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm: "",
      });

  return (
    <div className="App">
    <Form inputs={state} setInputs={setState}/>
    <Details data={state}/>
    </div>
  );
}

export default App;
