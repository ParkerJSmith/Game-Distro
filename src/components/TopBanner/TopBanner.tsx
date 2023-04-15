import React from "react";
import "./TopBanner.scss";
import logo from "../../images/logo_white.svg";
import DropMenu from "../DropMenu/DropMenu";
import languages from "../../languages/languages.json";

export default function TopBanner(props: {
  languageSelect: any;
  language: string;
}) {
  const store =
    props.language === "English"
      ? languages.English.store
      : languages.日本語.store;

  const about =
    props.language === "English"
      ? languages.English.about
      : languages.日本語.about;

  const support =
    props.language === "English"
      ? languages.English.support
      : languages.日本語.support;

  const languageDropdownName =
    props.language === "English"
      ? languages.English.languages
      : languages.日本語.languages;

  return (
    <div className="top-banner-container">
      <div className="top-banner-flex-container">
        <div className="banner-logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="link-container">
          <a href="/Game-Distro/store">{store}</a>
          <a href="/Game-Distro/about">{about}</a>
          <a href="/Game-Distro/support">{support}</a>
        </div>
        <DropMenu
          name={languageDropdownName}
          options={["English", "日本語"]}
          setOptionFunction={props.languageSelect}
        />
      </div>
    </div>
  );
}
