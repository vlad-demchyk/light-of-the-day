import "./MenuComponent.css";

function MenuComponent({state, style, scrollRefs}){

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return (
      <nav className="menu" style={style}>
          <ul data-visible={state} id="primary-navigation" className="primary-navigation flex">
            <li className="active">
              <a className="text-link-style" href="#" onClick={() => scrollToRef(scrollRefs.scrollBoxRef)}>
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-link-style" href="#" onClick={() => scrollToRef(scrollRefs.hoverListRef)}>
                Process
              </a>
            </li>
            <li>
              <a className="text-link-style" href="#" onClick={() => scrollToRef(scrollRefs.ourTeamRef)}>
                Our Team
              </a>
            </li>
          </ul>
        </nav>
    )
  }

  export default MenuComponent;