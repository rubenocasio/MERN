import { BrowserRouter,  Routes,  Route } from "react-router-dom";
import Main from "./views/Main";
import Details from "./components/Details"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/api/products/:id/" element={<Details />} />
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
