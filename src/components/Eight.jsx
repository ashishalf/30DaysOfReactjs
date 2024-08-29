//Background Change

import React, { useState } from 'react'

function Eight() {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const handleColor =()=>{
        const bg = backgroundColor === 'white' ? 'red' : 'blue'
        setBackgroundColor(bg)
    }
  return (
    <div onClick={handleColor} style={{
        backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
    }}>Click to change color</div>
  )
}

export default Eight