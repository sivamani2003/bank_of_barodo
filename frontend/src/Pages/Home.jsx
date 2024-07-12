import React,{useState}  from 'react'
import Navbar from "../Components/Navbar";
import { Carousel } from "../Components/Carousel";
import { slides } from "../data/carouselData.json";
import About from "../Components/About";
import Services from "../Components/Services";
import Footer from '../Components/Footer';
import Mission from '../Components/Mission';
import Team from '../Components/Team';

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
      <Mission></Mission>
      <Services isDarkMode={isDarkMode} />
      <Team/>
      <Footer isDarkMode={isDarkMode}/>
      
      
    </div>
  )
}

export default Home
