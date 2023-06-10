import img1 from "../../../assets/gallery/img1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Gallery = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img1} alt="" />
        </SwiperSlide>
        ...
        <SwiperSlide>
          {" "}
          <img src={img1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
