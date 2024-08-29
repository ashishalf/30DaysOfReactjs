//Counter

import React, { useState } from 'react'

function Two() {
    const [count, setCount] = useState(0);

    const handleCountInc = () =>{
        return setCount(count+1)
    }

    const handleCountDec = () =>{
        return setCount(count-1)
    }

  return (
    <div>
        <button onClick={handleCountInc}>Increment</button>
        <h1>Count: {count}</h1>
        <button onClick={handleCountDec}>Decrement</button>
    </div>
  )
}

export default Two