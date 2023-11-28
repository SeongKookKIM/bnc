import React from "react";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();
  return (
    <div className="service">
      {/* 서비스페이지 상단 배너 */}
      <div className="service-banner">
        <div className="service-banner-inner-bg"></div>
        <div className="service-banner-inner">
          <strong>{t(`service.title`)}</strong>
        </div>
      </div>
      {/* 배너아래-글 */}
      <div className="service-inner">
        <h3>{t(`service.service-title`)}</h3>
        <p>{t(`service.service-sub-title`)}</p>
      </div>
      <div className="service-customer">
        {/* First */}
        <div className="service-customer-box first">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>{t(`service.content.first.title`)}</strong>
              <div className="service-content">
                <p>{t(`service.content.first.first`)}</p>
                <p>{t(`service.content.first.second`)}</p>
              </div>
            </div>
            <div className="customer-image">
              <img src="/assets/image/service01.jpg" alt="service" />
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="service-customer-box second">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>{t(`service.content.second.title`)}</strong>
              <div className="service-content">
                <p>{t(`service.content.second.first`)}</p>
                <p>{t(`service.content.second.second`)}</p>
              </div>
            </div>
            <div className="customer-image">
              <img src="/assets/image/service02.jpg" alt="service" />
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="service-customer-box third">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>{t(`service.content.third.title`)}</strong>
              <div className="service-content">
                <p>{t(`service.content.third.first`)}</p>
              </div>
            </div>
            <div className="customer-image">
              <img src="/assets/image/service03.jpg" alt="service" />
            </div>
          </div>
        </div>
        {/* Four */}
        <div className="service-customer-box four">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>{t(`service.content.four.title`)}</strong>
              <div className="service-content">
                <p>{t(`service.content.four.first`)}</p>
                <p>{t(`service.content.four.second`)}</p>
              </div>
            </div>
            <div className="customer-image">
              <img src="/assets/image/service04.jpg" alt="service" />
            </div>
          </div>
        </div>
        {/* Five */}
        <div className="service-customer-box five">
          <div className="customer-inner">
            <div className="customer-content">
              <strong>{t(`service.content.five.title`)}</strong>
              <div className="service-content">
                <p>{t(`service.content.five.first`)}</p>
                <p>{t(`service.content.five.second`)}</p>
              </div>
            </div>
            <div className="customer-image">
              <img src="/assets/image/service05.jpg" alt="service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
