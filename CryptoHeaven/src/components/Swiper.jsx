// MySwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import image1 from "../assets/image1.jpg";

// Assuming these paths are correct for your images

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      className="my-image-swiper" // Apply the class for styling
    >
      <SwiperSlide>
        <img src={image1} alt="Slide 1" />{" "}
        {/* No class needed here if img is direct child */}
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
