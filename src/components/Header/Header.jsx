import { useState } from 'react'
import './Header.css'

const Header = () => {
    // const [activeNav, setActiveNav] = useState('#home');

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html">
                    <span className='nav__logo'>#Brandon</span>
                    <span className='nav__logo surname'>TEE</span>
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil- nav__icon">Home</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil- nav__icon">About</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil- nav__icon">Skills</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil- nav__icon">Portfolio</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil- nav__icon">Contact</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header