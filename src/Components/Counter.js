import React from 'react'
import {useState} from 'react'
function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div className='Container'>
        <h1>Counter</h1>
      <div className='para'>
        <p>{count}</p>
      </div>
      <div className='btn-container'>
        <button className='btn' onClick={()=>{
            setCount(count-1);}
            }disabled={count===0} >Decrease</button>
        <button className='btn' onClick={()=>{setCount(0);}}disabled={count===0}>Reset</button>
        <button className='btn' onClick={()=>{setCount(count+1)}}>Increase</button>
      </div>
    </div>
  )
}

export default Counter
