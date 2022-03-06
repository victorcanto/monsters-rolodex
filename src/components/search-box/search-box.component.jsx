import React from 'react';

import './search-box.styles.css';

class SearchBox extends React.Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        type='search'
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
