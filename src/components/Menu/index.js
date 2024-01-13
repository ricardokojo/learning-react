import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
    return (
        <header>
            <nav className='menu'>
                <Link className='link' to="/">Início</Link>
                <Link className='link' to="/about">Sobre mim</Link>
            </nav>
        </header>
    );
};
