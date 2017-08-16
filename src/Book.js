import React, { Component } from 'react'

class Book extends Component {

	render() {

		const {data, onMoveBook} = this.props

		return(
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(typeof data.imageLinks !== 'undefined') && data.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(event) => onMoveBook(data, event.target.value)} value={data.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{data.title}</div>
              <div className="book-authors">{
                (typeof data.authors !== 'undefined') && data.authors.join(', ')
               }</div>
            </div>
		)
	}

}

export default Book;