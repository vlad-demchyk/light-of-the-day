import './Lighter.css'
import LighterImg from "../background/lighter.png"

function Lighter(){
    return(
        <div className="lighter_Container">
                <img className="lighter_img" src={LighterImg} alt="lighter-image"/>
                <h1 className="sub_main_text"> FROM CONCEPT
                </h1>
                <h1 className="sub_main_text2"> TO REALITY
                </h1>
            </div>
    )
}

export default Lighter;