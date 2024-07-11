import React from 'react';
import img1 from '../assets/image4.png'
import img2 from '../assets/image5.png'
import img3 from '../assets/image6.png'
const ServicesOverview = ({isDarkMode}) => {
  return (
    <div className={` mx-auto p-5 sm:p-10 md:p-16 ${isDarkMode?'bg-gray-800 text-white':'bg-white text-black'}`}>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Services Overview</h2>
        <p className="mt-4 text-lg">
          We offer a comprehensive portfolio management, IRA, annuity, non-retirement, and other investment accounts and manage a portfolio designed to meet your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className={`${isDarkMode?'bg-gray-800 text-white':'bg-white text-black'} rounded-lg p-6`}>
          <img
            src={img1}
            alt="Account Management"
            className="w-full mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">Account Management</h3>
          <p className={`${isDarkMode?'text-white':'text-black'}`}>
            Because we recognize that saving and investing for retirement is so important, we have made a special commitment to retirement investors. We will help you make the most of your plan to achieve your retirement savings.
          </p>
        </div>
        <div className={`${isDarkMode?'bg-gray-800 text-white':'bg-white text-black'} rounded-lg p-6`}>
          <img
            src={img2}
            alt="Rollover IRA"
            className="w-full mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">Rollover IRA</h3>
          <p className={`${isDarkMode?'text-white':'text-black'}`}>
            When you rollover retirement plan assets to an IRA managed by our Investment Company, we'll implement an optimal investment strategy to suit your individual needs and help ensure you enjoy a satisfying retirement.
          </p>
        </div>
        <div className={`${isDarkMode?'bg-gray-800 text-white':'bg-white text-black'} rounded-lg p-6`}>
          <img
            src={img3}
            alt="Other Services"
            className="w-full mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">Other Services</h3>
          <p className={`${isDarkMode?'text-white':'text-black'}`}>
            Our Investment Company's primary focus is investment management, retirement planning, and financial planning. However, our goal is to be able to advise, counsel, and offer solutions for all of our clients' financial service needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
