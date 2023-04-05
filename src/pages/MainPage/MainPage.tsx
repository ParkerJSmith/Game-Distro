import React from 'react';
import NavSearchBar from '../../components/NavSearchBar/NavSearchBar';
import Slideshow from '../../components/Slideshow/Slideshow';

export default function MainPage() {
  return (
    <div className="content-container">
      <NavSearchBar/>
      <Slideshow/>
    </div>
  )
}
