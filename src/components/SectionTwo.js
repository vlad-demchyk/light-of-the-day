import './SectionTwo.css'
import Lighter from './Lighter';
import HoverList from './HoverList';
import ScrollBox from './ScrollBox';

const {since,mainText,subText} = {
    since: 'SINCE 2016',
    mainText: 'AT LUCE DEL GIORNO, WE BELIEVE THAT LIGHT PLAYS A CRUCIAL ROLE IN CREATING AN EXTRAORDINARY INTERIOR ATMOSPHERE.',
    subText: 'Each of our projects is a unique blend of individual preferences and creative approach.',
}

const counter = [
    [400, 'Completed Projects'],
    [18, 'International Awards'],
    [76, 'Permanent Clients'],
    [8, 'Years of Experience'],
]

function Counter({ array }) {
    return (
        <div className="counter">
            {array.map((items, index) => (
                <div className={`box-${index}`} key={index}>
                    {items.map((item, subIndex) => (
                        <p key={subIndex}>{item}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}


function SectionTwo(){
    return (
        <div className="section_2">
            <div className='full'>
            <div className='achievements'>
                <div className='description'>
                    <p>{since}</p>
                    <p>{mainText}</p>
                    <p>{subText}</p>
                </div>
                <Counter array={counter}></Counter>
            </div>
            </div>
            <Lighter></Lighter>
            <HoverList></HoverList>
            <ScrollBox></ScrollBox>
    
        </div>
      );
}

export default SectionTwo;