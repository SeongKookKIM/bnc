import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <div className="logo-box">
          <img src="/assets/image/logo.png" alt="logo" />
        </div>
        <nav className="gnb">
          <ul>
            <li>
              <span>회사소개</span>
            </li>
            <li>
              <span>사업영역</span>
            </li>
            <li>
              <span>견적요청</span>
            </li>
            <li>
              <span>오시는길</span>
            </li>
            <li>
              {" "}
              <DropdownButton id="dropdown-basic-button" title="한국어">
                <Dropdown.Item>한국어</Dropdown.Item>
                <Dropdown.Item>영어</Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
