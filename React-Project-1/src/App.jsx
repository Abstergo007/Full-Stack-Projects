import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter+1)
  }
  const subValue = () => {
    setCounter(counter-1)
  }
  
  return (
    <>
      <h1>Chai n React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={subValue}>Remove Value</button>
    </>
  )
}

export default App
