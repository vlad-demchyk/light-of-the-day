import "./MenuComponent.css";

function MenuComponent({state, style, scrollRefs, setMenuOpen}){

  console.log(scrollRefs)

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClick = (event, ref) => {
        event.preventDefault(); // Запобігаємо переходу за посиланням
        scrollToRef(ref);
        setMenuOpen(false)
      };


    return (
      <nav className="menu" style={style}>
          <ul data-visible={state} id="primary-navigation" className="primary-navigation flex">
            <li className="active">
              <a className="text-link-style" href="#" onClick={(event) => handleClick(event, scrollRefs.scrollBoxRef)}>
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-link-style" href="#" onClick={(event) => handleClick(event, scrollRefs.hoverListRef)}>
                Process
              </a>
            </li>
            <li>
              <a className="text-link-style" href="#" onClick={(event) => handleClick(event, scrollRefs.ourTeamRef)}>
                Our Team
              </a>
            </li>
          </ul>
        </nav>
    )
  }

  export default MenuComponent;