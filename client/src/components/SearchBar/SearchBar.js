import React from 'react';
import { connect } from 'react-redux'

import { onSearchKeyWordChange } from '../../redux/actions/index'

import './SearchBar.scss'

const SearchBar = ({
  className,
  onSearchKeyWordChange,
  searchKeyword
}) => {
  return (
    <div className={className}>
      <input
        className="search-bar_input"
        value={searchKeyword}
        onChange={(e) => onSearchKeyWordChange(e.target.value)}
        placeholder="搜尋"
      />
    </div>
  )
}

const mapStateToProps = state => ({
  searchKeyword: state.keyword
})

const mapDispatchToProps = { onSearchKeyWordChange }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
