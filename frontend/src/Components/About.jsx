import React from 'react';
import topImage from '../assets/image1.png'; 
import bottomImage from '../assets/image2.png'; 
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const About = ({isDarkMode}) => {
  return (
    <section className={`text-gray-600 pt-9 body-font ${isDarkMode ? 'text-white bg-gray-800' : 'text-primary'}`}>
      <div className="container px-5 py-6 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden relative">
          <div className="relative w-full md:w-1/2 flex flex-col gap-4">
            <div className="relative">
              <img
                src={topImage}
                alt="Top Image"
                className="w-full h-auto rounded-lg shadow-md sm:w-3/4 md:w-2/3 lg:w-full"
              />
            </div>
            <div className="relative mt-6 hidden sm:block">
              <img
                src={bottomImage}
                alt="Bottom Image"
                className="h-auto rounded-lg shadow-md absolute top-1/2 left-1/4 transform translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className={`text-xl item3 font-extrabold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Learn and clear your doubts
            </div>
            <a className={`mt-2 item2 text-medium ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ display: 'block', marginBottom: '1px' }}>
              Writo believe in the transformative power of education.
            </a>
            <a className={`mt-2 item2 text-medium ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ display: 'block' }}>
              Our mission is to empower learners to achieve their academic and professional 
            </a>
            <a className={`mt-2 item2 text-medium ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ display: 'block' }}>
              goals through innovative, engaging, and accessible online education.
            </a>
          </div>
          <div className="flex flex-col mb-5 lg:items-start items-center">
            <p className={`font-bold flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <IoCheckmarkCircleOutline style={{ fontSize: '30px', color: isDarkMode ? 'white' : 'black' }} className="mr-2 item2" /> IIT JEE and NEET preparations.
            </p>
          </div>
          <div className="flex flex-col mb-5 lg:items-start items-center">
            <p className={`font-bold flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <IoCheckmarkCircleOutline style={{ fontSize: '30px', color: isDarkMode ? 'white' : 'black' }} className="mr-1 item2" /> Online classes from 6th standard to 12th standard.
            </p>
          </div>
          <div className="flex flex-col mb-5 lg:items-start items-center">
            <p className={`font-bold flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <IoCheckmarkCircleOutline style={{ fontSize: '30px', color: isDarkMode ? 'white' : 'black' }} className="mr-1 item2" /> Doubt clearing session 
            </p>
          </div>
          <div className="flex flex-col mb-5 lg:items-start items-center">
            <p className={`font-bold flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <IoCheckmarkCircleOutline style={{ fontSize: '30px', color: isDarkMode ? 'white' : 'black' }} className="mr-1 item2" /> Conduct a problem solving seminar every week.
            </p>
          </div>
          <button className={`flex mr-auto ${isDarkMode ? 'text-black bg-white' : 'text-white bg-black'} border-0 py-2 px-6 focus:outline-none hover:bg-[#ca970b] rounded item3 font-semibold`}>
            Try our Services and Earn
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
