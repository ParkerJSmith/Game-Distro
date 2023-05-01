import React, { useState, useEffect } from "react";
import leftArrow from "../../images/leftarrow2.png";
import rightArrow from "../../images/rightarrow2.png";
import "./CarouselDisplay.scss";
import { getGameVerticalImages, getGameFullImage, getGameDiscount } from "api";

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
    new DoubleLinkedListNode(getGameFullImage(0))
  );
  const [movingState, setMovingState] = useState("");

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    function handleResize() {
      document.getElementById("carousel-left-block")!.style.left =
        "calc(-30vw + " +
        document.getElementById("left-carousel-button")!.offsetWidth +
        "px)";
      document.getElementById("carousel-games-list-container")!.style.left =
        "-" +
        (window.innerWidth -
          document.getElementById("content-container")!.offsetWidth) /
          2 +
        "px";
      const resize = setTimeout(() => {
        document.getElementById("carousel-games-list")!.style.marginLeft =
          "-" +
          document.getElementById("carousel-games-list")!.offsetWidth / 2 +
          "px";
      }, 200);

      return () => clearTimeout(resize);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    const gamePics = getGameVerticalImages().concat(getGameVerticalImages());
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
    setMovingState("carousel-left-animation");
    await delay(490);
    setMovingState("");
    let traversedNode = currentNode;
    for (let i = 0; i < 5; i++) {
      traversedNode = traversedNode.lastNode;
    }
    setCurrentNode(traversedNode);
  }

  async function rightArrowPress() {
    setMovingState("carousel-right-animation");
    await delay(490);
    setMovingState("");
    let traversedNode = currentNode;
    for (let i = 0; i < 5; i++) {
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
      <div
        className="carousel-games-list-container"
        id="carousel-games-list-container"
      >
        <div
          className={
            (hoveredGame <= 4
              ? "carousel-games-list"
              : hoveredGame === 5
              ? "carousel-games-list hovering-first-game-list"
              : hoveredGame === 9
              ? "carousel-games-list hovering-last-game-list"
              : "carousel-games-list hovering-game-list") +
            " " +
            movingState
          }
          id="carousel-games-list"
        >
          {getCurrentItems().map((game: string, i: number) => (
            <div
              className={
                (i === 5 ? " first-game" : "") +
                (i === 9 ? "last-game" : "") +
                (i !== 5 && i !== 9 ? "carousel-games-list-item" : "") +
                (hoveredGame === i ? " hovered-game" : "")
              }
              key={i}
            >
              <div
                className="carousel-games-list-overlay"
                onMouseEnter={gameHover.bind(null, i)}
                onMouseLeave={removeHover}
              >
                <h3>-{getGameDiscount(i - 5)}%</h3>
              </div>
              <img src={game} alt="a game" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
