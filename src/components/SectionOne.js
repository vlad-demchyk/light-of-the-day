
import './SectionOne.css';
import '../App.css';
import Header from './header';
import TitleText from './title_text';
import ParagraphSecOne from './ParagraphSecOne'
import ButtonContactUs from './ButtonContactUs'


function SectionOne() {

    const buttonStyle = {
    top: '50%',
    right: '20%',
  };

  return (
    <div className="section_1">
        <Header/>
        <TitleText></TitleText>
        <ParagraphSecOne></ParagraphSecOne>
        <ButtonContactUs style={buttonStyle}/>
     </div>
  );
}

export default SectionOne;
