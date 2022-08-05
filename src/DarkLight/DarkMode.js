import React, {useState, useEffect} from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const setMode = (mode) => {
        window.localStorage.getItem('theme, mode');
        setTheme(mode)
    }

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, [])

    return [theme, themeToggler]
}