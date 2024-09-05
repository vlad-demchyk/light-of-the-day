import './header.css';
import logo from '../background/logo.png'

function Header() {
    return (
    
     <div className="header">
            <a className="logo-luce" href="https://google.com">
                <img src={logo} alt="Logo-company"/>
            </a>
            <menu className="navigation">
                <a href="https://google.com">Portfolio</a>
                <a href="https://google.com">Process</a>
                <a href="https://google.com">Our Team</a>
            </menu>
        </div>
    );
  }
  
  export default Header;
  