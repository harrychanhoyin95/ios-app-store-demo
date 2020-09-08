import React from 'react';
import { useQuery } from '@apollo/client';
import { MoonLoader } from "react-spinners";
import _ from "lodash";

import { GET_FREE_APPS_LIST_QUERY } from './AppQuery'

import SearchBar from '../SearchBar/SearchBar'
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
  if (loading) return (
    <div className="app_loading-container">
      <MoonLoader />
    </div>
  )

  if (error) return (
    <div className="app_error-container">
      <i className="fas fa-exclamation-circle fa-4x"></i>
      <div className="app_error-message">Oops! Something went wrong.</div>
    </div>
  )
  
  const freeApps = _.get(data, "allFreeApps.freeApps", [])

  return (
    <div>
      <SearchBar className="app_search-bar-container" />
      <AppListing freeApps={freeApps} fetchMore={fetchMore} />
    </div>
  );
}

export default App;
