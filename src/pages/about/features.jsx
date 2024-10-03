import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';
import icon4 from '../../assets/icons/icon4.png';
import icon5 from '../../assets/icons/icon5.png';
import icon6 from '../../assets/icons/icon6.png';
import icon7 from '../../assets/icons/icon7.png';
import icon8 from '../../assets/icons/icon8.png';

// Features Data
const featuresData = [
  {
    id: 1,
    name: 'Open Kitchen',
    img: icon5,
  },
  {
    id: 2,
    name: 'All Bedrooms En-Suite',
    img: icon4,
  },
  {
    id: 3,
    name: 'Guest Washroom',
    img: icon6,
  },
  {
    id: 4,
    name: '24-hour Security',
    img: icon8,
  },
  {
    id: 5,
    name: 'Water Treatment System',
    img: icon3,
  },
  {
    id: 6,
    name: 'Leisure Park',
    img: icon7,
  },
  {
    id: 7,
    name: 'Gated Community',
    img: icon1,
  },
  {
    id: 8,
    name: 'Serene Environment',
    img: icon2,
  },
];

const Features = () => {
  return (
    <div className="bg-primary text-white py-10">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-6">
        FEATURES
      </h2>
      {/* Features List */}
      <div className="grid grid-cols-2 md:gap-y-16 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {featuresData.map((feature) => (
          <div key={feature.id}>
            <img
              src={feature.img}
              alt={feature.name}
              className="mx-auto mb-2 md:h-20 md:w-20 h-16 w-16 object-cover"
            />
            <p className="md:text-xl">{feature.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
