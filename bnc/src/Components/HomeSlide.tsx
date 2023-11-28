import React, { useRef, useState } from "react";
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
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const thirdVideoRef = useRef<HTMLVideoElement>(null);
  const fourVideoRef = useRef<HTMLVideoElement>(null);

  let firstVideoElement = firstVideoRef && firstVideoRef.current;
  let secondVideoElement = secondVideoRef && secondVideoRef.current;
  let thirdVideoElement = thirdVideoRef && thirdVideoRef.current;
  let fourVideoElement = fourVideoRef && fourVideoRef.current;

  // Translation
  const { t } = useTranslation();

  const handleSlideChange = (swiper: any) => {
    // let myVideo = document.querySelector(".myVideo");
    // setSlideNum(swiper.realIndex);
    // Swiper 1번
    if (swiper.realIndex === 0) {
      if (firstVideoElement) {
        firstVideoElement?.load();
      }
    } else {
      firstVideoElement?.pause();
    }
    // Swiper 2번
    if (swiper.realIndex === 1) {
      if (secondVideoElement) {
        secondVideoElement?.load();
      }
    } else {
      secondVideoElement?.pause();
    }
    // Swiper 3번
    if (swiper.realIndex === 2) {
      if (thirdVideoElement) {
        thirdVideoElement?.load();
      }
    } else {
      thirdVideoElement?.pause();
    }
    // Swiper 4번
    if (swiper.realIndex === 3) {
      if (fourVideoElement) {
        fourVideoElement?.load();
      }
    } else {
      fourVideoElement?.pause();
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        loop={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
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
            ref={firstVideoRef}
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
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/video/home-banner02.mp4"
            typeof="video/mp4"
            ref={secondVideoRef}
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
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/video/home-banner03.mp4"
            typeof="video/mp4"
            ref={thirdVideoRef}
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
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/video/home-banner04.mp4"
            typeof="video/mp4"
            ref={fourVideoRef}
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
      </Swiper>
    </>
  );
}

export default HomeSlide;
