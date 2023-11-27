import React from "react";
import HomeSlide from "../Components/HomeSlide";

function Home() {
  return (
    <section className="home">
      <div className="home-banner">
        <HomeSlide />
      </div>
      <div className="inner">
        <div className="home-about">
          <h3>
            Global Reach, Customized Solutions.<span>LEARN MORE{">"}</span>
          </h3>
          <div className="home-about-content-box">
            <div className="home-about-content">
              <p>
                EMO Trans has been implementing customized global logistics
                solutions for over 50 years. With 250 offices in 120 countries
                at your fingertips, you can reach every corner of the globe
                right from your front door. Nimble yet stable, we’re proud to
                deliver the
              </p>
            </div>
            <div className="home-about-content">
              <p>
                personalized service of a privately held company with the robust
                infrastructure of a multi- national leader. Trust the expertise,
                ingenuity and commitment of the EMO Trans team for creative,
                customized logistics to solve your most complex cargo
                challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="home-link">
          <div className="home-introduction">
            <span>회사소개</span>
          </div>
          <div className="home-estimate">
            <span>사업견적</span>
          </div>
          <div className="home-directions">
            <span>오시는길</span>
          </div>
        </div>

        <div className="home-partners">
          <p>BNC LOGITICS와 함께하는 그룹</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
