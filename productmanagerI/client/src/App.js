import { BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
// import Main from "./views/Main";
// import Details from "./components/Details"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Products />
        {/* <Main path="products/" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/api/products/:id" element={<Details />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
