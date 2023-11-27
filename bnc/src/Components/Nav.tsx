import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../Locales/i18n";

function Nav() {
  const [menuActive, setMenuActive] = useState<number>(0);

  // Translation
  const { t } = useTranslation();

  // 언어 변경하기
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  let navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-inner">
        {/* 로고박스 */}
        <div className="logo-box">
          <img
            src="/assets/image/home-logo-white.png"
            alt="logo"
            onClick={() => {
              navigate("/");
              setMenuActive(0);
            }}
          />
        </div>
        {/* GNB */}
        <nav className="gnb">
          <ul>
            <li className={menuActive === 1 ? "active" : ""}>
              <span
                onClick={() => {
                  navigate("/about");
                  setMenuActive(1);
                }}
              >
                {t(`nav.introduction`)}
              </span>
            </li>
            <li className={menuActive === 2 ? "active" : ""}>
              <span
                onClick={() => {
                  navigate("/service");
                  setMenuActive(2);
                }}
              >
                {t(`nav.services`)}
              </span>
            </li>
            <li className={menuActive === 3 ? "active" : ""}>
              <span
                onClick={() => {
                  navigate("/inqury");
                  setMenuActive(3);
                }}
              >
                {t(`nav.quotes`)}
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  navigate("/location");
                  setMenuActive(4);
                }}
              >
                {t(`nav.contact`)}
              </span>
            </li>
            <li>
              {" "}
              <DropdownButton id="dropdown-basic-button" title="Languages">
                <Dropdown.Item
                  onClick={() => {
                    changeLanguage("ko");
                  }}
                >
                  한국어
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    changeLanguage("en");
                  }}
                >
                  English
                </Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
