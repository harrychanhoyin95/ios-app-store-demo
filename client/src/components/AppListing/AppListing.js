import React from 'react';
import Rating from 'react-rating'
import LazyLoad from 'react-lazyload';
import InfiniteScroll from "react-infinite-scroll-component";
import Fade from 'react-reveal/Fade';
import { MoonLoader } from "react-spinners";
import { MobileOnlyView, TabletView, BrowserView } from 'react-device-detect'

import './AppListing.scss';

const AppListing = ({
  freeApps,
  fetchMore
}) => {
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
        hasMore={freeApps.length !== 100}
        loader={<div className="app-listing_loading-container"><MoonLoader size={30} /></div>}
        endMessage={<div></div>}
      >
        {freeApps.map((apps, index) => {
          return (
            <LazyLoad key={apps.title} height={100}>
              <Fade left>
                <a
                  className="app-listing_apps-container"
                  href={apps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="app-listing_apps-container-border-bottom">
                    <div className="app-listing_index">{index + 1}</div>
                    <MobileOnlyView  viewClassName="mobile-only">
                      <img
                        src={apps.images.artworkUrl100} 
                        alt={apps.title}
                        className={`app-listing_image ${index % 2 === 0 ? "odd-image" : "even-image" }`}
                      />
                    </MobileOnlyView>
                    <TabletView viewClassName="tablet-only">
                      <img
                        src={apps.images.artworkUrl512} 
                        alt={apps.title}
                        className={`app-listing_image ${index % 2 === 0 ? "odd-image" : "even-image" }`}
                      />
                    </TabletView>
                    <BrowserView viewClassName="browser-only">
                      <img
                        src={apps.images.artworkUrl512} 
                        alt={apps.title}
                        className={`app-listing_image ${index % 2 === 0 ? "odd-image" : "even-image" }`}
                      />
                    </BrowserView>
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
                </a>
              </Fade>
            </LazyLoad>
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default AppListing;
