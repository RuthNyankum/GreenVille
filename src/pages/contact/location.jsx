import React from 'react';

const Location = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-28 justify-center items-center bg-primary p-9">
        <h1 className="text-white font-bold text-3xl mb-4 md:mb-0">
          OUR LOCATION
        </h1>

        <div className="text-white text-center md:text-left">
          <p className="font-semibold text-lg">You can locate us at:</p>
          <p>Sapeiman</p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
