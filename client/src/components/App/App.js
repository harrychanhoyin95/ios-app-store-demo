import React from 'react';
import { useQuery } from '@apollo/client';
import { MoonLoader } from "react-spinners";
import { connect } from 'react-redux'
import _ from "lodash";

import { GET_FREE_APPS_LIST_QUERY } from './FreeAppsQuery'
import { GET_GROSSING_APPS_LIST_QUERY } from './GrossingAppsQuery'
import { SEARCH_QUERY } from './SearchQuery'

import SearchBar from '../SearchBar/SearchBar'
import AppRecommendation from '../AppRecommendation/AppRecommendation'
import AppListing from '../AppListing/AppListing'
import SearchResult from '../SearchResult/SearchResult'

import './App.scss'

const App = ({ searchKeyword }) => {
  const { loading, error, data, fetchMore } = useQuery(
    GET_FREE_APPS_LIST_QUERY, {
      variables: {
        offset: 0,
        limit: 10
      },
    }
  )

  const { 
    loading: grossingLoading,
    error: grossingError,
    data: grossingData 
  } = useQuery(GET_GROSSING_APPS_LIST_QUERY)

  const {
    loading: searchLoading,
    error: searchError,
    data: searchData 
  } = useQuery(SEARCH_QUERY, {
    variables: {
      filter: searchKeyword
    }
  })

  if (loading || grossingLoading) return (
    <div className="app_loading-container">
      <MoonLoader />
    </div>
  )

  if (error || grossingError || searchError) return (
    <div className="app_error-container">
      <i className="fas fa-exclamation-circle fa-4x"></i>
      <div className="app_error-message">Oops! Something went wrong.</div>
    </div>
  )
  
  const freeApps = _.get(data, "allFreeApps.freeApps", [])
  const grossingApps = _.get(grossingData, "allGrossingApps.grossingApps", [])
  const searchedApps = _.get(searchData, "allSearchedApps.searchedApps", [])

  return (
    <div>
      <SearchBar className="app_search-bar-container" />
      {searchedApps.length === 0 && searchKeyword === "" ? (
        <>
          <AppRecommendation freeApps={freeApps} grossingApps={grossingApps} />
          <AppListing freeApps={freeApps} fetchMore={fetchMore} />
        </>
      ): (
        <>
          {searchLoading ? (
            <div className="app_loading-container">
              <MoonLoader />
            </div>
           ) : (
            <SearchResult searchedApps={searchedApps} />
           )}
        </>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  searchKeyword: state.keyword
})

export default connect(mapStateToProps, null)(App);
