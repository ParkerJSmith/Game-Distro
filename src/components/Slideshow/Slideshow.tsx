import React, { useEffect } from "react";
import test from "../../images/test.jpg";
import test1 from "../../images/test1.png";
import test2 from "../../images/test2.png";
import test3 from "../../images/test3.png";
import test4 from "../../images/test4.png";
import silly from "../../images/Minecraft_cover.png";
import "./Slideshow.scss";

export default function Slideshow() {
  const games = [
    "Minecraft",
    "The Last of Us Part One",
    "Counter-strike: Global Offensive",
    "The Legend of Zelda: Ocarina of Time",
    "Grand Theft Auto V",
  ];
  const gamePics = [test, test1, test2, test3, test4];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  function setSlide(slideNumber: number) {
    if (slideNumber > games.length - 1) {
      return;
    }
    setCurrentSlide(slideNumber);
  }

  useEffect(() => {
    function nextSlide() {
      if (currentSlide + 1 < gamePics.length) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }

    const interval = setInterval(() => nextSlide(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, gamePics.length]);

  return (
    <div className="slideshow-container">
      <div className="slideshow-image">
        <div className="slideshow-overlay">
            <h1>CAD $69.99</h1>
            <button>BUY NOW</button>
        </div>
        <img src={gamePics[currentSlide]} alt="game" />
      </div>
      <div className="slideshow-list-container">
        <div className="slideshow-list">
          {games.map((game, i) =>
            i === currentSlide ? (
              <div className="slideshow-list-item-container" key={i}>
                <div className="slideshow-list-item current-slide">
                  <div className="slideshow-list-item-image">
                    <img src={silly} alt="" />
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
                    <img src={silly} alt="" />
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
