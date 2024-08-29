// Counter APP Using useReducer
import React from 'react'
import { useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {
                count:state.count+1
            }
            case 'DECREMENT':
            return {
                count:state.count-1
            }
            case 'RESET':
            return {
                count:0
            }
    }
}

function Twenty() {

    const [state, dispatch] = useReducer(reducer, {count:0})

  return (
    <div>
        <h1>Counter App</h1>
        <h2>Count: {state.count} </h2>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>+</button>
        <button onClick={()=> dispatch({type:'DECREMENT'})}>-</button>
        <button onClick={()=> dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default Twenty