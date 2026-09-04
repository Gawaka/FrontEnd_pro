import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(()=> {
        return localStorage.getItem('app-theme') || 'theme-light';
    });

    const toggleTheme = ()=> {
        setTheme((prevTheme)=> (prevTheme === 'theme-light' ? 'theme-dark' : 'theme-light'));
    };

    useEffect(()=> {
        document.body.className = theme;
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};