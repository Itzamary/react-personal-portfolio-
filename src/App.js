import React, {useState} from 'react';
import Header from './components/Header';
import Project from './components/Project';
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
  
  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        <Project currentCategory={currentCategory}></Project>

      </main>
      
    </div>
  );
}

export default App;
