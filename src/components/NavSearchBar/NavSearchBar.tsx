import React from "react";
import searchIcon from "../../images/search-icon.svg";
import "./NavSearchBar.scss";

export default function NavSearchBar() {
  return (
    <div className="nav-search-bar-container">
      <div className="nav-search-bar">
      <div className="nav-search-link-container">
          <div className="nav-search-link-item">
            <a href="store">Home</a>
          </div>
          <div className="nav-search-link-item">
            <a href="store/new">New</a>
          </div>
          <div className="nav-search-link-item">
            <a href="store/top">Top Sellers</a>
          </div>
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="Search" />
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
