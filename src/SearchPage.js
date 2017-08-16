import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {

  state = {
    showingBooks: []
  }

  updateShowingBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((sb)=>(
        this.setState(()=>({showingBooks:sb}))
        )
      )
    } else {
      this.setState(()=>({showingBooks:[]}))
    }
  }

  moveBookDummy = () => {

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
                  <li key={book.id}><Book data={book} onMoveBook={this.moveBookDummy}/></li>
                  ))}
              </ol>
            </div>
          </div>

          )
      }
  }

  export default SearchPage;