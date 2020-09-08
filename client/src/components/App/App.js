import React from 'react';
import { useQuery } from '@apollo/client';
import { MoonLoader } from "react-spinners";
import _ from "lodash";

import { GET_FREE_APPS_LIST_QUERY } from './FreeAppsQuery'
import { GET_GROSSING_APPS_LIST_QUERY } from './GrossingAppsQuery'

import SearchBar from '../SearchBar/SearchBar'
import AppRecommendation from '../AppRecommendation/AppRecommendation'
import AppListing from '../AppListing/AppListing'

import './App.scss'

const App = () => {
  const { loading, error, data, fetchMore } = useQuery(
    GET_FREE_APPS_LIST_QUERY, 
    {
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

  if (loading || grossingLoading) return (
    <div className="app_loading-container">
      <MoonLoader />
    </div>
  )

  if (error || grossingError) return (
    <div className="app_error-container">
      <i className="fas fa-exclamation-circle fa-4x"></i>
      <div className="app_error-message">Oops! Something went wrong.</div>
    </div>
  )
  
  const freeApps = _.get(data, "allFreeApps.freeApps", [])
  const grossingApps = _.get(grossingData, "allGrossingApps.grossingApps", [])

  return (
    <div>
      <SearchBar className="app_search-bar-container" />
      <AppRecommendation freeApps={freeApps} grossingApps={grossingApps} />
      <AppListing freeApps={freeApps} fetchMore={fetchMore} />
    </div>
  );
}

export default App;
