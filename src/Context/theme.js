import React from 'react';

export const themes = {
    light : {
        color: 'black',
        background: 'white'
    },
    dark: {
        color: 'white',
        background: '#1B1B1B',
        section: {
            background: '#2D2D2D'
        }
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    onThemeToggle: () => { }
})