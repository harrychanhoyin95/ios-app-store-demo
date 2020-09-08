import React from 'react';
import { useQuery } from '@apollo/client';
import { MoonLoader } from "react-spinners";

import { GET_FREE_APPS_LIST_QUERY } from './AppQuery'

import SearchBar from '../SearchBar/SearchBar'
import AppListing from '../AppListing/AppListing'

import './App.scss'

const App = () => {
  const { loading, error, data } = useQuery(GET_FREE_APPS_LIST_QUERY)

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
  
  const { appsInfo } = data

  return (
    <div>
      <SearchBar className="app_search-bar-container" />
      <AppListing appsInfo={appsInfo} />
    </div>
  );
}

export default App;
