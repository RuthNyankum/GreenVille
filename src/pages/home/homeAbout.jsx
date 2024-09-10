import React from 'react';
import img from '../../assets/images/img1.jpg';

const HomeAbout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-6 p-4 md:p-12 mx-4 md:mx-24">
      {/* Text Section */}
      <div className="md:w-1/2">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-primary w-fit p-4 text-white">
            ABOUT GREENVILLE
          </h1>
        </div>
        <p className="text-sm md:text-lg leading-relaxed">
          Nestled in the serene neighborhood of Sapeiman, just off the
          Accra-Nsawam highway, Greenville offers the perfect blend of modern
          living and natural tranquility. This exclusive 3-bedroom house
          development comprises only nine meticulously designed homes, ensuring
          a close-knit and secure community for you and your family.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={img}
          alt="Greenville Estate"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HomeAbout;
