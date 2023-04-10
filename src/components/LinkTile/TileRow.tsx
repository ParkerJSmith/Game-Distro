import React from 'react';
import './TileRow.scss';
import LinkTile from './LinkTile';

export default function TileRow() {
  return (
    <div className="link-tile-row-container">
      <LinkTile link=""/>
      <LinkTile link=""/>
      <LinkTile link=""/>
    </div>
  )
}
