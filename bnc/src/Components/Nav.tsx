import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [menuActive, setMenuActive] = useState<number>(0);

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
                회사소개
              </span>
            </li>
            <li className={menuActive === 2 ? "active" : ""}>
              <span
                onClick={() => {
                  navigate("/service");
                  setMenuActive(2);
                }}
              >
                사업영역
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  navigate("/inqury");
                  setMenuActive(3);
                }}
              >
                견적요청
              </span>
            </li>
            <li>
              <span>오시는길</span>
            </li>
            <li>
              {" "}
              <DropdownButton id="dropdown-basic-button" title="Language">
                <Dropdown.Item>한국어</Dropdown.Item>
                <Dropdown.Item>English</Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
