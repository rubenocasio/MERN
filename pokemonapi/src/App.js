import Pokemon from './components/pokemon';
import './App.css';

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
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
