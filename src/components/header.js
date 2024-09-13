import "./header.css";
import logo from "../background/logo.png";
import {useState} from "react"

const menu = <menu className="navigation">
<a href="https://google.com">Portfolio</a>
<a href="https://google.com">Process</a>
<a href="https://google.com">Our Team</a>
</menu>;



function BurgerMenu(){
  const [menuOpen, setMenuOpen] = useState(false);

  const active = ()=>{

    const offMenu = document.querySelector(".off-screen-menu")
    const mainJSX = document.querySelector(".main_css")  

   if(menuOpen){
    offMenu.classList.remove("active");
    document.body.style.overflow = ""
    mainJSX.style.opacity = '';
    mainJSX.style.pointerEvents = '';
    
  } 
  if (!menuOpen){
    offMenu.classList.add("active");
    document.body.style.overflow ="hidden"
    mainJSX.style.pointerEvents = 'none';
    mainJSX.style.opacity = '0.5';
  }
  setMenuOpen(!menuOpen);
}

  return(
    <>
      <button onClick={active} className="burger material-symbols-outlined">menu</button>
      <div className="off-screen-menu">
        <a href="https://google.com">Portfolio</a>
        <a href="https://google.com">Process</a>
        <a href="https://google.com">Our Team</a>
      </div>
    </>
  )
}


function Header() {

  return (
    <div className="header">
      <a className="logo-luce" href="https://google.com">
        <img src={logo} alt="Logo-company" />
      </a>
        {menu}
        <BurgerMenu/>
    </div>
  );
}

export default Header;
