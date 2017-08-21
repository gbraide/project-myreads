import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelve from './Shelve';

class Bookshelves extends Component { 
  render() {
    const currentlyReading = this.props.allBooks.filter((books) => books.shelf === "currentlyReading");
    const wantToRead = this.props.allBooks.filter((books) => books.shelf === "wantToRead");
    const read = this.props.allBooks.filter((books) => books.shelf === "read");

    return (
        <div className="list-books">
           <div className="list-books-title">
             <h1>MyReads</h1>
           </div>
           <div className="list-books-content">
               <Shelve list={currentlyReading} update={this.props.update} title="Currently Reading"/>
               <Shelve list={wantToRead} update={this.props.update} title="Want To Read"/>
               <Shelve list={read} update={this.props.update} title="Read"/>
            </div>
           <div className="open-search">
            <Link to="/search">Search Books</Link>
           </div>
        </div>
    );
  }
}

Bookshelves.propTypes = {
    allBooks: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired
};
export default Bookshelves;
