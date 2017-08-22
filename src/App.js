import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Bookshelves from './components/Bookshelves'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }

    this.update = this.update.bind(this)
  }
  update (updatedBook, shelf) {
    this.setState(state => ({
      books: state.books.map(book => {
        if (book.id === updatedBook.id) {
          book.shelf = shelf
        }
        return book
      })
    }))

    BooksAPI.update(updatedBook, shelf)
    this.getBooks()
  }
  getBooks () {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  componentDidMount () {
    this.getBooks()
  }
  render () {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelves allBooks={this.state.books} update={(updatedBook, shelf) => {this.update(updatedBook, shelf)}}/>
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks list={this.state.books} update={(updatedBook, shelf) => {this.update(updatedBook, shelf)}}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
