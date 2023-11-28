import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../Locales/i18n";

function Nav() {
  const [menuActive, setMenuActive] = useState<number>(0);
  const [navFixed, setNavFixed] = useState<string>("");

  // 햄버거메뉴
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
    document.querySelector("body")?.classList.remove("fixed");
  };
  const handleShow = () => {
    setShow(true);
    document.querySelector("body")?.classList.add("fixed");
  };

  // Translation
  const { t } = useTranslation();

  // 언어 변경하기
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setNavFixed("fixed");
      } else {
        setNavFixed("");
      }
    });
  }, []);

  let navigate = useNavigate();
  return (
    <div className={`nav ${navFixed}`}>
      <div className="nav-inner">
        {/* 로고박스 */}
        <div className="logo-box">
          <img
            src="/assets/image/home-logo-white.png"
            alt="logo"
            onClick={() => {
              navigate("/");
              setMenuActive(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
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
                  window.scrollTo({ top: 0, behavior: "smooth" });
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
                  window.scrollTo({ top: 0, behavior: "smooth" });
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
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t(`nav.quotes`)}
              </span>
            </li>
            <li className={menuActive === 4 ? "active" : ""}>
              <span
                onClick={() => {
                  navigate("/location");
                  setMenuActive(4);
                  window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div className="hambeger-menu">
          <div className="hamberger-bar" onClick={handleShow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {show && (
          <div className="hamberger-gnb">
            <div className="hamberger-inner">
              <div className="close-btn">
                <span className="close" onClick={handleClose}>
                  ✕
                </span>
              </div>
              <div className="hamberger-menu-box">
                <ul>
                  <li>
                    <span
                      onClick={() => {
                        navigate("/about");
                        setShow(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        document
                          .querySelector("body")
                          ?.classList.remove("fixed");
                      }}
                    >
                      {t(`nav.introduction`)}
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        navigate("/service");
                        setShow(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        document
                          .querySelector("body")
                          ?.classList.remove("fixed");
                      }}
                    >
                      {t(`nav.services`)}
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        navigate("/inqury");
                        setShow(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        document
                          .querySelector("body")
                          ?.classList.remove("fixed");
                      }}
                    >
                      {t(`nav.quotes`)}
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        navigate("/location");
                        setShow(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        document
                          .querySelector("body")
                          ?.classList.remove("fixed");
                      }}
                    >
                      {t(`nav.contact`)}
                    </span>
                  </li>
                  <li className="hamberger-lan">
                    <span
                      onClick={() => {
                        changeLanguage("ko");
                      }}
                    >
                      한국어
                    </span>
                    <span
                      onClick={() => {
                        changeLanguage("en");
                      }}
                    >
                      English
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
