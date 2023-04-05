import React from "react";
import "./TopBanner.scss";
import logo from "../../images/logo_white.svg";
import DropMenu from "../DropMenu/DropMenu";

export default function TopBanner() {
  return (
    <div className="top-banner-container">
      <div className="top-banner-flex-container">
        <div className="banner-logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="link-container">
          <a href="store">STORE</a>
          <a href="about">ABOUT</a>
          <a href="support">SUPPORT</a>
        </div>
        <DropMenu name='Languages' options={["English", "日本語"]}/>
      </div>
    </div>
  );
}
