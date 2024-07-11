import React,{useState} from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Services_overview from '../Components/Services_overview';
const Services = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
    return (
      <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Services_overview isDarkMode={isDarkMode}/>
     <Footer/>
    </div>
    )
   
}

export default Services
