import React from "react";
import HomeSlide from "../Components/HomeSlide";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Home() {
  const { t } = useTranslation();

  let navigate = useNavigate();
  return (
    <section className="home">
      {/* Home배너 */}
      <div className="home-banner">
        <HomeSlide />
      </div>
      <div className="inner">
        {/* Home배너 아래- */}
        <div className="home-about">
          <h3>{t(`home-introduction.title`)}</h3>
          <div className="home-about-content-box">
            <div className="home-about-content">
              <p>{t(`home-introduction.first`)}</p>
            </div>
            <div className="home-about-content">
              <p>{t(`home-introduction.second`)}</p>
            </div>
          </div>
        </div>

        {/* Home 페이지링크 */}
        <div className="home-link">
          <div
            className="home-introduction"
            onClick={() => {
              navigate("/about");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="bg"></div>
            <p>
              {t(`home-link.first`)}
              <span className="sub">
                The Best Logistic <br className="br" /> Partner for Your
                Business
              </span>
            </p>
          </div>
          <div
            className="home-quotes"
            onClick={() => {
              navigate("/inqury");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="bg"></div>
            <span>{t(`home-link.second`)}</span>
          </div>
          <div
            className="home-directions"
            onClick={() => {
              navigate("/location");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="bg"></div>
            <span>{t(`home-link.third`)}</span>
          </div>
        </div>

        {/* 파트너 */}
        <div className="home-partners">
          <p>{t(`partners`)}</p>
          <ul>
            <li>
              <img src="/assets/image/home/partners/1.png" alt="1" />
            </li>
            <li>
              <img src="/assets/image/home/partners/2.png" alt="2" />
            </li>
            <li>
              <img src="/assets/image/home/partners/3.png" alt="3" />
            </li>
            <li>
              <img src="/assets/image/home/partners/4.jpg" alt="4" />
            </li>
            <li>
              <img src="/assets/image/home/partners/5.png" alt="5" />
            </li>
            <li>
              <img src="/assets/image/home/partners/6.png" alt="6" />
            </li>
            <li>
              <img src="/assets/image/home/partners/7.png" alt="7" />
            </li>
            <li>
              <img src="/assets/image/home/partners/8.png" alt="8" />
            </li>
            <li>
              <img src="/assets/image/home/partners/9.png" alt="9" />
            </li>
            <li>
              <img src="/assets/image/home/partners/10.png" alt="10" />
            </li>
            <li>
              <img src="/assets/image/home/partners/11.png" alt="11" />
            </li>
            <li>
              <img src="/assets/image/home/partners/12.png" alt="12" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
