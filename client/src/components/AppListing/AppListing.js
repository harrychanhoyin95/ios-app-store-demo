import React from 'react';
import Rating from 'react-rating'
import LazyLoad from 'react-lazyload';
import InfiniteScroll from "react-infinite-scroll-component";
import { MoonLoader } from "react-spinners";

import './AppListing.scss';

const AppListing = ({
  freeApps,
  fetchMore
}) => {
  console.log("freeApps", freeApps)

  return (
    <div  className="app-listing_container">
      <InfiniteScroll
        dataLength={freeApps.length}
        next={() => fetchMore({
          variables: {
            offset: freeApps.length
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return {
              allFreeApps: {
                freeApps: [...prev.allFreeApps.freeApps, ...fetchMoreResult.allFreeApps.freeApps],
                totalCount: prev.allFreeApps.totalCount + fetchMoreResult.allFreeApps.totalCount
              }
            }
          }
        })}
        hasMore={true}
        loader={<MoonLoader />}
        endMessage={
          <p style={{textAlign: 'center'}}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {freeApps.map((apps, index) => {
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
      </InfiniteScroll>
    </div>
  )
}

export default AppListing;
