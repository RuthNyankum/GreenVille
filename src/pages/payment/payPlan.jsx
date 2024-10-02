// import React from 'react';
// import img1 from '../../assets/images/img1.jpg'; // Replace with actual image paths
// import img2 from '../../assets/images/img2.jpg';
// import img3 from '../../assets/images/img3.jpg';

// const PayPlan = () => {
//   return (
//     <div>
//       {/* Payment Plan Section */}
//       <div className="py-12 bg-white">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold">PAYMENT PLAN</h1>
//           <p className="text-gray-600">
//             We offer flexible payment plans to suit your financial needs, making
//             it easier for you to secure a dream home.
//           </p>
//         </div>

//         {/* Cards Container */}
//         <div className="flex flex-col items-center">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
//             {/* Card 1 - Mortgage Assistance */}
//             <div className="relative bg-green-500 text-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
//               {/* Content Area */}
//               <div className="relative bg-black bg-opacity-40 p-6 flex flex-col justify-center w-full md:w-1/2">
//                 <h2 className="text-xl font-bold bg-green-500 bg-opacity-70 px-4 py-2 rounded">
//                   MORTGAGE ASSISTANCE
//                 </h2>
//                 <p className="text-gray-200 mt-4">
//                   Partnering with leading financial institutions, we provide
//                   mortgage assistance to help you navigate the financing
//                   process. Our experts will guide you through each step,
//                   ensuring a smooth and stress-free experience.
//                 </p>
//               </div>

//               {/* Image Area */}
//               <img
//                 src={img1}
//                 alt="Mortgage Assistance"
//                 className="object-cover w-full h-48 md:h-full md:w-1/2"
//               />
//             </div>

//             {/* Card 2 - Installment Plans */}
//             <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
//               {/* Content Area */}
//               <div className="flex flex-col md:w-1/2">
//                 <h2 className="text-xl font-bold text-green-700 mb-4">
//                   INSTALLMENT PLANS
//                 </h2>
//                 <p className="text-gray-700 md:mt-12">
//                   Spread the cost of your new home over a period of time with
//                   our flexible installment plans. This option allows you to
//                   manage your finances effectively while securing your place in
//                   Greenville.
//                 </p>
//               </div>

//               {/* Images Area */}
//               <div className="flex flex-col md:w-1/2">
//                 <img
//                   src={img2}
//                   alt="Installment Plan 1"
//                   className="w-full h-48 object-cover mb-4 rounded-md"
//                 />
//                 <img
//                   src={img3}
//                   alt="Installment Plan 2"
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Outright Purchase Section */}
//           <div className="mt-8 max-w-4xl w-full relative">
//             <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg relative overflow-hidden">
//               <h2 className="text-center text-2xl font-bold text-green-600 mb-4">
//                 OUTRIGHT PURCHASE
//               </h2>
//               <div className="flex justify-center gap-6 relative z-10">
//                 <img
//                   src={img1}
//                   alt="Option 1"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />

//                 <img
//                   src={img2}
//                   alt="Option 2"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//                 <img
//                   src={img3}
//                   alt="Option 3"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               </div>
//               <p className="text-center text-gray-700 mt-6 relative z-10">
//                 For those who prefer to make a one-time payment, we offer
//                 attractive discounts on outright purchases. This option provides
//                 immediate ownership and cost savings.
//               </p>
//               {/* Triangle */}
//               <div className="absolute bottom-0 left-0 w-full h-40 bg-green-500 rounded-t-full clip-path-triangle"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayPlan;

import React from 'react';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';

const PayPlan = () => {
  return (
    <div>
      {/* Payment Plan Section */}
      <div className="py-12 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">PAYMENT PLAN</h1>
          <p className="text-gray-600">
            We offer flexible payment plans to suit your financial needs, making
            it easier for you to secure a dream home.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
            {/* Card 1 - Mortgage Assistance */}
            <div className="relative bg-green-500 text-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              {/* Content Area */}
              <div className="relative bg-black bg-opacity-40 p-6 flex flex-col justify-center w-full md:w-1/2">
                <h2 className="text-xl font-bold bg-green-500 bg-opacity-70 px-4 py-2 rounded">
                  MORTGAGE ASSISTANCE
                </h2>
                <p className="text-gray-200 mt-4">
                  Partnering with leading financial institutions, we provide
                  mortgage assistance to help you navigate the financing
                  process. Our experts will guide you through each step,
                  ensuring a smooth and stress-free experience.
                </p>
              </div>

              {/* Image Area */}
              <img
                src={img1}
                alt="Mortgage Assistance"
                className="object-cover w-full h-48 md:h-full md:w-1/2"
              />
            </div>

            {/* Card 2 - Installment Plans */}
            <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
              {/* Content Area */}
              <div className="flex flex-col md:w-1/2">
                <h2 className="text-xl font-bold text-green-700 mb-4">
                  INSTALLMENT PLANS
                </h2>
                <p className="text-gray-700 md:mt-12">
                  Spread the cost of your new home over a period of time with
                  our flexible installment plans. This option allows you to
                  manage your finances effectively while securing your place in
                  Greenville.
                </p>
              </div>

              {/* Images Area */}
              <div className="flex flex-col md:w-1/2">
                <img
                  src={img2}
                  alt="Installment Plan 1"
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <img
                  src={img3}
                  alt="Installment Plan 2"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Outright Purchase Section */}
          <div className="mt-8 max-w-4xl w-full relative">
            <div className="bg-white border-2 border-primary p-6 rounded-lg shadow-lg relative overflow-hidden">
              <h2 className="text-center text-2xl font-bold text-primary mb-4">
                OUTRIGHT PURCHASE
              </h2>
              <div className="flex md:flex-row justify-center gap-6 relative z-10 mb-6">
                <img
                  src={img1}
                  alt="Option 1"
                  className="w-24 h-24 rounded-full object-cover md:w-32 md:h-32"
                />
                <img
                  src={img2}
                  alt="Option 2"
                  className="w-24 h-24 rounded-full object-cover md:w-32 md:h-32"
                />
                <img
                  src={img3}
                  alt="Option 3"
                  className="w-24 h-24 rounded-full object-cover md:w-32 md:h-32"
                />
              </div>
              <p className="text-center text-black md:text-white mt-6 relative z-10">
                For those who prefer to make a one-time payment, we offer
                attractive discounts on outright purchases. This option provides
                immediate ownership and cost savings.
              </p>
              {/* Triangle */}
              <div className="absolute bottom-0 left-0 w-full h-40 bg-primary rounded-t-full clip-path-triangle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPlan;
