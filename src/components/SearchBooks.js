import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
    
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <SearchResults
          list={this.props.list}
          filterText={this.state.filterText}
          update={this.props.update}
        />
      </div>
    );
  }
}

SearchBooks.propTypes = {
  list: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
};
export default SearchBooks;