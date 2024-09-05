import './ButtonContactUs.css';

function ButtonContactUs({style}) {
  return (
    <div className="circle-container" style={style}>
      <svg viewBox="0 0 200 200" className="circle-text">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text>
          <textPath href="#circlePath">
            CONTACT US • CONTACT US • CONTACT US • CONTACT US •
          </textPath>
        </text>
      </svg>
      <div className="center-content">
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default ButtonContactUs;