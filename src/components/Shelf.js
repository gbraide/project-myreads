import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {
  render () {
    const items = []
    const _this = this
    this.props.list.forEach((item) => {
      items.push(<Book item={item} key={item.id} update={(book, shelf) => _this.props.update(book, shelf)}/>);
    })
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <ol className="books-grid">
          {items}
        </ol>
      </div>
    )
  }
}

Shelf.propTypes = {
  list: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}
export default Shelf
