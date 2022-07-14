import React, {useState} from 'react';
import Header from './components/Header';
// import Project from './components/Project';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import './App.css';


function App() {

  const [categories] = useState([
    { name: "About Me"},
    { name: "Portfolio"},
    { name: "Contact"},
    { name: "Resume"},
  ]);
  console.log(categories, 'app categories')

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  console.log(currentCategory);

  const [contactSelected, setContactSelected] = useState();
  
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
        {!contactSelected ? (
            <>
              <About currentCategory={currentCategory}></About>
            </>
          ) : (
            <Resume></Resume>
        )}
        <ContactForm></ContactForm>
      </main>
      
    </div>
  );
}

export default App;
