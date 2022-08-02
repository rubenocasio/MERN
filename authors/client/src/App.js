import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import New from "./views/New";
import Show from "./views/Show";
import Edit from "./views/Edit";

function App() {
  return (
  <BrowserRouter>
      <div className="app">
        <div className="appbody">
          <h1 className="bg-dark text-warning rounded col-3 mx-auto">
            Favorite Authors
          </h1>
          <br />
          <div className="d-flex justify-content-center text-warning">
            <Link id="btn5" to="/" className="btn btn-primary">
              Home
            </Link>
            <br />
            <Link id="btn4" to="/new" className="btn btn-primary">
              Add
            </Link>
            <br />
          </div>
          <hr />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/new" element={<New />} />
              <Route path="/author/:id" element={<Show />} />
              <Route path="/edit/:id" element={<Edit />}/>
            </Routes>
        </div>
      </div>
  </BrowserRouter>
  );
}

export default App;
