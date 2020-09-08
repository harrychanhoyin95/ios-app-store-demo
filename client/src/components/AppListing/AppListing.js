import React from 'react';
import Rating from 'react-rating'
import LazyLoad from 'react-lazyload';

import './AppListing.scss';

const AppListing = ({
  appsInfo
}) => {
  console.log("appsInfo", appsInfo)

  return (
    <div  className="app-listing_container">
      {appsInfo.map((apps, index) => {
        return (
          <LazyLoad key={apps.title} height={100}>
            <div className="app-listing_apps-container">
              <div className="app-listing_apps-container-border-bottom">
                <div className="app-listing_index">{index + 1}</div>
                <img
                  src={apps.images.artworkUrl100} 
                  alt={apps.title}
                  className={`app-listing_image ${index % 2 === 0 ? "odd-image" : "even-image" }`}
                />
                <div className="app-listing_content">
                  <div className="app-listing_title">{apps.title}</div>
                  <div className="app-listing_category">{apps.category}</div>
                  <div className="app-listing_rating">
                    <Rating
                      readonly
                      quiet
                      initialRating={apps.rating}
                      emptySymbol={<i className="far fa-star empty-star"></i>}
                      fullSymbol={<i className="fas fa-star full-star"></i>}
                    />
                    <span className="app-listing_rating-count">({apps.ratingCount})</span>
                  </div>
                </div>
              </div>
            </div>
          </LazyLoad>
        )
      })}
    </div>
  )
}

export default AppListing;
