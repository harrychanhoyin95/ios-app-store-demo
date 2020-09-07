import React from 'react';
import { useQuery } from '@apollo/client';
import { MoonLoader } from "react-spinners";

import { GET_FREE_APPS_LIST_QUERY } from './AppQuery'

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

  console.log("appsInfo", appsInfo)

  return (
    <div>
      Home
    </div>
  );
}

export default App;
