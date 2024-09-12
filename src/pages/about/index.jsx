import React from 'react';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import AboutHero from './aboutHero';
import HomeAbout from '../home/homeAbout';
import Features from './features';
import ContactUs from '../home/contactUs';
import PublicFacilities from './publicFacilities';

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <HomeAbout />
      <Features />
      <PublicFacilities />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default About;
