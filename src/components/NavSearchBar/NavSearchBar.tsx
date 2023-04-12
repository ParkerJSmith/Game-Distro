import React from "react";
import searchIcon from "../../images/search-icon.svg";
import "./NavSearchBar.scss";
import languages from "../../languages/languages.json";

export default function NavSearchBar(props: { language: string }) {
  const home =
    props.language === "English"
      ? languages.English.home
      : languages.日本語.home;

  const newGames =
    props.language === "English" ? languages.English.new : languages.日本語.new;

  const topSellers =
    props.language === "English"
      ? languages.English.topSellers
      : languages.日本語.topSellers;

  const search =
    props.language === "English"
      ? languages.English.search
      : languages.日本語.search;

  return (
    <div className="nav-search-bar-container">
      <div className="nav-search-bar">
        <div className="nav-search-link-container">
          <div className="nav-search-link-item">
            <a href="store">{home}</a>
          </div>
          <div className="nav-search-link-item">
            <a href="store/new">{newGames}</a>
          </div>
          <div className="nav-search-link-item">
            <a href="store/top">{topSellers}</a>
          </div>
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder={search} />
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
