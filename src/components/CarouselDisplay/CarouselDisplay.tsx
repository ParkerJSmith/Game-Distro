import React, { useState, useEffect } from "react";
import leftArrow from "../../images/leftarrow2.png";
import rightArrow from "../../images/rightarrow2.png";
import test from "../../images/baby_parker_clicker_vert.png";
import test1 from "../../images/tactical_shooter-engine_vert.png";
import test2 from "../../images/revenge_of_geospace_vert.png";
import test3 from "../../images/mortal_betrayal_vert.png";
import test4 from "../../images/baby_parker_clicker_vert.png";
import test5 from "../../images/tactical_shooter-engine_vert.png";
import test6 from "../../images/revenge_of_geospace.png";
import test7 from "../../images/mortal_betrayal_vert.png";
import test8 from "../../images/baby_parker_clicker_vert.png";
import test9 from "../../images/tactical_shooter-engine_vert.png";
import test10 from "../../images/revenge_of_geospace_vert.png";
import "./CarouselDisplay.scss";

class DoubleLinkedListNode {
  value: string;
  nextNode: DoubleLinkedListNode;
  lastNode: DoubleLinkedListNode;
  constructor(value: string) {
    this.value = value;
    this.nextNode = this;
    this.lastNode = this;
  }
}

export default function CarouselDisplay() {
  const [hoveredGame, setHoveredGame] = useState(-1);
  const [currentNode, setCurrentNode] = useState(
    new DoubleLinkedListNode(test)
  );

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    function handleResize() {
      document.getElementById("carousel-left-block")!.style.left =
        "calc(-30vw + " +
        document.getElementById("left-carousel-button")!.offsetWidth +
        "px)";
    }
    handleResize();
    window.addEventListener("resize", handleResize);

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
    let firstNode = new DoubleLinkedListNode(gamePics[0]);
    let lastNode = firstNode;
    for (let i = 1; i < gamePics.length; i++) {
      let tempNode = new DoubleLinkedListNode(gamePics[i]);
      lastNode.nextNode = tempNode;
      tempNode.lastNode = lastNode;
      lastNode = tempNode;
    }
    lastNode.nextNode = firstNode;
    firstNode.lastNode = lastNode;

    for (let i = 0; i < 5; i++) {
      firstNode = firstNode.lastNode;
    }
    setCurrentNode(firstNode);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getCurrentItems(): string[] {
    let currentItems = [];
    let traversedNode = currentNode;
    for (let i = 0; i < 15; i++) {
      currentItems.push(traversedNode.value);
      traversedNode = traversedNode.nextNode;
    }
    return currentItems;
  }

  async function leftArrowPress() {
    document
      .getElementById("carousel-games-list")
      ?.classList.add("carousel-left-animation");
    await delay(490);
    document
      .getElementById("carousel-games-list")
      ?.classList.remove("carousel-left-animation");
    let traversedNode = currentNode;
    for (let i = 0; i < 6; i++) {
      traversedNode = traversedNode.lastNode;
    }
    setCurrentNode(traversedNode);
  }

  async function rightArrowPress() {
    document
      .getElementById("carousel-games-list")
      ?.classList.add("carousel-right-animation");
    await delay(490);
    document
      .getElementById("carousel-games-list")
      ?.classList.remove("carousel-right-animation");
    let traversedNode = currentNode;
    for (let i = 0; i < 6; i++) {
      traversedNode = traversedNode.nextNode;
    }
    setCurrentNode(traversedNode);
  }

  function gameHover(listIndex: number) {
    setHoveredGame(listIndex);
  }

  function removeHover() {
    setHoveredGame(-1);
  }

  return (
    <div className="carousel-container">
      <div className="left-carousel-arrow">
        <div className="carousel-left-block" id="carousel-left-block" />
        <button onClick={leftArrowPress} id="left-carousel-button">
          <img src={leftArrow} alt="" />
        </button>
      </div>
      <div className="carousel-games-area" id="carousel-games-area"></div>
      <div className="right-carousel-arrow">
        <div className="carousel-right-block" id="carousel-right-block" />
        <button onClick={rightArrowPress}>
          <img src={rightArrow} alt="" />
        </button>
      </div>
      <div className="carousel-games-list" id="carousel-games-list">
        {getCurrentItems().map((game: string, i: number) =>
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
    </div>
  );
}
