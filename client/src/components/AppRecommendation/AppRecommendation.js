import React from 'react';
import Slider from "react-slick";
import { isMobileOnly, isTablet, isBrowser } from 'react-device-detect'

import './AppRecommendation.scss';

const AppRecommendation = ({
  freeApps,
  grossingApps
}) => {
  const getSliderToShow = () => {
    if (isMobileOnly) return 3.1
    if (isTablet) return 4.4
    if (isBrowser) return 6.1
    return 3.1
  }

  return (
    <div className="app-recommendation_container">
      <div className="app-recommendation_heading">推介</div>
      <Slider
        arrows={false}
        dots={false}
        infinite={false}
        slidesToShow={getSliderToShow()}
        swipeToSlide
        ref={c => {
          if (c) return c.slickGoTo(freeApps.length / 10 - 1)
        }}
      >
        {grossingApps.map(apps => {
          return (
            <a 
              key={apps.title} 
              className="app-recommendation_app-container" 
              href={apps.link} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apps.images.artworkUrl100} 
                alt={apps.title}
                className="app-recommendation_image"
              />
              <div className="app-recommendation_title">{apps.title}</div>
              <div className="app-recommendation_category">{apps.category}</div>
            </a>
          )
        })}
      </Slider>
    </div>
  )
}

export default AppRecommendation;
