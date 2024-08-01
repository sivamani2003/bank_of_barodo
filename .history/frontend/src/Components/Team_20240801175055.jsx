import React, { useState } from 'react';
import img1 from '../assets/pavan.png';
import img2 from '../assets/aetesh.png';
import img3 from '../assets/harshu.jpeg';
import img4 from '../assets/image.png';

const Team = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamMembers = [
    {
      img: img1,
      name: 'Pavan Sastry NVSS',
      title: 'Chief Executive Officer',
      description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
          twitter: "https://x.com/pavan_xen",
          github: "https://github.com/PavanNVSS",
          instagram: "https://www.instagram.com/xeno_blank/"
    },
    {
      img: img2,
      name: 'Aetesh Ch',
      title: 'Product Design Head',
      description: 'The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.',
      twitter: "https://x.com/Aetesh1",
      github: "https://github.com/chaetesh",
      instagram: "https://www.instagram.com/aeteshch/"
    },
    {
      img: img3,
      name: 'Harshini Mallipeddi',
      title: 'Chief Management Officer',
      description: 'Oversees company operations, ensures strategic goals, and drives business growth and organizational efficiency.',
      github: 'https://github.com/johnsonstone',
      twitter: 'https://twitter.com/johnsonstone',
      instagram: 'https://instagram.com/johnsonstone'
    },
    {
      img: img4,
      name: 'Siva Mani K',
      title: 'Chief Technical Officer',
      description: 'Leads technology strategy, innovation, and development, ensuring robust and scalable tech solutions for business growth.',
      twitter: "https://x.com/sivamani1307",
      github: "https://github.com/sivamani2003",
      instagram": "https://www.instagram.com/i_am__sivamani/"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="container mx-auto pt-3 text-center">
        <p className="text-3xl font-extrabold pb-3">BUILDING TEAM</p>
        <h1 className="xl:text-4xl text-3xl font-extrabold sm:w-4/6 mb-10 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
      </div>
      <div className={`w-full px-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <div className="container mx-auto relative">
          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full">
            &#10094;
          </button>
          <div className="flex items-center justify-center space-x-4">
            {teamMembers.slice(currentIndex, currentIndex + 3).map((member, index) => (
              <div key={index} className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src={member.img} alt={`Display Picture of ${member.name}`} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">{member.name}</h1>
                    <p className="text-gray-800 text-sm text-center">{member.title}</p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">{member.description}</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href={member.github} className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href={member.twitter} className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href={member.instagram} className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
