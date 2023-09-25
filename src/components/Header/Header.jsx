import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    const [activeNav, setActiveNav] = useState(['#home', '']);
    const [previousEvent, setPreviousEvent] = useState('');
    const [toggle, showMenu] = useState(false)

    useEffect(() => {
        if (previousEvent) {
            previousEvent.target.style.color = 'black';
        }
        if (activeNav[1]) {
            activeNav[1].target.style.color = 'grey';
            setPreviousEvent(activeNav[1]);
        }
    }, [activeNav])

    //change background header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 30 viewport height, add the scroll__header class to a tag with the header class
        if (window.scrollY >= 30) header.classList.add("scroll__header")
        else header.classList.remove("scroll__header")
    })

    return (
        <header className='header'>
            <nav className="nav__container container">
                <a href="index.html" className='header__logo'>
                    <span className='nav__logo'>#Brandon</span>
                    <span className='nav__logo surname'>TEE</span>
                </a>

                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={(e) => {showMenu(!toggle); setActiveNav(['#home', e])}}>
                                <i className="nav__icon">Home</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={(e) => {showMenu(!toggle); setActiveNav(['#about', e])}}>
                                <i className="nav__icon">About</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={(e) => {showMenu(!toggle); setActiveNav(['#skills', e])}}>
                                <i className="nav__icon">Skills</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link" onClick={(e) => {showMenu(!toggle); setActiveNav(['#qualification', e])}}>
                                <i className="nav__icon">Qualification</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" onClick={(e) => {showMenu(!toggle); setActiveNav(['#portfolio', e])}}>
                                <i className="nav__icon">Portfolio</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={(e) => {showMenu(!toggle); setActiveNav(['#contact', e])}}>
                                <i className="nav__icon">Contact</i>
                            </a>
                        </li>
                    </ul>
                    <i className="uil nav__close" onClick={() => showMenu(!toggle)}>X</i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="toggle__button">ooo</i>
                </div>
            </nav>
        </header>
    )
}

export default Header