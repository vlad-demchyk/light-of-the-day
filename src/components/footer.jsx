import "./footer.css";
import MenuComponent from "./MenuComponent";
import paperForFooter from "../background/paper_for_footer.png";
import logo from "../background/logo.png";
import facebookIcon from "../icons/fb.png";
import instIcon from "../icons/inst.png";
import linkedIcon from "../icons/in.png";
import youtubeIcon from "../icons/youtube.png";

function Footer({ scrollRefs }) {
  return (
    <>
      {/* <img className="paper_for_footer" src={`${paperForFooter}`}></img> */}
      <footer className="footer_container">
        <div className="content_inside">
          <img className="logo_footer" src={logo} />
          <div className="contacts_footer">
            <ul>
              <a
                className="text-link-style phone-footer"
                href="tel:+15551234567"
              >
                {" "}
                +1 (555) 123-4567
              </a>{" "}
              <br />
              <a
                className="text-link-style mail-footer"
                href="mailto:info@lucedeldiogiorno.com"
              >
                {" "}
                info@lucedeldiogiorno.com
              </a>
            </ul>
            <ul className="social_links">
              <a href="#">
                <img src={facebookIcon} alt="facebook" />
              </a>
              <a href="#">
                <img src={instIcon} alt="instagram" />
              </a>
              <a href="#">
                <img src={youtubeIcon} alt="Youtube" />
              </a>
              <a href="#">
                <img src={linkedIcon} alt="linkedIn" />
              </a>
            </ul>
          </div>
          <div className="menu_footer">
            <MenuComponent scrollRefs={scrollRefs} />
          </div>

          <div className="sub_for_footer">
            <h3 className="text_for_submit">
              SUBSCRIBE TO OUR NEWSLETTER AND RECEIVE A
              <span style={{ color: "#F34C06" }}> FREE </span>
              CONSULTATION.
            </h3>
            <form className="form_footer">
              <input type="email" placeholder="Email Address" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="footer-links">
            <ul className="privacy_policy">
              <a className="text-link-style" href="#">
                Terms of Use
              </a>
              <a className="text-link-style" href="#">
                Privacy Policy
              </a>
            </ul>
              <p>Luce del giorno. All rights reserved.</p>
            <ul className="authors">
              Made by
               {" "} 
              <a className="text-link-style" href="#">
                Vladyslav Demchyk
              </a>
              {" "} 
              &
              {" "} 
              <a className="text-link-style" href="#">
                Daria Shulenko
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
