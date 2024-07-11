import React from 'react'

const About_company = ({isDarkMode}) => {
    const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const paragraphColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  return (
    <section className={`py-24 ${bgColor}`}>
    <div className="container mx-auto px-5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3">
          <h2 className={`text-4xl font-extrabold mb-4 ${textColor}`}>About Us</h2>
          <p className={`mb-4 ${paragraphColor}`}>
            Our Investment Company, located in Rockville, Maryland, is a full service real estate company that provides acquisition, development and finance expertise for both commercial and multi-family projects.
          </p>
          <p className={paragraphColor}>
            Our experience in structuring complicated financial transactions while accommodating diverse partnership interests, has allowed it to achieve over $1 Billion in acquisitions and financing.
          </p>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-10 mt-10 lg:mt-0">
          <ul className="space-y-2">
            <li className={`font-bold ${textColor}`}>Wealth Management</li>
            <li className={`font-bold ${textColor}`}>Business Owners</li>
            <li className={`font-bold ${textColor}`}>Insurance & Annuities</li>
            <li className={`font-bold ${textColor}`}>Cash & Credit</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About_company
