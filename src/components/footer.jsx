import "./footer.css";
import MenuComponent from "./MenuComponent";
import paperForFooter from "../background/paper_for_footer.png";
import logo from "../background/logo.png";

function Footer() {
  return (
    <footer>
      <img className="paper_for_footer" src={`${paperForFooter}`}></img>
      <div className="footer_container">
        <img className="logo_footer" src={logo} />
        <div className="contacts_footer">
          <p>Phone: +1 (555) 123-4567</p>
          <p>Email: info@lucedeldiogiorno.com</p>
          <ul className="social_links">
            <a href="#">Facebook</a>
            <a href="#">Inst</a>
            <a href="#">YouTube</a>
            <a href="#">Twitter</a>
          </ul>
        </div>
        <div className="menu_footer">
        <MenuComponent/>
        </div>
        
        <div className="sub_for_footer">
          <h3>
            Subscribe to our newsletter and receive A
            <span style={{ color: "orange" }}> free</span> consultation.
          </h3>
          <form className="form_footer">
            <input type="text" placeholder="Email Address" />
            <button type="submit">Sing Up</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
