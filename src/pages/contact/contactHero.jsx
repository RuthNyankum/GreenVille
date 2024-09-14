// import React from 'react';
// import img1 from '../../assets/images/img11.jpg';

// const ContactHero = () => {
//   return (
//     <div
//       className="relative h-[50vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
//       style={{ backgroundImage: `url(${img1})` }}
//       role="img"
//       aria-label="Background image of Greenville Estate"
//     >
//       {/* Green shadow overlay */}
//       <div className="absolute inset-0 bg-primary bg-opacity-40"></div>

//       {/* Content */}
//       <div className="relative z-10 p-8 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold">CONTACT</h1>
//         <h1 className="text-3xl md:text-4xl font-bold">US</h1>

//         {/* Center the paragraph */}
//         <p className="text-lg md:text-xl mt-3 mx-auto max-w-lg">
//           At Greenville Estate, we’re dedicated to helping you find your perfect
//           home. Whether you have questions, need assistance, or want to discuss
//           your real estate needs, we’re here to help.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ContactHero;
import React from 'react';
import img1 from '../../assets/images/img11.jpg';

const ContactHero = () => {
  return (
    <div
      className="relative h-[50vh] flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
      role="img"
      aria-label="Background image of Greenville Estate"
    >
      {/* Green shadow overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 p-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">CONTACT</h1>
        <h1 className="text-3xl md:text-4xl font-bold">US</h1>

        {/* Center the paragraph */}
        <p className="text-lg md:text-xl mt-3 mx-auto max-w-lg">
          At Greenville Estate, we’re dedicated to helping you find your perfect
          home. Whether you have questions, need assistance, or want to discuss
          your real estate needs, we’re here to help.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
