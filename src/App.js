
import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import newsPaper from './background/news-paper.png'

function App() {
  return (
   <div className="main_css">
      <SectionOne></SectionOne>
      <img className='news-paper no-interaction' src={newsPaper} alt='connectOfSection'/>
      <SectionTwo></SectionTwo>

   </div>
  );
}

export default App;
