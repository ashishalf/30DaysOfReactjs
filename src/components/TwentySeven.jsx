//Multiple states in One State
import React, { useState } from 'react'

function TwentySeven() {
    const [state, setState] = useState({
        count:0, 
        text:"Hello World",
        active: true
    })

    const counting=()=>{
        setState({...state, count:state.count+1})
    }

    const textUpdate=()=>{
        setState({...state, text: state.text = 'Ashish'})
    }

    const active=()=>{
        setState({...state, active:state.active = !state.active })
    }

  return (
    <div>
        <h1>Count:{state.count}</h1>
        <h1>Text:{state.text}</h1>
        <h1>Active:{state.active ? 'No' : 'Yes'}</h1>
        <button onClick={counting}>Count</button>
        <button onClick={textUpdate}>Text Change</button>
        <button onClick={active}>Toggle</button>
    </div>
  )
}

export default TwentySeven