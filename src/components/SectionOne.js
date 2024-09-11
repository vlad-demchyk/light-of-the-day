
import './SectionOne.css';
import '../App.css';
import Header from './header';
import TitleText from './title_text';
// import ParagraphSecOne from './ParagraphSecOne'
import ButtonContactUs from './ButtonContactUs'


function SectionOne() {


  return (
    <div className="section_1">
        <Header/>
        <TitleText></TitleText>
        {/*<ParagraphSecOne></ParagraphSecOne>*/}
        <ButtonContactUs props={"for_sec_one"}/>
     </div>
  );
}

export default SectionOne;
