import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getGameFullImages, getGameVerticalImages, getGameTitlesEnglish, getGameTitlesJapanese, getGamePrice } from "../../api";
import "./Slideshow.scss";
import languages from "../../data/languages/languages.json";

export default function Slideshow(props: { language: string }) {
  const buy =
    props.language === "English" ? languages.English.buy : languages.日本語.buy;

  const [currentSlide, setCurrentSlide] = useState(0);

  const gamePics = useMemo(() => {
    return getGameFullImages();
  }, []);

  const gameVertPics = useMemo(() => {
    return getGameVerticalImages();
  }, []);

  const gameTitles = useMemo(() => {
    return props.language === "English"
    ? getGameTitlesEnglish()
    : getGameTitlesJapanese();
  }, [props.language]);

  useEffect(() => {
    function nextSlide() {
      if (currentSlide + 1 < gamePics.length) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }

    const interval = setInterval(() => nextSlide(), 8000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, gamePics.length]);

  function setSlide(slideNumber: number) {
    if (slideNumber > gameTitles.length - 1) {
      return;
    }
    setCurrentSlide(slideNumber);
  }

  let navigate = useNavigate();
  const slideClicked = () => {
    let path = `/game`;
    navigate(path);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-image">
        <div className="slideshow-overlay" onClick={slideClicked}>
          <h1>{getGamePrice(currentSlide)}</h1>
          <button>{buy}</button>
        </div>
        <img src={gamePics[currentSlide]} alt="game" />
      </div>
      <div className="slideshow-list-container">
        <div className="slideshow-list">
          {gameTitles.map((game, i) =>
            i === currentSlide ? (
              <div className="slideshow-list-item-container" key={i}>
                <div className="slideshow-list-item current-slide">
                  <div className="slideshow-list-item-image">
                    <img src={gameVertPics[i]} alt="" />
                  </div>
                  <div className="slideshow-list-item-text-section">
                    <div className="slideshow-list-item-title">
                      <h1>{game}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="slideshow-list-item-container" key={i}>
                <div
                  className="slideshow-list-item"
                  onClick={setSlide.bind(null, i)}
                >
                  <div className="slideshow-list-item-image">
                    <img src={gameVertPics[i]} alt="" />
                  </div>
                  <div className="slideshow-list-item-text-section">
                    <div className="slideshow-list-item-title">
                      <h1>{game}</h1>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
