import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";
import Color from "./components/Color";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <div className="header">
        <h1>Routing Example</h1>
      </div>
        <div className="navbar">
        <p>
          <Link id="link-lt" className="btn btn-success" to="/home">
            Home
          </Link>
        </p>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path=":input" element={<Number />} />
          <Route path=":word/:color/:bg" element={<Color />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
