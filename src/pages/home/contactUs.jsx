import React from 'react';
import { BiEnvelope, BiGlobe } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Get in touch with us
      </h2>

      <div className="flex flex-col items-center md:flex-row gap-8">
        {/* Contact Information */}
        <div className="flex-1">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <IoCall className="text-3xl mr-2" />
              <div>
                <span className="block text-lg">024 323 1538</span>
                <span className="block text-lg">055 716 4488</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <BiEnvelope className="text-3xl mr-2" />
                <p className="text-2xl">sales@greenvilleliving.com</p>
              </div>

              <div className="flex items-center">
                <BiGlobe className="text-3xl mr-2" />
                <p className="text-2xl">www.greenvilleliving.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form className="space-y-4">
            <div className="flex gap-4 mb-3">
              <label htmlFor="firstName" className="flex-1">
                First Name
                <input
                  type="text"
                  id="firstName"
                  placeholder="Ruth"
                  className="w-full border-b-2 border-gray-300 p-2 mt-1 mb-3 text-lg"
                />
              </label>

              <label htmlFor="lastName" className="flex-1">
                Last Name
                <input
                  type="text"
                  id="lastName"
                  placeholder="Snow"
                  className="w-full border-b-2 border-gray-300 p-2 mt-1 mb-3 text-lg"
                />
              </label>
            </div>

            <label htmlFor="phoneNumber">
              Phone
              <input
                type="text"
                id="phoneNumber"
                placeholder="123456789"
                className="w-full border-b-2 border-gray-300 p-2 mt-1 mb-3 text-lg"
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                placeholder="ruthsnow@gmail.com"
                className="w-full border-b-2 border-gray-300 p-2 mt-1 mb-3 text-lg"
              />
            </label>

            <label htmlFor="message">
              Message
              <textarea
                name="message"
                id="message"
                placeholder="What is your message"
                className="w-full border-b-2 border-gray-300 p-2 mt-1 mb-3 text-lg"
              />
            </label>

            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
