import "bootstrap/dist/css/bootstrap.min.css";
import Poke from "./components/Poke";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokemon Logo"
        />
      </div>
      <div className="body">
        <Poke />
      </div>
    </div>
  );
}

export default App;
