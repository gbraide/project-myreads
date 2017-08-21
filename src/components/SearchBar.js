import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    e.preventDefault()
    this.props.onFilterTextInput(e.target.value);
  }
  
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            type="text" 
            placeholder="Search by title or author"
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
            />            
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
