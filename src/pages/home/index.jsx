import React from 'react';
import Navbar from '../../component/navbar';
import HomeHero from './homeHero';
import HomeAbout from './homeAbout';
import Facilities from './facilities';
import ContactUs from './contactUs';

function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <Facilities />
      <ContactUs />
    </div>
  );
}

export default Home;
