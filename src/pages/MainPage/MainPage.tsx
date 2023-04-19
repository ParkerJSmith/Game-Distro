import React from "react";
import NavSearchBar from "../../components/NavSearchBar/NavSearchBar";
import Slideshow from "../../components/Slideshow/Slideshow";
import CarouselDisplay from "../../components/CarouselDisplay/CarouselDisplay";
import TileRow from "../../components/LinkTile/TileRow";
import "./MainPage.scss";
import languages from "../../data/languages/languages.json";

export default function MainPage(props: { language: string }) {
  const onSale =
    props.language === "English"
      ? languages.English.onSale
      : languages.日本語.onSale;

  const comingSoon =
    props.language === "English"
      ? languages.English.comingSoon
      : languages.日本語.comingSoon;
  return (
    <div className="content-container" id="content-container">
      <NavSearchBar language={props.language} />
      <Slideshow language={props.language}/>
      <div className="on-sale-section">
        <h2>{onSale}</h2>
        <CarouselDisplay />
      </div>
      <div className="coming-soon-section">
        <h2>{comingSoon}</h2>
        <TileRow />
      </div>
    </div>
  );
}
