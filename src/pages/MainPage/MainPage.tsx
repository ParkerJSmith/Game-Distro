import React from 'react';
import NavSearchBar from '../../components/NavSearchBar/NavSearchBar';
import Slideshow from '../../components/Slideshow/Slideshow';
import CarouselDisplay from '../../components/CarouselDisplay/CarouselDisplay';
import TileRow from '../../components/LinkTile/TileRow';
import './MainPage.scss';

export default function MainPage() {
  return (
    <div className="content-container">
      <NavSearchBar/>
      <Slideshow/>
      <div className="on-sale-section">
        <h2>On Sale</h2>
        <CarouselDisplay/>
      </div>
      <div className="coming-soon-section">
        <h2>Coming Soon</h2>
        <TileRow/>
      </div>
    </div>
  )
}
