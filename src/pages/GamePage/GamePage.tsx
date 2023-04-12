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
      <div className="game-info-container">
        <video src={video} controls />
        <div className="game-description">
          <img src={test} alt="game" className="game-description-image" />
          <div className="game-description-icon-container">
            <div className="thumb-icon-container">
              <img src={thumbsUp} className="thumbs-up-icon" alt="game" />
            </div>
            <div className="rating-container">
              <span>99% Positive Reviews</span>
            </div>
            <div className="windows-icon-container">
              <img src={windowsLogo} className="windows-icon" alt="game" />
            </div>
          </div>
          <div className="game-description-buttons">
            <button className="game-description-buy-button">BUY NOW</button>
            <button className="game-description-sub-buttons">
              ADD TO CART
            </button>
            <button className="game-description-sub-buttons">WISHLIST</button>
          </div>
        </div>
      </div>
      <p>
        This is the story of a girl. Who cried a river and drowned the whole
        world and she looked so sad in photographs but I abolutely love her,
        when she smiles.
      </p>
    </div>
  );
}
