import React from 'react';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import PayHero from './payHero';
import PayPlan from './payPlan';
import Facilities from '../home/facilities';
import ContactUs from '../home/contactUs';

const Payment = () => {
  return (
    <div className="font-metropolis">
      <Navbar />
      <PayHero />
      <PayPlan />
      <Facilities />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Payment;

// import React from 'react';
// import img1 from '../../assets/images/img1.jpg'; // Replace with actual image paths
// import img2 from '../../assets/images/img2.jpg';
// import img3 from '../../assets/images/img3.jpg';

// const Payment = () => {
//   return (
//     <div className="py-12 bg-white">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold">PAYMENT PLAN</h1>
//         <p className="text-gray-600">
//           We offer flexible payment plans to suit your financial needs, making
//           it easier for you to secure a dream home.
//         </p>
//       </div>

//       {/* Cards Container */}
//       <div className="flex flex-col items-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
//           {/* Card 1 - Mortgage Assistance */}
//           <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg">
//             <div className="relative">
//               <img
//                 src={img1}
//                 alt="Mortgage Assistance"
//                 className="w-full h-48 object-cover mb-4 rounded-md"
//               />
//               <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white bg-green-500 bg-opacity-70 px-4 py-2 rounded">
//                 MORTGAGE ASSISTANCE
//               </h2>
//             </div>
//             <p className="text-gray-700 mt-4">
//               Partnering with leading financial institutions, we provide
//               mortgage assistance to help you navigate the financing process.
//               Our experts will guide you through each step, ensuring a smooth
//               and stress-free experience.
//             </p>
//           </div>

//           {/* Card 2 - Installment Plans */}
//           <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg">
//             <div className="relative">
//               <img
//                 src={img2}
//                 alt="Installment Plans"
//                 className="w-full h-48 object-cover mb-4 rounded-md"
//               />
//               <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white bg-green-700 bg-opacity-70 px-4 py-2 rounded">
//                 INSTALLMENT PLANS
//               </h2>
//             </div>
//             <p className="text-gray-700 mt-4">
//               Spread the cost of your new home over a period of time with our
//               flexible installment plans. This option allows you to manage your
//               finances effectively while securing your place in Greenville.
//             </p>
//           </div>
//         </div>

//         {/* Centered Card - Outright Purchase */}
//         <div className="mt-8 max-w-4xl w-full">
//           <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg">
//             <div className="relative">
//               <img
//                 src={img3}
//                 alt="Outright Purchase"
//                 className="w-full h-48 object-cover mb-4 rounded-md"
//               />
//               <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white bg-green-500 bg-opacity-70 px-4 py-2 rounded">
//                 OUTRIGHT PURCHASE
//               </h2>
//             </div>
//             <p className="text-gray-700 mt-4">
//               For those who prefer to make a one-time payment, we offer
//               attractive discounts on outright purchases. This option provides
//               immediate ownership and cost savings.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

// import React from 'react';
// import img1 from '../../assets/images/img1.jpg'; // Replace with actual image paths
// import img2 from '../../assets/images/img2.jpg';
// import img3 from '../../assets/images/img3.jpg';

// const Payment = () => {
//   return (
//     <div>
//       {/* Greenville Estate Header Section */}
//       {/* <div
//         className="relative h-[40vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: `url(${img1})` }}
//       > */}
//       {/* Green shadow overlay */}
//       {/* <div className="absolute inset-0 bg-primary bg-opacity-40"></div> */}

//       {/* Content */}
//       {/* <div className="relative z-10 p-8 text-center">
//           <h1 className="text-4xl font-bold mt-5">GREENVILLE ESTATE</h1>
//           <p className="text-lg">Your Dream Home in Sapaiman, Accra</p>
//         </div>
//       </div> */}

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
//             <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg">
//               <div className="relative">
//                 <img
//                   src={img1}
//                   alt="Mortgage Assistance"
//                   className="w-full h-48 object-cover mb-4 rounded-md"
//                 />
//                 <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white bg-green-500 bg-opacity-70 px-4 py-2 rounded">
//                   MORTGAGE ASSISTANCE
//                 </h2>
//               </div>
//               <p className="text-gray-700 mt-4">
//                 Partnering with leading financial institutions, we provide
//                 mortgage assistance to help you navigate the financing process.
//                 Our experts will guide you through each step, ensuring a smooth
//                 and stress-free experience.
//               </p>
//             </div>

//             {/* Card 2 - Installment Plans */}
//             <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg">
//               <div className="relative">
//                 <img
//                   src={img2}
//                   alt="Installment Plans"
//                   className="w-full h-48 object-cover mb-4 rounded-md"
//                 />
//                 <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white bg-green-700 bg-opacity-70 px-4 py-2 rounded">
//                   INSTALLMENT PLANS
//                 </h2>
//               </div>
//               <p className="text-gray-700 mt-4">
//                 Spread the cost of your new home over a period of time with our
//                 flexible installment plans. This option allows you to manage
//                 your finances effectively while securing your place in
//                 Greenville.
//               </p>
//             </div>
//           </div>

//           {/* Outright Purchase Section */}
//           <div className="mt-8 max-w-4xl w-full">
//             <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg">
//               <h2 className="text-center text-2xl font-bold text-green-600 mb-4">
//                 OUTRIGHT PURCHASE
//               </h2>
//               <div className="flex justify-center gap-6">
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
//               <p className="text-center text-gray-700 mt-6">
//                 For those who prefer to make a one-time payment, we offer
//                 attractive discounts on outright purchases. This option provides
//                 immediate ownership and cost savings.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

// import React from 'react';
// import img1 from '../../assets/images/img1.jpg'; // Replace with actual image paths
// import img2 from '../../assets/images/img2.jpg';
// import img3 from '../../assets/images/img3.jpg';

// const Payment = () => {
//   return (
//     <div className="py-12 bg-white">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold">PAYMENT PLAN</h1>
//         <p className="text-gray-600">
//           We offer flexible payment plans to suit your financial needs, making
//           it easier for you to secure a dream home.
//         </p>
//       </div>

//       {/* Cards Container */}
//       <div className="flex flex-col items-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
//           {/* Card 1 - Mortgage Assistance */}
//           <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg">
//             <div className="relative">
//               <img
//                 src={img1}
//                 alt="Mortgage Assistance"
//                 className="w-full h-48 object-cover mb-4 rounded-md"
//               />
//               <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white bg-green-500 bg-opacity-70 px-4 py-2 rounded">
//                 MORTGAGE ASSISTANCE
//               </h2>
//             </div>
//             <p className="text-gray-700 mt-4">
//               Partnering with leading financial institutions, we provide
//               mortgage assistance to help you navigate the financing process.
//               Our experts will guide you through each step, ensuring a smooth
//               and stress-free experience.
//             </p>
//           </div>

//           {/* Card 2 - Installment Plans */}
//           <div className="bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg">
//             <div className="relative">
//               <img
//                 src={img2}
//                 alt="Installment Plans"
//                 className="w-full h-48 object-cover mb-4 rounded-md"
//               />
//               <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white bg-green-700 bg-opacity-70 px-4 py-2 rounded">
//                 INSTALLMENT PLANS
//               </h2>
//             </div>
//             <p className="text-gray-700 mt-4">
//               Spread the cost of your new home over a period of time with our
//               flexible installment plans. This option allows you to manage your
//               finances effectively while securing your place in Greenville.
//             </p>
//           </div>
//         </div>

//         {/* Outright Purchase Card */}
//         <div className="mt-8 max-w-4xl w-full">
//           <div className="bg-green-600 p-8 rounded-lg shadow-lg text-white">
//             <h2 className="text-center text-2xl font-bold mb-6">
//               OUTRIGHT PURCHASE
//             </h2>

//             <div className="flex justify-center items-center gap-4 relative">
//               {/* Three Circular Images */}
//               <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
//                 <img
//                   src={img1}
//                   alt="Option 1"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white absolute left-1/2 transform -translate-x-1/2 z-10">
//                 <img
//                   src={img2}
//                   alt="Option 2"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
//                 <img
//                   src={img3}
//                   alt="Option 3"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             <p className="text-center text-white mt-8">
//               For those who prefer to make a one-time payment, we offer
//               attractive discounts on outright purchases. This option provides
//               immediate ownership and cost savings.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
