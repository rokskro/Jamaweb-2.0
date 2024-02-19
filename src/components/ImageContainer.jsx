import React from 'react';
import FishImage from '/fish-image.png';
import NexusImage from '/nexus-image.png';
import SenorImage from '/senor-image.png';
import JoffeeImage from '/joffee-image.png';
import '../css/ImageContainer.css';


export default function ImageContainer(){
    return(
        <div className="container">
        <div className="image">
          <img src={FishImage}/>
        </div>
        <div className="image">
          <img src={NexusImage} />
        </div>
        <div className="image">
          <img src={SenorImage}/>
        </div>
        <div className="image">
          <img src={JoffeeImage} />
        </div>
      </div>
    );
}