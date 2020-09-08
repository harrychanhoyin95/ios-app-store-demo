import React from 'react';

import './SearchBar.scss'

const SearchBar = ({
  className
}) => {
  return (
    <div className={className}>
      <input className="search-bar_input" />
    </div>
  )
}

export default SearchBar;
