import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      {/* 회사소개 배너 */}
      <div className="about-banner">
        <div className="about-banner-inner-bg"></div>
        <div className="about-banner-inner">
          <strong>{t(`about.title`)}</strong>
        </div>
      </div>
      <div className="about-inner">
        {/* 회사소개 배너 아래- */}
        <div className="about-inner-title">
          <p>{t(`about.title-first`)}</p>
          <p>{t(`about.title-second`)}</p>
          <p>{t(`about.title-third`)}</p>
        </div>

        {/* 회사소개 introduction */}
        <div className="about-introduction-box">
          <div className="network introduction">
            <div className="introduction-image">
              <img src="/assets/image/about/about-first.jpg" alt="network" />
            </div>
            <div className="introduction-content-wrapper">
              <strong>{t(`about.network.title`)}</strong>
              <div className="introduction-content">
                <p>{t(`about.network.content-first`)}</p>
                <p>{t(`about.network.content-second`)}</p>
              </div>
            </div>
          </div>
          <div className="values introduction">
            <div className="introduction-image">
              <img src="/assets/image/about/about-second.jpg" alt="value" />
            </div>
            <div className="introduction-content-wrapper">
              <strong>{t(`about.america.title`)}</strong>
              <div className="introduction-content">
                <p>{t(`about.america.content-first`)}</p>
                <p>{t(`about.america.content-first`)}</p>
                <p>{t(`about.america.content-third`)}</p>
                <p>{t(`about.america.content-four`)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 회사소개  customer*/}
      <div className="about-customer">
        {/* First */}
        <div className="about-customer-box first">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>{t(`about.content.first.title`)}</strong>
              <div className="about-content">
                <p>{t(`about.content.first.first`)}</p>
                <p>{t(`about.content.first.second`)}</p>
                <p>{t(`about.content.first.third`)}</p>
              </div>
            </div>
            <div className="customer-image">
              <img src="/assets/image/about/03.jpg" alt="about" />
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="about-customer-box second">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>{t(`about.content.second.title`)}</strong>
              <div className="about-content">
                <p>{t(`about.content.second.first`)}</p>
                <p>{t(`about.content.second.second`)}</p>
                <p>{t(`about.content.second.third`)}</p>
              </div>
            </div>
            <div className="customer-image">
              <img src="/assets/image/about/04.jpg" alt="about" />
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="about-customer-box third">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>{t(`about.content.third.title`)}</strong>
              <div className="about-content">
                <p>{t(`about.content.third.first`)}</p>
                <p>{t(`about.content.third.second`)}</p>
                <p>{t(`about.content.third.third`)}</p>
              </div>
            </div>
            <div className="customer-image">
              <img src="/assets/image/about/05.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
