import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './header.scss';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                Excuse<span>Gen</span>
            </Link>

            <ul className="nav-links">
                <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Головна
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Про мене
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/contacts" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Контакти
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/register" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Реєстрація
                </NavLink>
                </li>
            </ul>
            <ThemeToggle/>
        </header>
    );
};

export default Header