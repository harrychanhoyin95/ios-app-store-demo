import React from 'react';
import Rating from 'react-rating'

import './SearchResult.scss'

const SearchResult = ({ searchedApps }) => {
  return (
    <div className="searched-result_apps-container">
      {searchedApps.map((apps, index) => {
        return (
          <a
            className="searched-result_apps-container-border-bottom"
            href={apps.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="searched-result_index">{index + 1}</div>
            <img
              src={apps.images.artworkUrl100} 
              alt={apps.title}
              className={`searched-result_image ${index % 2 === 0 ? "odd-image" : "even-image" }`}
            />
            <div className="searched-result_content">
              <div className="searched-result_title">{apps.title}</div>
              <div className="searched-result_category">{apps.category}</div>
              <div className="searched-result_rating">
                <Rating
                  readonly
                  quiet
                  initialRating={apps.rating}
                  emptySymbol={<i className="far fa-star empty-star"></i>}
                  fullSymbol={<i className="fas fa-star full-star"></i>}
                />
                <span className="searched-result_rating-count">({apps.ratingCount})</span>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default SearchResult;
