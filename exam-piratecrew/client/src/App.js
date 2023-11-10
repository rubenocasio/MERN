import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Update from "./components/Update";
import Show from "./components/Show";
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/new" element={<Create  props={props}/>}/>
            <Route path="/update/:id" element={<Update />}/>
            <Route path="/pirate/:id" element={<Show />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
