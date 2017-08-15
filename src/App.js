import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  moveBook = (book, shelf) => {

    let moved_book = book;
    moved_book.shelf = shelf;

    BooksAPI.update(book, shelf).then(() => {

      this.setState ((state) => (
        {books: state.books.filter((b)=> b.id !== book.id).concat([moved_book])}))

    })
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onMoveBook={this.moveBook}/>
        )}/>

        <Route path="/search" render={() => (
          <SearchPage/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
