import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchPage extends Component {

  static PropTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
    }

  state = {
    showingBooks: []
  }

  mergeBooks = (mBooks, sBooks) => {

    let mergedBooks = sBooks.map(sBook => {

      let shelf = 'none'
      for (let i=0; i<mBooks.length; i++) {
        if (mBooks[i].id === sBook.id) {
          shelf = mBooks[i].shelf
          break
        }
      }
      sBook.shelf = shelf
      return sBook
    })
    return mergedBooks
  }

  updateShowingBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then(searchBooks => {
        this.setState(()=>({showingBooks: this.mergeBooks(this.props.books, searchBooks)}))
        }
      )
    } else {
      this.setState(()=>({showingBooks: []}))
    }
  }

render() {

  const {showingBooks} = this.state

	return(

		<div className="search-books">
       		<div className="search-books-bar">
       			<Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={(e)=>this.updateShowingBooks(e.target.value)}
                /> 
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {showingBooks.map((book)=>(
                  <li key={book.id}><Book data={book} onMoveBook={this.props.addBook}/></li>
                  ))}
              </ol>
            </div>
          </div>

          )
      }
  }

  export default SearchPage;