import React from 'react';
import green from '../assets/images/GreenVillelogo.png';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="p-4 mt-16" style={{ backgroundColor: '#232222' }}>
      {/* Top Section: Logo and Links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mx-4 md:mx-32 mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={green} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-semibold text-xl text-primary">GreenVille</span>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-x-4">
          <span className="text-white cursor-pointer hover:text-primary">
            About us
          </span>
          <span className="text-white cursor-pointer hover:text-primary">
            Features
          </span>
          <span className="text-white cursor-pointer hover:text-primary">
            Properties
          </span>
          <span className="text-white cursor-pointer hover:text-primary">
            Location
          </span>
        </div>
      </div>

      {/* Bottom Section: Contact and Social Links */}
      <div className="flex flex-col md:flex-row justify-between gap-y-6 mx-4 md:mx-32">
        <div className="flex flex-col text-center md:text-left text-white">
          <span className="font-semibold">Let’s Talk:</span>
          <span>024 323 1538</span>
          <span>055 716 4488</span>
          <span>sales@greenvilleliving.com</span>
        </div>

        <div className="flex flex-col text-center md:text-left text-white">
          <span className="font-semibold">Find us:</span>
          <span>House No. 50,</span>
          <span>Second Close,</span>
          <span>Airport Residential,</span>
          <span>Accra.</span>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold mb-2 text-white">Follow us:</p>
          <div className="flex gap-x-6">
            <BsFacebook className="text-2xl text-white cursor-pointer hover:text-primary" />
            <BsTwitterX className="text-2xl text-white cursor-pointer hover:text-primary" />
            <BsInstagram className="text-2xl text-white cursor-pointer hover:text-primary" />
            <BsLinkedin className="text-2xl text-white cursor-pointer hover:text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
