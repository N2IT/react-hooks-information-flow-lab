import React from 'react'


function Header({ modeToggle, isDarkMode }) {
    

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={modeToggle}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header