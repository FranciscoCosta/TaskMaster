import React from "react";
import Image from "next/image";

import "./Header.scss";
function Header() {
  return (
    <div className="Header">
      <div className="Header__logo-container">
        <div className="Header__logo-img">
          <Image
            src="/logo_wBg.png"
            alt="logo"
            objectFit="contain"
            fill
            className="Header__logo"
          />
        </div>
        <h2 className="Header__logo-title"><span className="color-blue">Task</span><span className="color-orange">M</span>aster</h2>
      </div>
      <div className="Header__user">

        <div className="Header__search">

        </div>

        <div className="Header__user-container">
          <div className="Header__user-img">

          </div>
          <div className="Header__user-name"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
