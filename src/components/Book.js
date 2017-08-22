import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component { 
    constructor(props) {
        super(props)
    
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        e.preventDefault()
        this.props.update(this.props.item, e.target.value);
    }
    render(){
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${this.props.item.imageLinks.thumbnail}')` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleChange} value={this.props.item.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.item.title}</div>
                    {this.props.item.authors.map((author, index) => (
                        <div key={index} className="book-authors">{author}</div>
                    ))}           
                </div>
            </li>
        )
    }
}

Book.propTypes = {
  item: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired
};
export default Book;
