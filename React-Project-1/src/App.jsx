import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = (delta) => {
    setCounter(counter+delta)
  }
  const subValue = (delta) => {
    setCounter(counter-delta)
  }
  
  return (
    <>
      <h1>Chai n React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={() => addValue(5)}>Increment by 5</button>
      <button onClick={() => addValue(10)}>Increment by 10</button>
      <button onClick={() => subValue(-5)}>Decrement by 5</button>
    </>
  )
}

export default App
