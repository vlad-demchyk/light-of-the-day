
import './App.css';
import Header from './components/header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from "./components/footer";

function App() {
  return (
  <>
    <Header/>
    <div className="main_css">
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <Footer></Footer>
   </div>
   </>
  );
}

export default App;
