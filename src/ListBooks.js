import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {

    static PropTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    render() {

      	const {books, onMoveBook} = this.props

        return(
        	<div className="list-books">
        		<div className="list-books-title">
        			<h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                	<div>
                		<BookShelf title="Currently Reading" books={books.filter(
                			(book) => (book.shelf === "currentlyReading"))}
                		onMoveBook={onMoveBook}/>
                		<BookShelf title="Want to Read" books={books.filter(
                			(book) => (book.shelf === "wantToRead"))}
                		onMoveBook={onMoveBook}/>
                		<BookShelf title="Read" books={books.filter(
                			(book) => (book.shelf === "read"))}
                		onMoveBook={onMoveBook}/>
                	</div>
                	<div className="open-search">
                		<Link className="close-search" to="/search">Add a book</Link>
                	</div>
                </div>
            </div>
        )
  }
}

export default ListBooks;