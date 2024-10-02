import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img8.png';
import img3 from '../../assets/images/Shopping.jpg';
import img4 from '../../assets/images/img5.jpg';
import img5 from '../../assets/images/img7.png';

const PublicFacilities = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-4 mt-5">
        NEARBY PUBLIC FACILITIES
      </h1>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full max-w-screen-lg mx-auto"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Facility 1"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Facility 2"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Facility 3"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt="Facility 4"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt="Facility 5"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PublicFacilities;
