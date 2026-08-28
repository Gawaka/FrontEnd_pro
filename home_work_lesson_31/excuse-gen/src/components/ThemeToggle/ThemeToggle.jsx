import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../ThemeToggle/themeToggle.scss';

function ThemeToggle() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);

    return(
        <button className='theme-toggle' onClick={toggleTheme}>
            {theme === 'theme-light' ? '🌙' : '☀️'}
        </button>
    )
};

export default ThemeToggle