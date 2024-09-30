import "./header.css";
import logo from "../background/logo.png";
import opened from "../icons/icons8-menu.svg";
import closed from "../icons/icons8-close.svg";
import { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
}


useEffect(() => {
  const burger = document.querySelector('.mobile-nav-toggle');
  const mainBody = document.querySelector('.main_css');
  if (menuOpen) {
    burger.style.backgroundImage = `url(${closed})`; // Меню відкрите, показати іконку закриття
    // mainBody.style.pointerEvents = "none"

  } else {
    burger.style.backgroundImage = `url(${opened})`; // Меню закрите, показати іконку відкриття
  }

  // Закриття меню при кліку за межами
  const closeMenuOnClickOutside = (event) => {
    if (mainBody.contains(event.target)) {

      setMenuOpen(false); // Закриваємо меню, якщо клік був за межами
    }
  };

  document.addEventListener('click', closeMenuOnClickOutside);

  return () => {
    document.removeEventListener('click', closeMenuOnClickOutside); // Чистимо слухач подій при демонтунні компонента
  };
}, [menuOpen]);

  return (
    <div className="header flex">
      <div className="logo-luce" href="https://google.com">
        <img src={logo} alt="Logo-company" />
      </div>

      <button 
      className='mobile-nav-toggle'
      onClick={toggleMenu}
      aria-controls="primary-navigation"
      />

      <nav className="menu">
        <ul data-visible={menuOpen} id="primary-navigation" className="primary-navigation flex">
          <li className="active">
            <a className="text-link-style" href="google.com">
              Portfolio
            </a>
          </li>
          <li>
            <a className="text-link-style" href="google.com">
              Process
            </a>
          </li>
          <li>
            <a className="text-link-style" href="google.com">
              Our Team
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
