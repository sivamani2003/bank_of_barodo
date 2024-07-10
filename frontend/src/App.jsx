import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Services from './Components/Services'
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Services isDarkMode={isDarkMode} />
    </div>)
    
}

export default App
