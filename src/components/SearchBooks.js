import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput (e) {
    e.preventDefault()
    const currentBooks = this.props.list.map((book, i) => book.id)
    const results = []

    BooksAPI.search(e.target.value).then(books => {
      books.forEach(function (book) {
        if (!currentBooks.includes(book.id)) {
          book.shelf = 'none'
          results.push(book)
        }
      })
      this.setState({ books: results })
    })
  }

  render () {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.props.filterText}
                onChange={this.handleSearchInput}
              />
            </div>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.books.map((book) =>
              <Book item={book} key={book.id} update={(book, shelf) => this.props.update(book, shelf)}/>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  list: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}
export default SearchBooks
