import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
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
  // Translation
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        loop={false}
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
            src="/assets/video/home-banner01.mp4"
            typeof="video/mp4"
          />
          <div className="swiper-bg"></div>
          <div className="home-banner-text">
            <strong>{t(`home-banner.first.title-first`)}</strong>
            <span>
              {t(`home-banner.first.sub-title-first`)}
              <br className="mobile" />{" "}
              {t(`home-banner.first.sub-title-second`)}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/video/home-banner02.mp4"
            typeof="video/mp4"
          /> */}
          <img src="/assets/image/home/home-banner02.jpg" alt="home" />
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
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/video/home-banner03.mp4"
            typeof="video/mp4"
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
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/video/home-banner04.mp4"
            typeof="video/mp4"
          /> */}
          <img src="/assets/image/home/home-banner04.png" alt="home" />

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
      </Swiper>
    </>
  );
}

export default HomeSlide;
