import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import People from "./components/people";
import Starships from "./components/Starships";
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

        </div>
        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<planets />} />
          <Route path="/starships/:id" element={<Starships />} />
          {/* <Route path="/people/:id" element={<Luke />} />
          <Route path="/people/:id" element={<Luke />} />
          <Route path="/people/:id" element={<Luke />} />
          <Route path="/people/:id" element={<Luke />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
