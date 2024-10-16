
import './SectionOne.css';
import '../App.css';
import TitleText from './title_text';
// import ParagraphSecOne from './ParagraphSecOne'
import ButtonContactUs from './ButtonContactUs'
import newsPaper from '../background/news-paper.png'


function SectionOne({scrollRefs}) {


  return (
    <div className="section_1">
        <TitleText></TitleText>
        <ButtonContactUs scrollRefs={scrollRefs} props={"for_sec_one"}/>
        <img className='news-paper no-interaction' src={newsPaper} alt='connectOfSection'/>
     </div>
  );
}

export default SectionOne;
