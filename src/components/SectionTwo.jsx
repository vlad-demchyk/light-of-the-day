import ButtonContactUs from "./ButtonContactUs";
import HoverList from "./HoverList";
import Lighter from "./Lighter";
import OurTeam from "./OurTeam";
import ScrollBox from "./ScrollBox";
import Form from "./copy.form";
import "./SectionTwo.css";
import { useEffect, useRef } from "react";

const contactElements = [
  "Contact Us",
  "Your questions and comments are important to us. We are ready to listen and collaborate with you.",
  "Let's achieve your goal in creating incredible designs!",
];

const { since, mainText, subText } = {
  since: "SINCE 2016",
  mainText:
    "AT LUCE DEL GIORNO, WE BELIEVE THAT LIGHT PLAYS A CRUCIAL ROLE IN CREATING AN EXTRAORDINARY INTERIOR ATMOSPHERE.",
  subText:
    "Each of our projects is a unique blend of individual preferences and creative approach.",
};

const counter = [
  [400, "Completed Projects"],
  [18, "International Awards"],
  [76, "Permanent Clients"],
  [8, "Years of Experience"],
];

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

function ContactTitle({scrollRefs}) {
  return (
    <div className="contact_container">
      <p>{contactElements[0].toLocaleUpperCase()}</p>
      <p>{contactElements[1].toLocaleUpperCase()}</p>
      <p>{contactElements[2].toLocaleUpperCase()}</p>
      <ButtonContactUs scrollRefs={scrollRefs} props={"for_sec_two"} />
    </div>
  );
}

function SectionTwo({setScrollRefs, scrollRefs}) {

  const hoverListRef = useRef(null);
  const scrollBoxRef = useRef(null);
  const ourTeamRef = useRef(null);
  const contactUsRef = useRef(null);


  useEffect(() => {
      setScrollRefs({
        hoverListRef,
        scrollBoxRef,
        ourTeamRef,
        contactUsRef,
      });
  }, [setScrollRefs]);



  return (
    <div className="section_2">
      <div className="full">
        <div className="achievements">
          <div className="description">
            <p>{since}</p>
            <p>{mainText}</p>
            <p>{subText}</p>
          </div>
          <Counter array={counter}></Counter>
        </div>
      </div>
      <Lighter />
      <div ref={hoverListRef}><HoverList/></div>
      <div ref={scrollBoxRef}><ScrollBox/></div>
      <ContactTitle scrollRefs={scrollRefs}/>
      <div ref={ourTeamRef}><OurTeam/></div>
      <div ref={contactUsRef}><Form/></div>
    </div>
  );
}

export default SectionTwo;







