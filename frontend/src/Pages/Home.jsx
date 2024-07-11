import React,{useState}  from 'react'
import Navbar from "../Components/Navbar";
import { Carousel } from "../Components/Carousel";
import { slides } from "../data/carouselData.json";
import About from "../Components/About";
import Services from "../Components/Services";
import Footer from '../Components/Footer';
import Mission from '../Components/Mission';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Carousel data={slides} />
      <About isDarkMode={isDarkMode}/>
      <Services isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode}/>
      <Mission></Mission>
      
    </div>
  )
}

export default Home
