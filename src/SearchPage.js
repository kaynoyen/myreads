import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchPage extends Component {

  state = {
    showingBooks: []
  }

  updateShowingBooks = (value) => {
    console.log(value)
  }

render() {

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
              <ol className="books-grid"></ol>
            </div>
          </div>

          )
      }
  }

  export default SearchPage;