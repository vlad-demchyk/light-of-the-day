import ButtonContactUs from "./ButtonContactUs";
import HoverList from "./HoverList";
import Lighter from "./Lighter";
import OurTeam from "./OurTeam";
import ScrollBox from "./ScrollBox";
import Form from "./Form";
import "./SectionTwo.css";

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

function ContactTitle() {
  return (
    <div className="contact_container">
      <p>{contactElements[0].toLocaleUpperCase()}</p>
      <p>{contactElements[1].toLocaleUpperCase()}</p>
      <p>{contactElements[2].toLocaleUpperCase()}</p>
      <ButtonContactUs props={"for_sec_two"} />
    </div>
  );
}

function SectionTwo() {
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
      <HoverList />
      <ScrollBox />
      <ContactTitle></ContactTitle>
      <OurTeam />
      <Form/>
    </div>
  );
}

export default SectionTwo;







