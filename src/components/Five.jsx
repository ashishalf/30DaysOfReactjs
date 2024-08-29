// toggle switch

import React, { useState } from 'react'

function Five() {
    const [isToggled, setIsToggled] = useState(false)
  return (
    <div>
        <input type="checkbox" onChange={()=> setIsToggled(!isToggled)} />
        <p>{isToggled ? "On" : "Off"}</p>
    </div>
  )
}

export default Five