//Timer

import React, { useEffect, useState } from 'react'

function Seven() {

    const [timer, setTimer] = useState(60)

    useEffect(()=>{
        if(timer>0){
            const time = setTimeout(()=> setTimer(timer-1), 1000)
            return ()=> clearTimeout(time)
        }
    },[timer])

  return (
    <div>Time: {timer} second</div>
  )
}

export default Seven