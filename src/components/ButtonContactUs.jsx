import './ButtonContactUs.css';

function ButtonContactUs({ props, scrollRefs }) {
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (event) => {
    event.preventDefault(); // Запобігаємо переходу за посиланням
    scrollToRef(scrollRefs.contactUsRef);
  };
  return (
    
    <a href='#' onClick={handleClick} className={`circle-container ${props}`}>
      <span className='pseudo_el'></span>
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
    </a>
  );
}

export default ButtonContactUs;