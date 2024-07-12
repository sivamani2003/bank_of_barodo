import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import About_exp from "../Components/About_exp";
import About_company from "../Components/About_company";
import Mission from "../Components/Mission";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="relative" style={{ objectFit: "contain" }}>
        <img
          src="https://images.unsplash.com/photo-1605462979380-48f1ea3b3ff1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: "100vw", height: "40vh" }}
          alt="About"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          About
        </div>
      </div>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <About_company isDarkMode={isDarkMode} />
      <Mission/>
      <About_exp isDarkMode={isDarkMode} />
    </div>
  );
};

export default About;
