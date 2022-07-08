import React, {useState} from 'react';
import Header from './components/Header';
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
  
  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      
    </div>
  );
}

export default App;
