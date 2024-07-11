import React,{useState}  from 'react'
import Navbar from '../Components/Navbar'
import About_exp from '../Components/About_exp'
import About_company from '../Components/About_company';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
    <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <About_company isDarkMode={isDarkMode}/>
    <About_exp isDarkMode={isDarkMode}/>
  </div>
  )
}

export default About
