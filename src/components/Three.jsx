// user input

import React, { useState } from 'react'

function Three() {
    const [input, setInput] = useState('')
  return (
    <>
    <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
    <p>User input: {input}</p>
    </>
  )
}

export default Three