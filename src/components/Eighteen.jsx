// Switch Theme
import React from 'react'
import {useTheme} from './EighteenContext'

function Eighteen() {
    const {isDarkMode, toggleTheme} = useTheme()
  return (
    <div>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        Dark Mode
    </div>
  )
}

export default Eighteen