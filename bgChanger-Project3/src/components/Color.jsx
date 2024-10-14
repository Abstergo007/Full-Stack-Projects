function Color({colorEle, bgColorChange}){
    return (
        colorEle !== "Black"? (
            <div className="flex flex-wrap justify-center gap-3 shadow-l px-3 py-2 mx-2 rounded-xl text-black" style={{backgroundColor:colorEle}} onClick={() => bgColorChange(colorEle)}>{colorEle}</div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3 shadow-l px-3 py-2 mx-2 rounded-xl text-white" style={{backgroundColor:colorEle}} onClick={() => bgColorChange(colorEle)}>{colorEle}</div>
          )
    )
 }

export default Color