import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) =>{
    const [isDarkMode, setDarkMode] = useState(false)
    const toggleTheme = () =>{
        setDarkMode((preMode)=>!preMode)
    }
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme =()=>{
    return useContext(ThemeContext)
}

export { useTheme, ThemeProvider}