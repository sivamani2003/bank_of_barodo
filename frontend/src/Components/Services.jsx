import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";

const Services = ({ isDarkMode }) => {
  return (
    <div className={`${isDarkMode?'text-white bg-gray-800' : 'text-primary'}`}>
        <section className={`pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] items-center lg:ml-20 sm:mr-10`} >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className={`font-semibold text-xl mb-2 block`}>
                Our Services
              </span>
              <h2
                className={`
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  mb-4
                  ${isDarkMode ? 'text-white' : 'text-dark'}
                `}
              >
                What We Offer
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className={` p-10
                md:px-7
                xl:px-10
                rounded-[20px]
                bg-gray-800
                shadow-md
                hover:shadow-lg
                mb-8
                border
                border-gray-300
                mx-auto
                w-[90%]
                hover:border-[#ca970b]
                transition-transform
                duration-300
                hover:scale-105
                relative
                hover:top-[-10px]
                ${isDarkMode ? 'bg-gray-800 text-white' : 'text-dark bg-white'}`}
            >
              <div
                className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  transition-all
                  duration-300
                  relative
                  top-0
                  ml-24
                "
              >
                <IoEyeSharp className={`${isDarkMode ? 'text-white' : 'text-black'} text-6xl`} />
              </div>
              <h4 className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-dark'} mb-3`}>
                Refreshing Design
              </h4>
              <p className={`text-body-color ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
                We enjoy working with discerning clients, people for whom
                quality, service, integrity & aesthetics.
              </p>
              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  transform
                  -translate-x-1/2
                  w-0
                  h-[2px]
                  bg-[#ca970b]
                  transition-all
                  duration-300
                  hover:w-[50%]
                "
              ></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className={`p-10
                md:px-7
                xl:px-10
                rounded-[20px]
                bg-gray-800
                shadow-md
                hover:shadow-lg
                mb-8
                border
                border-gray-300
                mx-auto
                w-[90%]
                hover:border-[#ca970b]
                transition-transform
                duration-300
                hover:scale-105
                relative
                hover:top-[-10px]
                 ${isDarkMode ? 'bg-gray-800 text-white' : 'text-dark bg-white'}
                `}
            >
              <div
                className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  transition-all
                  duration-300
                  relative
                  top-0
                  ml-24
                "
              >
                <FaHandshake className={`${isDarkMode ? 'text-white' : 'text-black'} text-6xl`} />
              </div>
              <h4 className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-dark'} mb-3`}>
                Unique and Clean
              </h4>
              <p className={`text-body-color ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
                We enjoy working with discerning clients, people for whom
                quality, service, integrity & aesthetics.
              </p>
              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  transform
                  -translate-x-1/2
                  w-0
                  h-[2px]
                  bg-[#ca970b]
                  transition-all
                  duration-300
                  hover:w-[50%]
                "
              ></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className={` p-10
                md:px-7
                xl:px-10
                rounded-[20px]
                bg-gary-800
                shadow-md
                hover:shadow-lg
                mb-8
                border
                border-gray-300
                mx-auto
                w-[90%]
                hover:border-[#ca970b]
                transition-transform
                duration-300
                hover:scale-105
                relative
                hover:top-[-10px]
                ${isDarkMode ? 'bg-gray-800 text-white' : 'text-dark bg-white'}`}
            >
              <div
                className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  transition-all
                  duration-300
                  relative
                  top-0
                  ml-24
                "
              >
                <IoPeople className={`${isDarkMode ? 'text-white' : 'text-black'} text-6xl`} />
              </div>
              <h4 className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-dark'} mb-3`}>
                Optimized Performance
              </h4>
              <p className={`text-body-color ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
                We enjoy working with discerning clients, people for whom
                quality, service, integrity & aesthetics.
              </p>
              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  transform
                  -translate-x-1/2
                  w-0
                  h-[2px]
                  bg-[#ca970b]
                  transition-all
                  duration-300
                  hover:w-[50%]
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;
