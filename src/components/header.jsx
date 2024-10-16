import "./header.css";
import logo from "../background/logo.png";
import opened from "../icons/icons8-menu.svg";
import closed from "../icons/icons8-close.svg";
import MenuComponent from "./MenuComponent";
import { useState, useEffect } from "react";

function Header({scrollRefs}) {
  const [isMenuOpened, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const mainBody = document.querySelector(".main_css");
    // Закриття меню при кліку за межами
    const closeMenuOnClickOutside = (event) => {
      if (mainBody.contains(event.target)) {
        setMenuOpen(false); // Закриваємо меню, якщо клік був за межами
      }
    };

    document.addEventListener("click", closeMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside); // Чистимо слухач подій при демонтунні компонента
    };
  }, [isMenuOpened]);

  return (
    <div>
      <div className="header flex">
        <div className="logo-luce" href="#">
          <img src={logo} alt="Logo-company" />
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-controls="primary-navigation"
          style={{ backgroundImage: `url(${isMenuOpened ? closed : opened})` }}
        />

        <MenuComponent
          style={{ paddingRight: "5%" }}
          state={isMenuOpened}
          scrollRefs={scrollRefs}
          setMenuOpen={setMenuOpen}
        />
      </div>
      {/* <SectionTwo setScrollRefs={setScrollRefs} /> */}
    </div>
  );
}

export default Header;
