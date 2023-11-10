import './App.css'
import PersonCard from './components/PersonCard'
import ArrayOfObjects from './assets/ArrayOfObjects'

function App() {
  const [ruben, wilma, christian, andreis, isabella] = ArrayOfObjects;

  return (
    <>
      <h1>Here are my family members:</h1>
      <PersonCard data={ruben}/>
      <PersonCard data={wilma}/>
      <PersonCard data={christian}/>
      <PersonCard data={andreis}/>
      <PersonCard data={isabella}/>
    </>
  )
}

export default App
