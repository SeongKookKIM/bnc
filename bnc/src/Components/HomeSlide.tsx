import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

function HomeSlide() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/video/banner01.mp4"
            typeof="vidoe/mp4"
          />
          <div className="swiper-bg"></div>
          <div className="home-banner-text">
            <strong>
              Complex Global <br />
              Logistics Simplified
            </strong>
            <span>
              Knowledgeable in all aspects of maritime regulations,{" "}
              <br className="mobile" /> we offer complete ocean solutions for
              your supply chain.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <div className="home-banner-text">
            <strong>
              Complex Global <br />
              Logistics Simplified
            </strong>
            <span>
              Knowledgeable in all aspects of maritime regulations,{" "}
              <br className="mobile" /> we offer complete ocean solutions for
              your supply chain.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <div className="home-banner-text">
            <strong>
              Complex Global <br />
              Logistics Simplified
            </strong>
            <span>
              Knowledgeable in all aspects of maritime regulations,{" "}
              <br className="mobile" /> we offer complete ocean solutions for
              your supply chain.
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="home-banner-text">
            <strong>
              Complex Global <br />
              Logistics Simplified
            </strong>
            <span>
              Knowledgeable in all aspects of maritime regulations,{" "}
              <br className="mobile" /> we offer complete ocean solutions for
              your supply chain.
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSlide;
