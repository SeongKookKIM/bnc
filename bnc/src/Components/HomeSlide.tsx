import React from "react";
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
            <strong>
              {t(`home-banner.first.title-first`)} <br />
              {t(`home-banner.first.title-second`)}
            </strong>
            <span>
              {t(`home-banner.first.sub-title-first`)}
              <br className="mobile" />{" "}
              {t(`home-banner.first.sub-title-second`)}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/home/home-banner02.jpg" alt="home" />
          <div className="swiper-bg"></div>
          <div className="home-banner-text">
            <strong>
              {t(`home-banner.first.title-first`)} <br />
              {t(`home-banner.first.title-second`)}
            </strong>
            <span>
              {t(`home-banner.first.sub-title-first`)}
              <br className="mobile" />{" "}
              {t(`home-banner.first.sub-title-second`)}
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
              {t(`home-banner.first.title-first`)} <br />
              {t(`home-banner.first.title-second`)}
            </strong>
            <span>
              {t(`home-banner.first.sub-title-first`)}
              <br className="mobile" />{" "}
              {t(`home-banner.first.sub-title-second`)}
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/home/home-banner04.png" alt="home" />

          <div className="swiper-bg"></div>
          <div className="home-banner-text">
            <strong>
              {t(`home-banner.first.title-first`)} <br />
              {t(`home-banner.first.title-second`)}
            </strong>
            <span>
              {t(`home-banner.first.sub-title-first`)}
              <br className="mobile" />{" "}
              {t(`home-banner.first.sub-title-second`)}
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSlide;
