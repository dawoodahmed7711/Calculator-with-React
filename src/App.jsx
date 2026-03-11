import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState("")
  function handlingClick(e)  {
    setData(data + e.target.value);
  }
  function result() {
    setData(eval(data))
  }
  function clear() {
    setData("0")
  }

  return (
    <>
    <div className='h1'>Calculator Using <br/>React</div>
   <div className='container'>
   <input className='input'  value={data}></input>
   <div className='buttons'>
   <div className='que1'>
    <button value="1" onClick={handlingClick}>1</button>
     <button  value="2" onClick={handlingClick}>2</button>
      <button value="3" onClick={handlingClick}>3</button>
       <button value="+" onClick={handlingClick}>+</button>
   </div>
    <div className='que2'>
    <button value="4" onClick={handlingClick}>4</button>
     <button value="5" onClick={handlingClick}>5</button>
      <button  value="6" onClick={handlingClick}>6</button>
       <button value="-" onClick={handlingClick}>-</button>
   </div>
    <div className='que3'>
    <button value="7" onClick={handlingClick}>7</button>
     <button value="8" onClick={handlingClick}>8</button>
      <button value="9" onClick={handlingClick}>9</button>
       <button value="*" onClick={handlingClick}>*</button>
   </div>
    <div className='que4'>
    <button value="0" onClick={handlingClick}>0</button>
     <button  onClick={clear}>C</button>
      <button onClick={result}>=</button>
       <button value="/"  onClick={handlingClick}>/</button>
   </div>
   </div>
   </div>
    </>
  )
}

export default App
