import React from 'react';
import img1 from '../../assets/images/img1.jpg';

const HomeHero = () => {
  return (
    <div
      className="relative h-[50vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Green shadow overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 p-8 text-center">
        <h1 className="text-6xl font-bold">WELCOME</h1>

        <h1 className="text-4xl font-bold">TO</h1>

        <h1 className="text-4xl font-bold mt-5">GREENVILLE ESTATE</h1>
        <p className="text-lg ">Your Dream Home in Sapaiman, Accra</p>
      </div>
    </div>
  );
};

export default HomeHero;
