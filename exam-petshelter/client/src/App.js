import React from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import New from "./views/New";
import Show from "./views/Show";
import Edit from "./views/Edit";

function App() {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
    .then((res) => {
      setPets(res.data.artists);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [loaded]);

  const onDeleteHandler = (_id) => {
    axios.delete(`http://localhost:8000/api/destroy/pet/${_id}`)
      .then((res) => {
        console.log(res);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="app">
      <div className="appbody">
        <BrowserRouter>
          <h1 className="bg-dark text-warning rounded col-3 mx-auto">
            Pet Shelter
          </h1>
          <br />
          <div className="d-flex justify-content-center text-warning">
            <Link id="btn5" to="/" className="btn btn-primary">
              Home
            </Link>
            <br />
            <Link id="btn4" to="/new" className="btn btn-primary">
              Add a Pet to the Shelter
            </Link>
            <br />
          </div>
          <hr />
          <Routes>
            <Route path="/" element={<Main pets={pets} onDeleteHandler={onDeleteHandler}/>} />
            <Route path="/new" element={<New setLoaded={setLoaded} />} />
            <Route path="/pet/:id" element={<Show />} />
            <Route path="/edit/:id" element={<Edit setLoaded={setLoaded} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
