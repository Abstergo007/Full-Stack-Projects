import { useState } from 'react'
import Color from "./components/Color.jsx"

function App() {
  const [color, setColor] = useState("olive")
  const colorArr = ["Red","Green","Blue","Olive","Gray","Yellow","Pink","Purple","Lavender","White","Black"];
  const bgColorChange = (delta) => {
    setColor(prevCounter => delta);
  }
  return (
    <div className="w-screen h-screen" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-1">
        <div className="flex flex-wrap justify-center gap-3 shadow-l px-3 py-2 bg-white rounded-3xl">
          {colorArr.map((colorEle, index) => (
            !["White", "Lavender","Yellow"].includes(colorEle)  ? (
            <button onClick={() => bgColorChange(colorEle)} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:colorEle}}>
              {colorEle}
            </button>) : (
            <button onClick={() => bgColorChange(colorEle)} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:colorEle}}>
              {colorEle}
            </button>) 
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default App
