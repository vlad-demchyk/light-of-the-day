import "./footer.css";
import backgroundImage from "../background/background_footer.png"
import paperForFooter from "../background/paper_for_footer.png"


function Footer(){
    return( 
        <footer>
            {/* <img className="background_footer" src={`${backgroundImage}`}>
            </img> */}
            <img className="paper_for_footer" src={`${paperForFooter}`}>
            </img>
            <div className="footer_container">
                    <img className="logo_footer"/>
                    <div className="contacts_footer"></div>
                    <nav className="menu-footer"></nav> 
                    <div className="sub_for_footer"></div>
            </div>
        </footer>
    )
}

export default Footer;