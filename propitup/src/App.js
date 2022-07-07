import './App.css';

import People from './components/People.jsx'
const App = () => {
  return (
      <div className="container">
          <h1>Hello, Master!</h1>
          <People firstName={"Ruben"} lastName={"Ocasio"} age={21} hairColor={"Black"}/>
          <People firstName={"Tai"} lastName={"Ocasio"} age={22} hairColor={"Brown"}/>
          <People firstName={"Christian"} lastName={"Ocasio"} age={31} hairColor={"Black"}/>
          <People firstName={"Dre"} lastName={"Ocasio"} age={28} hairColor={"Black"}/>
          <People firstName={"Isabella"} lastname={"Ocasio"} age={24} hairColor={"Black"}/>
      </div>
  );
}

export default App;
