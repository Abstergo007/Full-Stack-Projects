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
        {colorArr.map((colorEle, index) => (
          colorEle !== "Black"? (
            <div className="flex flex-wrap justify-center gap-3 shadow-l px-3 py-2 mx-2 rounded-xl text-black" style={{backgroundColor:colorEle}} onClick={() => bgColorChange(colorEle)}>{colorEle}</div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3 shadow-l px-3 py-2 mx-2 rounded-xl text-white" style={{backgroundColor:colorEle}} onClick={() => bgColorChange(colorEle)}>{colorEle}</div>
          )
          // <Color colorChange={colorEle} bgColor = {bgColorChange} key ={index}/>
        ))}
      </div>
    </div>
  )
}

export default App
