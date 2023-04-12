import React, { useEffect } from "react";
import test from "../../images/baby_parker_clicker.png";
import test1 from "../../images/tactical_shooter-engine.png";
import test2 from "../../images/revenge_of_geospace.png";
import test3 from "../../images/test3.png";
import test4 from "../../images/test4.png";
import silly from "../../images/Minecraft_cover.png";
import testVert from "../../images/baby_parker_clicker_vert.png";
import testVert1 from "../../images/tactical_shooter-engine_vert.png";
import testVert2 from "../../images/revenge_of_geospace_vert.png";
import "./Slideshow.scss";
import languages from "../../languages/languages.json";

export default function Slideshow(props: { language: string }) {
  const buy =
    props.language === "English" ? languages.English.buy : languages.日本語.buy;

  const games =
    props.language === "English"
      ? [
          "Baby Parker Clicker",
          "Tactical Shooter Engine",
          "Revenge of Geospace",
          "The Legend of Zelda: Ocarina of Time",
          "Grand Theft Auto V",
        ]
      : [
          "ベイビー・パーカー・クリッカー",
          "タクティクル・シューター・エンジン",
          "ジオスペースの復讐",
          "ゼルダの伝説 時のオカリナ",
          "グランド・セフト・オートV",
        ];
  const gamePics = [test, test1, test2, test3, test4];
  const gameVertPics = [testVert, testVert1, testVert2, silly, silly];

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
          <button>{buy}</button>
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
