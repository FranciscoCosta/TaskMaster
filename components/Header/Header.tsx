'use client'

import React from "react";
import Image from "next/image";




import { FaMagnifyingGlass } from 'react-icons/fa6';

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

        <form className="Header__search">
          <input type="text" className="Header__search-input" placeholder="Procurar" />
          <button className="Header__search-btn" type="submit">
            <FaMagnifyingGlass />
          </button>
        </form>

        <div className="Header__user-container">
            <h3 className="Header__user-name">Francisco Costa</h3>
            <div className="Header__user-img">
              <Image src="/FC.png" alt="user" fill />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
