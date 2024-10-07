import React from 'react';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import ContactUs from '../home/contactUs';
import Facilities from '../home/facilities';
import ContactHero from './contactHero';
import Location from './location';
import MapComponent from './map';

const Contact = () => {
  return (
    <div className="font-metropolis">
      <Navbar />
      <ContactHero />
      <Facilities />
      <MapComponent />
      <Location />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
