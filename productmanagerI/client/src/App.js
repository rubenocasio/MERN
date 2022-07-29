import Products from "./components/Products"
import Main from "./views/Main"
import './App.css';

function App() {
  return (
    <div className="App">
      <Products />
      <Main path="products/" />
    </div>
  );
}

export default App;
