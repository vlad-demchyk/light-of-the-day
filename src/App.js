
import './App.css';
import Header from './components/header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
  <>
    <Header/>
    <div className="main_css">
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
   </div>
   </>
  );
}

export default App;
