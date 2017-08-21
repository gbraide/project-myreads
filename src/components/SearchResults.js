import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class SearchResults extends Component { 
  render() {
    var items = [];
    const _this =this;
    this.props.list.forEach((item) => {
      const searchString = item.authors.toString().concat(item.title);

      if (searchString.toLowerCase().indexOf(_this.props.filterText.toLowerCase()) === -1) {
        return;
      }
      items.push(<Book item={item} key={item.id} update={_this.props.update}/>);
    });
    return(
      <div className="search-books-results">
        <ol className="books-grid">
          {items}
        </ol>
      </div>
    );
}
}

//Typechecking with PropTypes
SearchResults.propTypes = {
  list: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired
};

export default SearchResults;