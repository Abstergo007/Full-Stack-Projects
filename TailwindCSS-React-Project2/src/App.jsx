import './App.css'
import Card from './Components/Card.jsx'

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test!</h1>
      <Card userName = "Arkoprabho" userDesignation = "Analyst"/>
      <br />
      <Card userName = "Tanishq" userDesignation = "Consultant"/>
      <br />
      <Card username = "user3"/>
    </>
  )
}

export default App
