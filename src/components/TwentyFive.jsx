// App language translate
import React from 'react'
import { useLocal } from './TwentyFiveContext'

function TwentyFive() {

    const {setLocal, local, translate} = useLocal()

    const handleLocal=(newlocal)=>{
        setLocal(newlocal)
    }
  return (
    <div>
        <h1>{translate('greeting')}</h1>
        <h1>{translate('welcome')}</h1>
        <button onClick={()=>handleLocal('en')}>English</button>
        <button onClick={()=>handleLocal('es')}>Espanol</button>
    </div>
  )
}

export default TwentyFive