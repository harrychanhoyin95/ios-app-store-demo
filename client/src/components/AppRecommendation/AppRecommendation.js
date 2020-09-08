import React, { useEffect } from 'react';
import Slider from "react-slick";

import './AppRecommendation.scss';

const AppRecommendation = ({
  freeApps,
  grossingApps
}) => {
  console.log("freeApps.length", freeApps.length)

  return (
    <div className="app-recommendation_container">
      <div className="app-recommendation_heading">推介</div>
      <Slider
        arrows={false}
        dots={false}
        infinite={false}
        slidesToShow={3.1}
        swipeToSlide
        ref={c => {
          if (c) return c.slickGoTo(freeApps.length / 10 - 1)
        }}
      >
        {grossingApps.map(apps => {
          return (
            <div key={apps.title} className="app-recommendation_app-container">
              <img
                src={apps.images.artworkUrl100} 
                alt={apps.title}
                className="app-recommendation_image"
              />
              <div className="app-recommendation_title">{apps.title}</div>
              <div className="app-recommendation_category">{apps.category}</div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default AppRecommendation;
