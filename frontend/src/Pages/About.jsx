import React,{useState}  from 'react'
import Navbar from '../Components/Navbar'
import About_exp from '../Components/About_exp'

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
    <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <About_exp isDarkMode={isDarkMode}/>
  </div>
  )
}

export default About
