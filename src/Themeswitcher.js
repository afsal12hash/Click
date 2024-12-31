import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Themeswitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
            <h1>Theme Switcher App</h1>
            <button onClick={toggleTheme}> Toggle Theme</button>
            <p>Your Current Theme Is : {theme}</p>
        </div>
    )
}

export default Themeswitcher