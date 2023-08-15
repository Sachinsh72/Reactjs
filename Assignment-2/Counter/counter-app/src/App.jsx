import { useState } from 'react'
import './App.css'

function App() {
  const[number, setNnumber] = useState(0);

  return (
    <>
    <div className='displayNumber'>
      <h1>{number}</h1>
      <div className='btn'>
        <button onClick={()=> setNnumber(number+1)}>Increment</button>
        <button onClick={()=> setNnumber(number-1)}>Decrement</button>
      </div>
    </div>
    </>
  )
}

export default App;
