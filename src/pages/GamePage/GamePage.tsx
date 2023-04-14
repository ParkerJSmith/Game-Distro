import React from "react";
import NavSearchBar from "../../components/NavSearchBar/NavSearchBar";
import "./GamePage.scss";
import video from "../../videos/pbjt.mp4";
import test from "../../images/tactical_shooter-engine.png";
import windowsLogo from "../../images/windowslogo.png";
import thumbsUp from "../../images/thumbs_up_icon.png";

export default function GamePage(props: { language: string }) {
  return (
    <div className="content-container">
      <NavSearchBar language={props.language} />
      <h1>Tactical Shooter Engine</h1>
      <div className="game-video-purchase-container">
        <video src={video} controls />
        <div className="game-purchase-container">
          <img src={test} alt="game" className="game-purchase-image" />
          <div className="game-purchase-icon-container">
            <div className="thumb-icon-container">
              <img src={thumbsUp} className="thumbs-up-icon" alt="game" />
            </div>
            <div className="rating-container">
              <span>99% Positive Reviews</span>
            </div>
            <div className="os-icon-container">
              <img src={windowsLogo} className="os-icon" alt="game" />
            </div>
          </div>
          <div className="game-purchase-info-container">
            <div className="info-container">
              <h4 className="info-descriptor">Developer:</h4>
              <h4 className="info-information">Parker Smith</h4>
            </div>
            <div className="info-container">
              <h4 className="info-descriptor">Publisher:</h4>
              <h4 className="info-information">Parker Smith</h4>
            </div>
            <div className="info-container">
              <h4 className="info-descriptor">Release date:</h4>
              <h4 className="info-information">30/10/23</h4>
            </div>
          </div>
          <div className="game-purchase-buttons">
            <button className="game-purchase-buy-button">BUY NOW</button>
            <button className="game-purchase-sub-buttons">
              ADD TO CART
            </button>
            <button className="game-purchase-sub-buttons">WISHLIST</button>
          </div>
        </div>
      </div>
      <div className="game-description-container">
        <p>
          Tactical Shooter Engine is an OpenGL-based first-person game engine
          written in C++ and developed by Parker Smith. The engine currently
          implements many features essential to the tactical shooter genre such
          as gravity and collision physics, hitscan collision detection, weapon
          dropping/picking up, and bombsites/bomb planting to name a few. From a
          graphical standpoint the engine also implements the ability to add
          post-processing effects such as anti-aliasing.
        </p>
        <p>The engine is currently a work-in-progress-on-indefinite-hold.</p>
      </div>
      <h2>System Requirements</h2>
      <div className="system-requirements-container">
        <div className="requirements-item">
          <h3>Mimumum:</h3>
          <div className="requirement-listing">
            <h3 className="requirement-category">OS</h3>
            <h3 className="requirement-fulfiller">Windows 10</h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Processor</h3>
            <h3 className="requirement-fulfiller">
              Intel Core i5-7500 or AMD Ryzen 5 1600
            </h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Memory</h3>
            <h3 className="requirement-fulfiller">4 GB RAM</h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Storeage</h3>
            <h3 className="requirement-fulfiller">5GB</h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Graphics API</h3>
            <h3 className="requirement-fulfiller">OpenGL</h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Graphics</h3>
            <h3 className="requirement-fulfiller">
              NVIDIA GeForce GTX 1030 or AMD Radeon RX 570
            </h3>
          </div>
        </div>
        <div className="requirements-item">
          <h3>Recommended</h3>
          <div className="requirement-listing">
            <h3 className="requirement-category">OS</h3>
            <h3 className="requirement-fulfiller">Windows 10</h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Processor</h3>
            <h3 className="requirement-fulfiller">
              Intel Core i7-10700 or AMD Ryzen 5 5600
            </h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Memory</h3>
            <h3 className="requirement-fulfiller">4 GB RAM</h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Storeage</h3>
            <h3 className="requirement-fulfiller">5GB (SSD Recommended)</h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Graphics API</h3>
            <h3 className="requirement-fulfiller">OpenGL</h3>
          </div>
          <div className="requirement-listing">
            <h3 className="requirement-category">Graphics</h3>
            <h3 className="requirement-fulfiller">
              NVIDIA GeForce GTX 1060 or AMD Radeon RX 590
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
