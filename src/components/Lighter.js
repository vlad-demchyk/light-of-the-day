import './Lighter.css'
import LighterImg from "../background/lighter.png"

function Lighter(){
    return(
        <div className="lighter_Container">
                <div className="lighter_img_box">
                    <img className="lighter_img" src={LighterImg} alt="lighter-image"/>
                </div>
                <div className="title_class_light">
                    <h1 className="sub_main_text"> FROM CONCEPT
                    </h1>
                    <h1 className="sub_main_text2"> TO REALITY
                    </h1>
                </div>
                
            </div>
    )
}

export default Lighter;