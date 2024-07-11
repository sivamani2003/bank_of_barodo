import React from 'react';
import img from '../assets/image3.png';
import Footer from './Footer';
import img2 from '../assets/icon-1.png';
import { MdEditDocument } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";

const About_exp = ({ isDarkMode }) => {
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const paragraphColor = isDarkMode ? 'text-gray-300' : 'text-gray-500';

  return (
    <div>
      <section className={`relative text-gray-600 body-font overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-[#f9f9f9]'}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-auto object-cover object-center rounded" src={img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className={`text-4xl font-extrabold tracking-widest ${textColor}`}>We Are Different</h2>
            <div className="flex mt-7">
              <img src={img2} alt="" /><span className={`ml-10 mt-2 text-xl font-bold ${textColor}`}>Economic Scale</span>
            </div>
            <p className={`ml-20 ${paragraphColor}`}>When you buy shares you have to pay dealing costs and admin fees, which can eat away at the value of your investment.</p>
            <div className="flex mt-10 items-center">
              <div className="flex ml-2">
                <MdEditDocument size={40} className='text-[#ca970b]' /><span className={`ml-8 text-lg font-bold ${textColor}`}>
                  A Way to Spread Your Risk</span>
              </div>
            </div>
            <p className={`ml-20 ${paragraphColor}`}>Buying shares in only one investment company effectively gives you a diversified portfolio.</p>
            <div className="flex mt-14">
              <HiCurrencyDollar className="ml-2 text-[#ca970b]" size={40} /><span className={`ml-8 text-lg font-bold ${textColor}`}>Manager’s Expertise</span>
            </div>
            <p className={`ml-20 ${paragraphColor}`}>Each investment company uses professional management expertise.</p>
          </div>
        </div>
      </div>
      
    </section>
    <Footer className=" " />
    </div>
  );
}

export default About_exp;
