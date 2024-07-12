import React from 'react';

const ContactForm = ({isDarkMode}) => {
  return (
    <div className={`${isDarkMode ?'bg-gray-800 text-white':'bg-white text-black'}`}>
        <div className="container mx-auto p-8  ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">How to Find Us</h2>
          <p className="mb-6">
            If you have any questions, just fill in the contact form, and we will answer you shortly.
            If you are living nearby, come visit LawExpert at one of our comfortable offices.
          </p>
          <div className="mb-6">
            <h3 className="font-bold">Headquarters</h3>
            <p>Assam lo akkada adigna cheptharu.</p>
            <p>Telephone: +91 7777777777</p>
            <p>Email: <a href="mailto:mail@demolink.org" className="text-blue-500">mail@demolink.org</a></p>
          </div>
          <div>
            <h3 className="font-bold">Support Centre</h3>
            <p>9870 ST VINCENT PLACE, GLASGOW, DC 45 FR 45</p>
            <p>Telephone: +1 800 603 6035</p>
            <p>Email: <a href="mailto:mail@demolink.org" className="text-blue-500">mail@demolink.org</a></p>
          </div>
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactForm;
