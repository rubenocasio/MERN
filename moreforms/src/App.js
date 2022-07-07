import logo from './logo.svg';
import './App.css';
import MoreForm from './components/MoreForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MoreForm />
      </header>
    </div>
  );
}

export default App;
