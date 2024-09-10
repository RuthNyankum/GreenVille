import React from 'react';

import img1 from '../../assets/images/h4.jpg';
import img2 from '../../assets/images/h2.jpg';
import img3 from '../../assets/images/img4.jpg';
import img4 from '../../assets/images/img5.jpg';
import img5 from '../../assets/images/h5.jpg';

const facilityData = [
  { id: 1, imgSrc: img1, altText: 'Facility 1' },
  { id: 2, imgSrc: img2, altText: 'Facility 2' },
  { id: 3, imgSrc: img3, altText: 'Facility 3' },
  { id: 4, imgSrc: img4, altText: 'Facility 4' },
  { id: 5, imgSrc: img5, altText: 'Facility 5' },
];

const Facilities = () => {
  return (
    <div className="p-6 md:p-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
        NEARBY PUBLIC FACILITIES
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {facilityData.slice(0, 3).map((facility) => (
          <div key={facility.id} className="w-full h-auto">
            <img
              src={facility.imgSrc}
              alt={facility.altText}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Second Row - Two Larger Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {facilityData.slice(3, 5).map((facility) => (
          <div key={facility.id} className="w-full h-auto">
            <img
              src={facility.imgSrc}
              alt={facility.altText}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
