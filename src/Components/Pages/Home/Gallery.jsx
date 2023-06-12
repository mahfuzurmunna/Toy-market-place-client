import img2 from "../../../assets/gallery/img2.png";
import img3 from "../../../assets/gallery/img3.png";
import img4 from "../../../assets/gallery/img4.png";
import img5 from "../../../assets/gallery/img5.png";
import img6 from "../../../assets/gallery/img6.png";
import img7 from "../../../assets/gallery/img7.png";
import img8 from "../../../assets/gallery/img8.png";
import img9 from "../../../assets/gallery/img9.png";
import img10 from "../../../assets/gallery/img10.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const Gallery = () => {

  
  return (
    <div className="lg:my-16 lg:pb-24">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // Autoplay delay in milliseconds
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper  swiper-h"
      >
        <SwiperSlide>
          <img
            src={img8}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover rounded-2xl border-y-4 border-accent3 p-1 lg:p-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img9}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover border-x-4 border-accent3 rounded-2xl p-1 lg:p-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img7}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover border-y-4 border-accent3 rounded-2xl p-1 lg:p-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover border-x-4 border-accent3 rounded-2xl p-1 lg:p-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover border-y-4 border-accent3 rounded-2xl p-1 lg:p-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover border-x-4 border-accent3 rounded-2xl p-1 lg:p-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover border-y-4 border-accent3 rounded-2xl p-1 lg:p-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img10}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover border-x-4 border-accent3 rounded-2xl p-1 lg:p-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt=""
            className="w-[200px] h-[150px] lg:w-[425px] lg:h-[500px] object-cover border-y-4 border-accent3 rounded-2xl p-1 lg:p-3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Gallery;
