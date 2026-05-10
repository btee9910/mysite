import { useState, useEffect } from "react";
import "./Header.css";

const NAV_ITEMS = [
  { href: "#about", label: "About", icon: "./about.svg" },
  { href: "#skills", label: "Skills", icon: "./skills.svg" },
  { href: "#qualification", label: "Qualification", icon: "./qualification.svg" },
  { href: "#portfolio", label: "Portfolio", icon: "./portfolio.svg" },
  { href: "#contact", label: "Contact", icon: "./contact.svg" },
];

const Header = () => {
  const [activeHash, setActiveHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (!header) return;
      if (window.scrollY >= 30) header.classList.add("scroll__header");
      else header.classList.remove("scroll__header");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveHash(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav__container container">
        <a
          href="index.html"
          className="header__logo link-underline link-underline-opacity-0"
        >
          <span className="nav__logo">#Brandon</span>
          <span className="nav__logo surname">TEE</span>
        </a>

        <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {NAV_ITEMS.map(({ href, label, icon }) => (
              <li className="nav__item" key={href}>
                <a
                  href={href}
                  className={
                    "nav__link" +
                    (activeHash === href ? " nav__link--active" : "")
                  }
                  onClick={() => handleNavClick(href)}
                >
                  <i className="nav__icon">
                    <div className="nav__icon__block">
                      <img
                        src={icon}
                        alt={label.toLowerCase() + " icon"}
                        className="nav__icon__img"
                      />
                    </div>
                    <div>{label}</div>
                  </i>
                </a>
              </li>
            ))}
          </ul>
          <i className="uil nav__close" onClick={() => setIsMenuOpen(false)}>
            <img src="./hide.svg" alt="hide icon" />
          </i>
        </div>
        <div
          className="nav__toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <i className="toggle__button">
            <img src="./menu.svg" alt="menu icon" />
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
