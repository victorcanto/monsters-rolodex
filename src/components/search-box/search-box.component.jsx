import React from 'react';

class SearchBox extends React.Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        type='search'
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
