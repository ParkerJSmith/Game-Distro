import React from "react";
import test from "../../images/baby_parker_clicker.png";

export default function LinkTile(props: { link: string }) {
  return (
    <a className="link-tile-container" href={props.link}>
      <div className="link-tile-img-section">
        <img src={test} alt="" />
      </div>
      <div className="link-tile-text-section">
        <h3>Game Title</h3>
        <p>
          Battle through the silly little swarms of enemies to best your
          childhood friend in rival combat for all the ages. If you don't think
          that is radically awesome, well, I don't know what to fricking tell
          ya.
        </p>
        <h4>CAD $69.99</h4>
      </div>
    </a>
  );
}
