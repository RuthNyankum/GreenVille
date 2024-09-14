import React from 'react';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import ContactUs from '../home/contactUs';
import Facilities from '../home/facilities';
import ContactHero from './contactHero';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Facilities />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
