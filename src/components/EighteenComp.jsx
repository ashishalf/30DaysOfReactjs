import React from 'react'
import {useTheme} from './EighteenContext'
import './styles/styleDarkmode.css'


function EighteenComp() {
    const {isDarkMode} = useTheme()
    const themeClass = isDarkMode?'dark-theme':'light-theme'
  return (
    <div className={`container ${themeClass}`}>
        <p>Dark mode Selected</p>
    </div>
  )
}

export default EighteenComp