import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bookshelves from './components/Bookshelves';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.state = {    
      books: []
    };

    this.update = this.update.bind(this)
  }
  update() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render(){
    return(
      <div className="app">
      <Route exact path='/' render={() => (
        <Bookshelves allBooks={this.state.books} update={this.update}/>
      )}/>
      <Route path='/search' render={({ history }) => (
        <SearchBooks list={this.state.books} update={this.update}/>
      )}/>
    </div>
    )
  }
}

export default BooksApp
