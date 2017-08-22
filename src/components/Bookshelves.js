import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

export const Bookshelves = (props) => {
  const currentlyReading = props.allBooks.filter((books) => books.shelf === 'currentlyReading')
  const wantToRead = props.allBooks.filter((books) => books.shelf === 'wantToRead')
  const read = props.allBooks.filter((books) => books.shelf === 'read')

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf list={currentlyReading} update={(book, shelf) => props.update(book, shelf)} title="Currently Reading"/>
        <Shelf list={wantToRead} update={(book, shelf) => props.update(book, shelf)} title="Want To Read"/>
        <Shelf list={read} update={(book, shelf) => props.update(book, shelf)} title="Read"/>
      </div>
      <div className="open-search">
        <Link to="/search">Search Books</Link>
      </div>
    </div>
  )
}

Bookshelves.propTypes = {
  allBooks: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}
export default Bookshelves
