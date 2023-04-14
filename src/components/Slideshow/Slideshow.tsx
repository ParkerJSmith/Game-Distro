import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import test from "../../images/baby_parker_clicker.png";
import test1 from "../../images/tactical_shooter-engine.png";
import test2 from "../../images/revenge_of_geospace.png";
import test3 from "../../images/mortal_betrayal3.png";
import testVert from "../../images/baby_parker_clicker_vert.png";
import testVert1 from "../../images/tactical_shooter-engine_vert.png";
import testVert2 from "../../images/revenge_of_geospace_vert.png";
import testVert3 from "../../images/mortal_betrayal_vert.png";
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
          "Mortal Betrayal",
          "missingno",
        ]
      : [
          "ベイビー・パーカー・クリッカー",
          "タクティクル・シューター・エンジン",
          "ジオスペースの復讐",
          "必滅の裏切り",
          "missingno",
        ];
  const gamePics = [test, test1, test2, test3, test];
  const gameVertPics = [testVert, testVert1, testVert2, testVert3, testVert];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  function setSlide(slideNumber: number) {
    if (slideNumber > games.length - 1) {
      return;
    }
    setCurrentSlide(slideNumber);
  }

  let navigate = useNavigate();
  const slideClicked = () => {
    let path = `/game`;
    navigate(path);
  };

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

  return (
    <div className="slideshow-container">
      <div className="slideshow-image">
        <div className="slideshow-overlay" onClick={slideClicked}>
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
