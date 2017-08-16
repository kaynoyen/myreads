import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


class BookShelf extends Component {

  static PropTypes = {
    book: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onMoveBook: PropTypes.func.isRequired
    }

render() {

	const {books, title, onMoveBook} = this.props

	return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
            	<ol className="books-grid">
            	{books.map((book)=>
            		<li key={book.id}>
            			<Book data={book} onMoveBook={onMoveBook}/>
            		</li>)}
               	</ol>
          	</div>
        </div>
          )
      }
  }

  export default BookShelf;