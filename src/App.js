import React, {useState} from 'react';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import ghIcon from './assets/footer-icons/github.png';
import linkedInIcon from './assets/footer-icons/linkedin.png';
import indeedIcon from './assets/footer-icons/indeed.png';



function App() {

  const [categories] = useState([
    { name: "About Me"},
    { name: "Portfolio"},
    { name: "Contact"},
    { name: "Resume"},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  console.log(currentCategory.name, 'currentCategoryApp');

  const [contactSelected, setContactSelected] = useState(false);
  
  function renderCategory(cat) {
    switch (cat) {
      case "About Me": 
        return <About></About>;

      case  "Portfolio": 
        return <Project currentCategory={currentCategory}></Project>;

      case  "Contact": 
        return <ContactForm></ContactForm>;

      case  "Resume": 
        return <Resume></Resume>;
       
      default : 
        return <About></About>
    }

  }
  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        <h2>{currentCategory.name}</h2>
        {renderCategory(currentCategory.name)}

      </main>
      <footer>
        <a href='https://github.com/Itzamary'><img src={ghIcon} alt="gihub icon"></img></a>
        <a href='https://www.linkedin.com/in/itzamary-jimenez1394/?trk=public-profile-join-page'><img src={linkedInIcon} alt="linked in icon"></img></a>
        <a href='https://my.indeed.com/p/itzamaryj-qvdj2bk'><img src={indeedIcon} alt="indeed icon"></img></a>
      </footer>
      
    </div>
  );
}

export default App;
