import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper.jsx';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <NavBar />
          <FormWrapper />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
