// import React from 'react';
// import { FaUtensils, FaShieldAlt, FaWater } from 'react-icons/fa';
// import { IoIosBed } from 'react-icons/io';
// import { FiMonitor } from 'react-icons/fi';

// // Features Data
// const featuresData = [
//   {
//     id: 1,
//     name: 'Open Kitchen',
//     icon: <FaUtensils className="text-4xl mx-auto mb-2" />,
//   },
//   {
//     id: 2,
//     name: 'All Bedrooms En-Suite',
//     icon: <IoIosBed className="text-4xl mx-auto mb-2" />,
//   },
//   {
//     id: 3,
//     name: 'Guest Washroom',
//     icon: <FiMonitor className="text-4xl mx-auto mb-2" />,
//   },
//   {
//     id: 4,
//     name: '24-hour Security',
//     icon: <FaShieldAlt className="text-4xl mx-auto mb-2" />,
//   },
//   {
//     id: 5,
//     name: 'Water Treatment System',
//     icon: <FaWater className="text-4xl mx-auto mb-2" />,
//   },
//   {
//     id: 6,
//     name: 'Leisure Park',
//     icon: <FiMonitor className="text-4xl mx-auto mb-2" />,
//   },
//   {
//     id: 7,
//     name: 'Gated Community',
//     icon: <FaShieldAlt className="text-4xl mx-auto mb-2" />,
//   },
//   {
//     id: 8,
//     name: 'Serene Environment',
//     icon: <FaUtensils className="text-4xl mx-auto mb-2" />,
//   },
// ];

// const Features = () => {
//   return (
//     <div className="bg-primary text-white py-10">
//       <h2 className="text-center text-lg md:text-2xl font-bold mb-6">
//         FEATURES
//       </h2>
//       {/* Features List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {featuresData.map((feature) => (
//           <div key={feature.id}>
//             {feature.icon}
//             <p>{feature.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from 'react';
import { FaUtensils, FaShieldAlt, FaWater } from 'react-icons/fa';
import { IoIosBed } from 'react-icons/io';
import { FiMonitor } from 'react-icons/fi';

// Features Data
const featuresData = [
  {
    id: 1,
    name: 'Open Kitchen',
    icon: <FaUtensils className="text-4xl mx-auto mb-2" />,
  },
  {
    id: 2,
    name: 'All Bedrooms En-Suite',
    icon: <IoIosBed className="text-4xl mx-auto mb-2" />,
  },
  {
    id: 3,
    name: 'Guest Washroom',
    icon: <FiMonitor className="text-4xl mx-auto mb-2" />,
  },
  {
    id: 4,
    name: '24-hour Security',
    icon: <FaShieldAlt className="text-4xl mx-auto mb-2" />,
  },
  {
    id: 5,
    name: 'Water Treatment System',
    icon: <FaWater className="text-4xl mx-auto mb-2" />,
  },
  {
    id: 6,
    name: 'Leisure Park',
    icon: <FiMonitor className="text-4xl mx-auto mb-2" />,
  },
  {
    id: 7,
    name: 'Gated Community',
    icon: <FaShieldAlt className="text-4xl mx-auto mb-2" />,
  },
  {
    id: 8,
    name: 'Serene Environment',
    icon: <FaUtensils className="text-4xl mx-auto mb-2" />,
  },
];

const Features = () => {
  return (
    <div className="bg-primary text-white py-10">
      <h2 className="text-center text-lg md:text-2xl font-bold mb-6">
        FEATURES
      </h2>
      {/* Features List */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {featuresData.map((feature) => (
          <div key={feature.id}>
            {feature.icon}
            <p>{feature.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
