
import './App.css';
import Header from './components/header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from "./components/footer";
import { useState } from 'react';

function App() {
  const [scrollRefs, setScrollRefs] = useState({});
  return (
  <>
    <Header scrollRefs={scrollRefs}/>
    <div className="main_css">
      <SectionOne scrollRefs={scrollRefs}></SectionOne>
      <SectionTwo setScrollRefs={setScrollRefs} scrollRefs={scrollRefs} ></SectionTwo>
      <Footer></Footer>
   </div>
   </>
  );
}

export default App;
