import PersonCard from './components/PersonCard'
import './App.css'

function App() {

  return (
    <>
      <PersonCard fn={"Ruben"} ln={"Ocasio"} age={21} hc={"Black"}/>
      <PersonCard fn={"Tai"} ln={"Ocasio"} age={22} hc={"Brown"}/>
      <PersonCard fn={"Christian"} ln={"Ocasio"} age={31} hc={"Black"}/>
      <PersonCard fn={"Dre"} ln={"Ocasio"} age={28} hc={"Black"}/>
      <PersonCard fn={"Isabella"} ln={"Ocasio"} age={24} hc={"Black"}/>
    </>
  )
}

export default App
