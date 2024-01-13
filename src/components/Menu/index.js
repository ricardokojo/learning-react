import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
    return (
        <header>
            <nav className='menu'>
                <NavLink
                    className={({ isActive }) => `link ${isActive ? 'selected' : ''}`}
                    to="/"
                >
                    Início
                </NavLink>
                <NavLink
                    className={({ isActive }) => `link ${isActive ? 'selected' : ''}`}
                    to="/about"
                >
                    Sobre mim
                </NavLink>
            </nav>
        </header>
    );
};
