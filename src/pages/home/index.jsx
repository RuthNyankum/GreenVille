import React from 'react';
import Navbar from '../../component/navbar';
import HomeHero from './homeHero';
import HomeAbout from './homeAbout';
import Facilities from './facilities';
import ContactUs from './contactUs';
import Footer from '../../component/footer';

function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <Facilities />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
