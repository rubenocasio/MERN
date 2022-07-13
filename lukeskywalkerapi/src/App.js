import { BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./components/Form";
import People from "./components/People";
import Planets from "./components/Planets";
import Films from "./components/Films";
import Species from "./components/Species";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
            alt="Star Wars Logo"
          />
        </div>
        <div className="navbar">
          <Form />
        </div>
        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planets />} />
          <Route path="/films/:id" element={<Films />} />
          <Route path="/species/:id" element={<Species />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
