import React from "react";
import leftArrow from "../../images/leftarrow2.png";
import rightArrow from "../../images/rightarrow2.png";
import test from "../../images/Minecraft_cover.png";
import test1 from "../../images/testvert1.png";
import test2 from "../../images/testvert2.png";
import test3 from "../../images/testvert3.png";
import test4 from "../../images/testvert4.png";
import test5 from "../../images/testvert5.png";
import test6 from "../../images/testvert6.png";
import test7 from "../../images/testvert7.png";
import test8 from "../../images/testvert8.png";
import test9 from "../../images/testvert9.png";
import test10 from "../../images/testvert10.png";
import "./CarouselDisplay.scss";

export default function CarouselDisplay() {
  const gamePics = [
    test,
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
    test9,
    test10,
  ];

  const [startIndex, setStartIndex] = React.useState(0);
  const [hoveredGame, setHoveredGame] = React.useState(-1);

  function getCurrentItems() {
    let returnValue = [];
    if (startIndex + 5 < gamePics.length) {
      for (let i = 0; i < 5; i++) {
        returnValue.push(gamePics[startIndex + i]);
      }
      return returnValue;
    } else {
      let addedItems = 0;
      while (startIndex + addedItems < gamePics.length) {
        returnValue.push(gamePics[startIndex + addedItems]);
        addedItems++;
      }
      for (let i = 0; i < 5 - addedItems; i++) {
        returnValue.push(gamePics[i]);
      }
      return returnValue;
    }
  }

  function leftArrowPress() {
    if (startIndex - 5 < 0) {
      setStartIndex(gamePics.length - (5 - startIndex));
    } else {
      setStartIndex(startIndex - 5);
    }
  }

  function rightArrowPress() {
    if (startIndex + 5 > gamePics.length - 1) {
      setStartIndex(5 - (gamePics.length - startIndex));
    } else {
      setStartIndex(startIndex + 5);
    }
  }

  function gameHover(listIndex: number) {
    console.log("ListIndex" + listIndex);
    console.log("Before hover: " + hoveredGame);
    setHoveredGame(listIndex);
    console.log("After hover: " + hoveredGame);
  }

  function removeHover() {
    setHoveredGame(-1);
  }

  return (
    <div className="carousel-container">
      <div className="left-carousel-arrow">
        <div className="carousel-left-block" />
        <button onClick={leftArrowPress}>
          <img src={leftArrow} alt="" />
        </button>
      </div>
      <div className="carousel-games-list">
        {getCurrentItems().map((game, i) =>
          hoveredGame === i ? (
            <div className="carousel-games-list-item hovered-game" key={i}>
              <div
                className="carousel-games-list-overlay"
                onMouseEnter={gameHover.bind(null, i)}
                onMouseLeave={removeHover}
              >
                <h3>-{Math.floor(Math.random() * 100) + 1}%</h3>
              </div>
              <img src={game} alt="a game" />
            </div>
          ) : (
            <div className="carousel-games-list-item" key={i}>
              <div
                className="carousel-games-list-overlay"
                onMouseEnter={gameHover.bind(null, i)}
                onMouseLeave={removeHover}
              >
                <h3>-{Math.floor(Math.random() * 100) + 1}%</h3>
              </div>
              <img src={game} alt="a game" />
            </div>
          )
        )}
      </div>
      <div className="right-carousel-arrow">
        <div className="carousel-right-block" />
        <button onClick={rightArrowPress}>
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
}
